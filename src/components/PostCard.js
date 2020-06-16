import React from 'react'
import { Link } from 'gatsby'

import Image from './Image'
import './PostCard.css'

const PostCard = ({
  featuredImage,
  date,
  PostTitle,
  slug,
  categories = [],
  className = '',
  ...props
}) => (
  <div className="single-post">
    <Link to={slug}>
      <div className={`PostCard ${className}`}>
        <div className="PostCard--Content">
          <p className="PostCard--Date">{date}</p>
          {PostTitle && <p className="PostCard--Title">{PostTitle}</p>}
        </div>
        {featuredImage && (
          <div className="post-card-img relative container">
            <Image background src={featuredImage} alt={PostTitle} />
          </div>
        )} 
      </div>
    </Link>
  </div>
)

export default PostCard
