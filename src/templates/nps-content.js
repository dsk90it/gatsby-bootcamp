import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import * as NpsStyles from '../styles/pages/nps.module.scss'

export const npsQuery = graphql`
  query($slug: String!) {
    npsJson(slug: { eq: $slug }) {
      companyName
      about
      website
      headquarter
      industry
      businessType
      companyType
      employeeSize
      foundedYear
      npsScore
      source
      metaTitle
      metaDesc
      slug
    }
  }
`

const NPSContent = props => {
  return (
    <Layout
      metaTitle={props.data.npsJson.metaTitle}
      metaDescription={props.data.npsJson.metaDesc}
    >
      <div className="container">
        {/* hero-section starts */}
        <section className={NpsStyles.npsDetails}>
          <div className={NpsStyles.npsDetails__left}>
            <div className={NpsStyles.breadcrumb}>
              <Link to={'/nps'}>NPS</Link> &nbsp; &gt;&gt; &nbsp;
              <span>{props.data.npsJson.companyName}</span>
            </div>
            <h1>{props.data.npsJson.companyName}</h1>
            <p>{props.data.npsJson.about}</p>
          </div>

          <div className={NpsStyles.npsDetails__right}>
            {props.data.npsJson.npsScore}
          </div>
        </section>
        {/* hero-section ends */}

        {/* table starts */}
        <ul className={NpsStyles.tableSection}>
          <li>
            <b>Source: </b>
            <a
              rel="noreferrer"
              href={props.data.npsJson.source}
              target="_blank"
            >
              {props.data.npsJson.source}
            </a>
          </li>
          <li>
            <b>Headquarter: </b>
            {props.data.npsJson.headquarter}
          </li>
          <li>
            <b>Industry: </b>
            {props.data.npsJson.industry}
          </li>
          <li>
            <b>Business type: </b>
            {props.data.npsJson.businessType}
          </li>
          <li>
            <b>Type: </b>
            {props.data.npsJson.companyType}
          </li>
          <li>
            <b>Employee size: </b>
            {props.data.npsJson.employeeSize}
          </li>
          <li>
            <b>Founded: </b>
            {props.data.npsJson.foundedYear}
          </li>
        </ul>
        {/* table ends */}
      </div>
    </Layout>
  )
}

export default NPSContent
