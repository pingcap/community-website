const path = require('path')
const axios = require('axios')

module.exports = async ({ graphql, createPage, createRedirect }) => {
  const component = path.resolve(`${__dirname}/templates/SIG/index.jsx`)
  const urlPrefix = '/SIG'
  const url = `${urlPrefix}`
  
  const api = 'https://bots.tidb.io/ti-community-bot/sigs'
  const response = await axios.get(api)
  const items = response.data.data?.sigs || []
  // console.log('sig list', items)
  
  createPage({
    path: url,
    component,
    context: {
      items,
    },
  })
  
  items.forEach(item => {
    const component = path.resolve(`${__dirname}/templates/SIG/detail.jsx`)
    const url = `${urlPrefix}/${item.name}`
    createPage({
      path: url,
      component,
      context: {
        ...item,
      },
    })
  })
  
}
