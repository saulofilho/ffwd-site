import React from 'react'
import { Link } from 'gatsby'

import './CaseCard.css'

const CaseCard = ({
  HomeImage,
  ProjetosTitle,
  ProjetosDescription,
  slug,
  className = ''
}) => (
  <Link to={slug} className={`CaseCard ${className}`}>
    {HomeImage && (
      <div 
        className="CaseCard--Image relative"
        style={{
          backgroundImage: `url(${HomeImage})`
        }}
      >
        <div className="case-card-flex">
          <div className="case-card-top">
            <p className="default-text-title container">{ProjetosTitle}</p>
            <p className="default-text-sub container">{ProjetosDescription}</p>
          </div>
          <div className="case-card-down">
            <p className="default-text-sub container">ver mais</p>
          </div>
        </div>
      </div>
    )}
  </Link>
)

export default CaseCard
