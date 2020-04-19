import React from 'react'
import { Link } from 'gatsby'

import './CaseCard.css'

const CaseCard = ({
  featuredImage,
  NossosCasesAbout,
  NossosCasesTitle,
  title,
  excerpt,
  slug,
  categories = [],
  className = '',
  ...props
}) => (
  <Link to={slug} className={`CaseCard ${className}`}>
    {featuredImage && (
      <div className="CaseCard--Image relative">
        <p className="CaseCard--Title container">{NossosCasesTitle}</p>
        <p className="CaseCard--Title container">{NossosCasesAbout}</p>
        <img src={featuredImage} alt={title} />
      </div>
    )}
    {/* <div className="CaseCard--Content">
      {title && <p className="default-text-title">{title}</p>}
      <div className="CaseCard--Category">
        {categories && categories.map(cat => cat.category).join(', ')}
      </div>
      {excerpt && <div className="CaseCard--Excerpt">{excerpt}</div>}
    </div> */}
  </Link>
)

export default CaseCard
