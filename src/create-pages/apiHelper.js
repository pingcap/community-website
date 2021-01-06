const axios = require('axios')

async function getGitHubNamesBySigId(sigId) {
  try {
    const apiMember = `https://bots.tidb.io/ti-community-bot/members?sigId=${sigId}`
    const responseMember = await axios.get(apiMember)
    const dataMember = responseMember.data.data || {}
    const {members} = dataMember
    const subMember = members.slice(0, 9)
    const subMemberUsernames = subMember.map(member => member.githubName)
    return subMemberUsernames
  } catch (e) {
    console.error('getGitHubNamesBySigId error, ', sigId)
    return []
  }
}

module.exports = {
  getGitHubNamesBySigId
}
