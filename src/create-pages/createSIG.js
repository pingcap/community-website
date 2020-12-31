const path = require('path')
const axios = require('axios')

module.exports = async ({ graphql, createPage, createRedirect }) => {
  const component = path.resolve(`${__dirname}/templates/SIG/index.jsx`)
  const urlPrefix = '/SIG'
  const url = `${urlPrefix}`
  
  const api = 'https://bots.tidb.io/ti-community-bot/sigs'
  const response = await axios.get(api)
  const items = response.data.data.sigs || []
  
  createPage({
    path: url,
    component,
    context: {
      items,
    },
  })
  
  for (const item of items) {
    const component = path.resolve(`${__dirname}/templates/SIG/detail.jsx`)
    const url = `${urlPrefix}/${item.name}`
    const api = `https://bots.tidb.io/ti-community-bot/sigs/${item.name}`
    // let response
    try {
      const response = await axios.get(api)
      console.log(item.name, response.data.status)
      const apiData = response.data.data || {}
    
      createPage({
        path: url,
        component,
        context: {
          ...item,
          apiData,
        },
      })
    } catch (e) {
      console.error('download SIG detail error', e)
    }
  }
}
