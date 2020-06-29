import React from 'react'
import PostCard from '../components/PostCard'
import './PostSection.css'
import arrowUp from '../../static/images/arrow-up.png'
import line from '../../static/images/line.png'

const PostSection = ({
  posts = []
}) => {
    return (
      <div className="PostSection">
        <h1>teste 1</h1>
        <div className="post-section-grid">
          {posts.map((post, index) => (
                      <p className="default-text-about">
                        {post.PostTitle}
                      </p>
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
