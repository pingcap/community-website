const createSIG = require('./src/create-pages/createSIG')
const createPeople = require('./src/create-pages/createPeople')
const createRanking = require('./src/create-pages/createRanking')

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [
        // path.resolve(__dirname, "src"),
        __dirname,
        "node_modules",
      ],
    },
  })
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions
  
  // createRedirect({
  //   fromPath: '/download/community/',
  //   toPath: '/download',
  //   redirectInBrowser: true,
  //   isPermanent: true,
  // })
  
  await Promise.all([
    // createPeople({ graphql, createPage, createRedirect }),
    createSIG({ graphql, createPage, createRedirect }),
    createPeople({ graphql, createPage, createRedirect }),
    createRanking({ graphql, createPage, createRedirect }),
  ])
}
