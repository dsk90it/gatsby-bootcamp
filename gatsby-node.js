const path = require('path')

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

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogData = await graphql(`
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
  `)

  blogData.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      path: `blog/${edge.node.fields.slug}`,
      component: path.resolve(`src/templates/blog-content.js`),
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })

  const npsData = await graphql(`
    query {
      allNpsJson {
        edges {
          node {
            companyName
            employeeSize
            businessType
            slug
            npsScore
          }
        }
      }
    }
  `)

  npsData.data.allNpsJson.edges.forEach(nps => {
    createPage({
      path: `nps/${nps.node.slug}`,
      component: path.resolve(`src/templates/nps-content.js`),
      context: {
        slug: nps.node.slug,
      },
    })
  })

  const bookData = await graphql(`
    query {
      allBooksJson {
        edges {
          node {
            title
            authors
            categories
            publisher
            publishedDate
            description
            previewLink
            slug
          }
        }
      }
    }
  `)

  bookData.data.allBooksJson.edges.forEach(book => {
    createPage({
      path: `books/${book.node.slug}`,
      component: path.resolve(`src/templates/book-content.js`),
      context: {
        slug: book.node.slug,
      },
    })
  })
}
