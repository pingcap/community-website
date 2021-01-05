module.exports = {
  siteMetadata: {
    title: 'TiDB DevGroup',
    description: 'TiDB Developer Group',
    author: 'PingCAP FE Team',
    siteUrl: 'https://tidb.io/',
  },
  plugins: [
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "./images/TiDB-logo-red.svg"
      }
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/images`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown",
        path: "./markdown-pages",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown",
        path: "./src/data",
      },
      __key: "pages",
    },
    `gatsby-plugin-sass`
  ],
};
