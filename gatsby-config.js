const intlMessages = {
  en: require("./src/intl/en.json"),
  zh: require("./src/intl/zh.json"),
}
const languages = Object.keys(intlMessages)
const defaultLanguage = `en`

module.exports = {
  siteMetadata: {
    languages,
    intlMessages,
    defaultLanguage,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages,
        defaultLanguage,
        redirect: true,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `INDIE.MEN`,
        short_name: `indiemen`,
        start_url: `/`,
        background_color: `#025064`,
        theme_color: `#025064`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
