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
    <div 
      className="CaseCard--Image relative "
      style={{
        backgroundImage: `url(${HomeImage})`
      }}
    >
      <div className="case-card-flex container">
        <h3 className="">
          {ProjetosTitle}
        </h3>
        <div className="case-sub">
          <p>
            {ProjetosDescription}
          </p>
        </div>
        <div className="ver-mais">
          <p>
            ver mais
          </p>
        </div>
      </div>
    </div>
  </Link>
)

export default CaseCard
