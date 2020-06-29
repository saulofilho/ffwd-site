import React from 'react'
import { Link } from 'gatsby'
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
            <div 
              className="post-card-bg"
              style={{
                backgroundImage: `url(${featuredImage})`
              }}
              alt={PostTitle}
            />
          </div>
          <div className="line container display-none-desk">
            <img src={line} alt="line" />
          </div>
        </div>

    </>
  )

export default PostCard
