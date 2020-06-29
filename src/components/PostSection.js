import React from 'react'
import PostCard from '../components/PostCard'
import './PostSection.css'
import arrowUp from '../../static/images/arrow-up.png'

const PostSection = ({
  posts = []
}) => {
    return (
      <div className="PostSection">
        <h1>teste 1</h1>
        <div className="post-section-grid">
          <h1>teste 2</h1>
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
