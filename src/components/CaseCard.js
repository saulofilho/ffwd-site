import React from 'react'
import { Link } from 'gatsby'

import './CaseCard.css'

const CaseCard = ({
  featuredImage,
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
        <img src={featuredImage} alt={title} />
      </div>
    )}
    <div className="CaseCard--Content">
      {title && <h3 className="CaseCard--Title">{title}</h3>}
      <div className="CaseCard--Category">
        {categories && categories.map(cat => cat.category).join(', ')}
      </div>
      {excerpt && <div className="CaseCard--Excerpt">{excerpt}</div>}
    </div>
  </Link>
)

export default CaseCard
