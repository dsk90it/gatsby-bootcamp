import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import TitleSection from '../components/title_section/title_section'
import NpsStyles from '../styles/pages/nps.module.scss'

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

const NpsBenchmarks = props => {
  const _data = props.pageContext.pageData
  console.log(_data)

  return (
    <Layout>
      <div className="container">
        <TitleSection title="NPS Benchmarks" />

        <div className={NpsStyles.npsCardWrapper}>
          {_data.map((item, index) => {
            return (
              <Card
                key={index}
                link={`/nps/${item.slug}`}
                title={item.companyName}
                type={item.companyType}
                size={item.employeeSize}
                score={item.npsScore}
              />
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default NpsBenchmarks
