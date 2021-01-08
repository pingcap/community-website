const dayjs = require("dayjs")

const path = require('path')
const axios = require('axios')

module.exports = async ({ graphql, createPage, createRedirect }) => {
  const component = path.resolve(`${__dirname}/templates/ranking/ranking.jsx`)
  const url = '/ranking'
  
  const api = `https://bots.tidb.io/ti-community-bot/statistics/contributions`
  const response = await axios.get(api)
  const apiData = response.data.data || []
  
  createPage({
    path: url,
    component,
    context: {
      apiData,
    },
  })
  
  const now = dayjs()
  const endDate = now.format('YYYY-MM-DD')
  
  const durations = ['week', 'month', 'year']
  for (const duration of durations) {
    const startDateDuration = now.subtract(1, duration).format('YYYY-MM-DD')
    const apiDuration = `https://bots.tidb.io/ti-community-bot/statistics/contributions?startDate=${startDateDuration}&endDate=${endDate}`
    const urlDuration = `${url}/${duration}`
    const responseDuration = await axios.get(apiDuration)
    const apiDataDuration = responseDuration.data.data || []
    createPage({
      path: urlDuration,
      component,
      context: {
        apiData: apiDataDuration,
      },
    })
  }
}
