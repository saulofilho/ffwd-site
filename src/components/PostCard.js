import React from 'react'
import { Link } from 'gatsby'
import Image from './Image'
import line from '../../static/images/line.png'
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
    <>
      <Link to={slug}>
        <div className={`post-card ${className}`}>
          <div className="post-card-text">
            <p className="default-text-header">
              {date}
            </p>
            <p className="default-text-about">
              {PostTitle}
            </p>
          </div>
          <div className="post-card-img relative container">
            <Image background src={featuredImage} alt={PostTitle} />
          </div>
          <div className="line container display-none-desk">
            <img src={line} alt="line" />
          </div>
        </div>
      </Link>
    </>
  )

export default PostCard
