import React from 'react'
import PostCard from '../components/PostCard'
import './PostSection.css'
import arrowUp from '../../static/images/arrow-up.png'

class PostSection extends React.Component {
  static defaultProps = {
    posts: [],
    title: '',
    limit: 100,
    showLoadMore: true,
    loadMoreTitle: 'Mais',
    perPageLimit: 12
  }

  state = {
    limit: this.props.limit
  }

  increaseLimit = () =>
    this.setState(prevState => ({
      limit: prevState.limit + this.props.perPageLimit
    }))

  render() {
    const { posts, title, showLoadMore, loadMoreTitle } = this.props,
      { limit } = this.state,
      visiblePosts = posts.slice(0, limit || posts.length)

    return (
      <div className="PostSection">
        {title && <p className="PostSection--Title">{title}</p>}
        {!!visiblePosts.length && (
          <div className="post-section-grid">
            {visiblePosts.map((post, index) => (
              <PostCard key={post.title + index} {...post} />
            ))}
          </div>
        )}
        {showLoadMore && visiblePosts.length < posts.length && (
          <div className="taCenter">
            <div className="default-btn padding-btn">
              <button className="btn-load-more" onClick={this.increaseLimit}>
                {loadMoreTitle}
              </button>
            </div>
          </div>
        )}
        <div className="anchor-up container">
          <a href="#blog-hero">
            <img src={arrowUp} alt="arrowUp" />  topo
          </a>
        </div>
      </div>
    )
  }
}

export default PostSection
