import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import BlogStyles from '../styles/pages/blog.module.scss'

const BlogContent = () => {
  return (
    <Layout>
      <div className="container">
        <div className={BlogStyles.titleSection}>
          <Link to="/blog">
            <svg
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
            </svg>
            Back to Blog
          </Link>
          <h1>Blog</h1>
        </div>

        <h1>This is Blog Template</h1>
      </div>
    </Layout>
  )
}

export default BlogContent
