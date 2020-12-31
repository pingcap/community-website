const path = require('path')
const axios = require('axios')

module.exports = async ({ graphql, createPage, createRedirect }) => {
  const component = path.resolve(`${__dirname}/templates/people/PeopleDetail.jsx`)
  const urlPrefix = '/people'
  
  const people = ['leader', 'co-leader', 'committer', 'reviewer', 'active-contributor']
  for (const item of people) {
    const api = `https://bots.tidb.io/ti-community-bot/members?level=${item}`
    const response = await axios.get(api)
    const members = response.data.data.members || []
    console.log('people', item)
  
    const url = `${urlPrefix}/${item}`
    
    createPage({
      path: url,
      component,
      context: {
        type: item,
        members,
      },
    })
  }
  
  console.log('fetch contributors')
  const api = `https://bots.tidb.io/ti-community-bot/contributors?pageSize=20&current=1`
  const response = await axios.get(api)
  const url = `${urlPrefix}/contributor`
  
  const members = response.data.data.contributors || []
  createPage({
    path: url,
    component,
    context: {
      type: 'contributor',
      members,
    },
  })
  
}
