module.exports = {
  siteMetadata: {
    title: 'TiDB DevGroup',
    description: 'TiDB Developer Group',
    author: 'PingCAP FE Team',
    siteUrl: 'https://tidb.io/',
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-remove-serviceworker',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: './images/TiDB-logo-red.svg',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-mdx',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/images`,
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown',
        path: './markdown-pages',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown',
        path: './src/data',
      },
      __key: 'pages',
    },
    'gatsby-plugin-sass',
    process.env.ENABLE_SENTRY === 'true' && {
      resolve: "@sentry/gatsby",
      options: {
        dsn: "https://f06bb2c7279b4ffb8fb10a1e7b74fafe@o226447.ingest.sentry.io/5761377",
        release: process.env.SENTRY_RELEASE,
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-env-variables',
      options: {
        allowList: ['NEXT_PUBLIC_RUNTIME_ENV', 'NEXT_PUBLIC_API_BASE_URL']
      },
    },
  ].filter(Boolean),
};
