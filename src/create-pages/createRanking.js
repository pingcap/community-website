const path = require('path')
const axios = require('axios')

module.exports = async ({ graphql, createPage, createRedirect }) => {
  const component = path.resolve(`${__dirname}/templates/ranking/ranking.jsx`)
  const url = '/ranking'
  
  const api = `https://bots.tidb.io/ti-community-bot/statistics/contributions`
  const response = await axios.get(api)
  const apiData = response.data.data || []
  
  // console.log('ranking list', apiData)
  
  createPage({
    path: url,
    component,
    context: {
      apiData,
    },
  })
  
}
