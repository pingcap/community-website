const fs = require('fs')
const path = require('path')
const axios = require('axios')
const dayjs = require('dayjs')

const sleep = (millisecond) => new Promise((resolve => {
  setTimeout(() => resolve(), millisecond)
}))

function writeFile(path, filename, content) {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true })
  }
  fs.writeFile(`${path}/${filename}`, content, { 'flag': 'a' }, err => err && console.error('fs.writeFile err: ', err))
}


async function getGitHubNamesBySigId(sigId) {
  try {
    const apiMember = `https://bots.tidb.io/ti-community-bot/members?sigId=${sigId}`
    const responseMember = await axios.get(apiMember)
    const dataMember = responseMember.data.data || {}
    const {members} = dataMember
    const subMember = members.slice(0, 9)
    const subMemberUsernames = subMember.map(member => member.githubName)
    await cacheGitHubAvatar(subMemberUsernames)
    return subMemberUsernames
  } catch (e) {
    console.error('getGitHubNamesBySigId error, ', sigId)
    return []
  }
}


async function cacheGitHubAvatar(username) {
  if (Array.isArray(username)) {
    for (const usernameElement of username) {
      await cacheOneGitHubAvatar(usernameElement)
      /* sleep 10s */
      await sleep(10 * 1000)
    }
  } else {
    await cacheOneGitHubAvatar(username)
  }
}

async function cacheOneGitHubAvatar(username) {
  const targetDir = path.resolve(__dirname, `../../public/cache/github-avatar`)
  const fileName = `${username}.png`
  const fullPath = `${targetDir}/${fileName}`
  let needForceUpdateCache = true
  if (fs.existsSync(fullPath)) {
    needForceUpdateCache = dayjs().diff(dayjs(fs.statSync(fullPath).mtime), 'day') > 7
  }
  console.log('GitHubAvatar cache fullPath: ', fullPath)
  console.log('needForceUpdateGitHubAvatarCache: ', needForceUpdateCache)
  if (needForceUpdateCache) {
    try {
      const url = `https://github.com/${fileName}`
      const response = await axios({
        url,
        responseType: 'arraybuffer'
      })
      const {data} = response
      writeFile(targetDir, fileName, data)
    } catch (e) {
      console.error('cacheGitHubAvatar error, username: ', username, e)
    }
  }
}

module.exports = {
  writeFile,
  getGitHubNamesBySigId,
  cacheGitHubAvatar,
}
