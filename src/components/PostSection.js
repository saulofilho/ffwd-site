import React from 'react'
import PostCard from '../components/PostCard'
import './PostSection.css'
import arrowUp from '../../static/images/arrow-up.png'

const PostSection = ({
  posts = []
}) => {
    return (
      <div className="PostSection">
        <div className="post-section-grid">
          {posts.map((post, index) => (
            <PostCard key={post.title + index} {...post} />
          ))}
        </div>
        <div className="anchor-up container">
          <a href="#blog-hero">
            <img src={arrowUp} alt="arrowUp" />  topo
          </a>
        </div>
      </div>
    )
}

export default PostSection
