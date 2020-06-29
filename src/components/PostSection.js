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
          <h1>teste 2</h1>
          {posts.map((post, index) => (
                    <div className={`post-card`}>
                    <div className="post-card-text">
                      <p className="default-text-header">
                        {post.date}
                      </p>
                      <p className="default-text-about">
                        {post.PostTitle}
                      </p>
                    </div>
                    <div className="post-card-img relative container">
                      <div 
                        className="post-card-bg"
                        style={{
                          backgroundImage: `url(${post.featuredImage})`
                        }}
                        alt={post.PostTitle}
                      />
                    </div>
                    <div className="line container display-none-desk">
                      <img src={line} alt="line" />
                    </div>
                  </div>
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
