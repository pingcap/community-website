
const apiHelper = require('./apiHelper')

const path = require('path')
const axios = require('axios')

module.exports = async ({ graphql, createPage, createRedirect }) => {
  const component = path.resolve(`${__dirname}/templates/home/index.jsx`)
  
  const api = `https://bots.tidb.io/ti-community-bot/sigs/`
  const response = await axios.get(api)
  const data = response.data.data || {}
  
  const {sigs} = data
  
  const sigSubMemberNames = {}
  const sigTop3 = sigs.slice(0, 3)
  for (const sig of sigTop3) {
    const {id} = sig
    const gitHubNames = await apiHelper.getGitHubNamesBySigId(id)
    console.log('gitHubNames in createHome', gitHubNames)
    sigSubMemberNames[id] = gitHubNames
  }
  console.log('create sigSubMemberNames in createHome', sigSubMemberNames)
  
  const url = `/`
  
  const sigTop3Items = sigTop3.map(item => {
    return {
      title: item.name,
      summary: item.info,
      sigSubMemberNames: sigSubMemberNames[item.id]
    }
  })
  
  createPage({
    path: url,
    component,
    context: {
      sigTop3: sigTop3Items,
    },
  })
  
}
