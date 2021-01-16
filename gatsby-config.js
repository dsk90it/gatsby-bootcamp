/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    github: "https://github.com/dsk90it",
    emailId: "dsk90it@gmail.com",
  },

  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/blog/`,
      },
    },
    "gatsby-transformer-remark",
  ],
}
