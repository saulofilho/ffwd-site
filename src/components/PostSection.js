import React from 'react'
import PostCard from '../components/PostCard'
import './PostSection.css'
import arrowUp from '../../static/images/arrow-up.png'

const scrollToTop = () => {
  window.scroll({ top: 0, left: 0, behavior: 'smooth' });
}

const PostSection = ({
  posts = []
}) => {
  return (
    <div className="posts-section">
      <div className="post-section-grid">
        {posts.map((post, index) => (
          <PostCard key={post.title + index} {...post} />
        ))}
      </div>
      <div className="anchor-up container">
        <button
          onClick={() => {
            scrollToTop()
          }}
        >
          <img src={arrowUp} alt="arrowUp" />  topo
        </button>
      </div>
    </div>
  )
}

export default PostSection
