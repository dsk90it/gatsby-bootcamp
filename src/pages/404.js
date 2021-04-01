import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const pageNotFound = () => {
  return (
    <Layout>
      <div className="container">
        <h1>Page Not Found</h1>
        <p>Oops! The page you are looking for has been removed or relocated.</p>
        <Link to="/">Go Back</Link>
      </div>
    </Layout>
  )
}

export default pageNotFound
