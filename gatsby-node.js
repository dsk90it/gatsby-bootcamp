const path = require('path')
const fs = require('fs')

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md')

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

module.exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // Create blog pages dynamically
  const blog = graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(edge => {
      createPage({
        path: `blog/${edge.node.fields.slug}`,
        component: path.resolve(`src/templates/blog-content.js`),
        context: {
          slug: edge.node.fields.slug,
        },
      })
    })
  })

  // Create NPS Pages
  const npsBenchmarks = new Promise(resolve => {
    const npsIndexPage = path.resolve(`src/templates/nps-index.js`)
    const npsContentPage = path.resolve(`src/templates/nps-content.js`)
    const allNps = JSON.parse(
      fs.readFileSync('content/nps.json', { encoding: 'utf-8' })
    )

    createPage({
      path: `/nps`,
      component: npsIndexPage,
      context: {
        ...allNps.npsBenchmarks,
      },
    })

    allNps.npsBenchmarks.forEach(nps => {
      createPage({
        path: `nps/${nps.slug}`,
        component: npsContentPage,
        context: {
          ...nps,
        },
      })
    })
    resolve()
  })

  return Promise.all([blog, npsBenchmarks])
}
