import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout/layout'
import TitleSection from '../components/title_section/title_section'
import * as NpsStyles from '../styles/pages/nps.module.scss'

const Card = props => {
  return (
    <Link to={props.link} className={NpsStyles.npsCard}>
      <div className={NpsStyles.npsCard__left}>
        <strong>{props.title}</strong>
        <span>Type : {props.type ? props.type : '-'}</span>
        <span>Size : {props.size ? props.size : '-'}</span>
      </div>

      <div className={NpsStyles.npsCard__score}>{props.score}</div>
    </Link>
  )
}

const NpsBenchmarks = () => {
  const data = useStaticQuery(graphql`
    {
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
  const cardData = data.allNpsJson.edges
  return (
    <Layout metaTitle="NPS Benchmarks">
      <div className="container">
        <TitleSection
          title="NPS Benchmarks"
          description="Data Sourced from json file"
        />

        <div className={NpsStyles.npsCardWrapper}>
          {cardData.map((item, index) => {
            return (
              <Card
                key={index}
                link={`/nps/${item.node.slug}`}
                title={item.node.companyName}
                type={item.node.businessType}
                size={item.node.employeeSize}
                score={item.node.npsScore}
              />
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default NpsBenchmarks
