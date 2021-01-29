const axios = require('axios')
const apiHelper = require('./apiHelper')

async function cacheGithubAvatarFromContributor() {
  console.log('cache contributors github avatar')
  const api = `https://bots.tidb.io/ti-community-bot/contributors`
  const response = await axios.get(api)
  const githubNames = response.data.data.contributors.map(item => item.githubName)
  console.log('githubNames count: ', githubNames.length)
  await apiHelper.cacheGitHubAvatar(githubNames)
}

cacheGithubAvatarFromContributor()
