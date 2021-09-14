const path = require('path')
const axios = require('axios')
const langConfig = require("../../lang.config.js");

module.exports = async ({ graphql, createPage, createRedirect }) => {
  const component = path.resolve(`${__dirname}/templates/home/index.jsx`)
  

  const url = `/`

  
  const apiCommunityStar = `https://bots.tidb.io/ti-community-bot/members?level=committer&pageSize=4&current=1`
  const responseCommunityStar = await axios.get(apiCommunityStar)
  const dataCommunityStar = responseCommunityStar.data.data || {}
  const itemsCommunityStar = dataCommunityStar.members
  
  createPage({
    path: url,
    component,
    context: {
      itemsCommunityStar,
    },
  })
  
  createPage({
    path: `/zh${url}`,
    component,
    context: {
      itemsCommunityStar,
      language: 'zh',
      ...langConfig.languages['zh'],
    },
  })
  
}
