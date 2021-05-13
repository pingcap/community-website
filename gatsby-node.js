const SentryWebpackPlugin = require("@sentry/webpack-plugin");

const createHome = require('./src/create-pages/createHome');
const createSIG = require('./src/create-pages/createSIG');
const createPeople = require('./src/create-pages/createPeople');
const createRanking = require('./src/create-pages/createRanking');
const createIntlPages = require('./src/create-pages/intl');

exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  const config = getConfig();
  const { module, resolve, plugins } = config;

  actions.replaceWebpackConfig({
    ...config,

    resolve: {
      ...resolve,
      modules: [__dirname, 'node_modules'],
    },

    module: {
      ...module,
      rules: [
        // https://github.com/Negan1911/storybook-svgr-react-component/blob/master/index.js
        ...module.rules.map((_) => {
          if (_.test?.toString().includes('svg|')) {
            return {
              ..._,
              exclude: /node_modules/,
            };
          }
          return _;
        }),

        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
          include: /node_modules/,
        },
      ],
    },

    plugins: [
      ...plugins,
      process.env.ENABLE_SENTRY === 'true' && stage === "build-javascript" && new SentryWebpackPlugin({
        authToken: process.env.SENTRY_AUTH_TOKEN,
        org: "pingcap",
        project: "community-website",
        setCommits: process.env.ENABLE_SET_COMMITS === 'true' && {
          auto: true,
        },
        release: process.env.SENTRY_RELEASE,
        include: "./public",
      }),
    ].filter(Boolean),
  });
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions;

  await Promise.all([
    createHome({ graphql, createPage, createRedirect }),
    createPeople({ graphql, createPage, createRedirect }),
    createSIG({ graphql, createPage, createRedirect }),
    createRanking({ graphql, createPage, createRedirect }),
  ]);
};

exports.onCreatePage = ({ page, actions }) => {
  createIntlPages({ page, actions });
};
