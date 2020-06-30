import React from 'react'
import _get from 'lodash/get'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import './SinglePost.css'
import arrowLeftBlk from '../../static/images/arrow-left-blk.png'
import arrowRightBlk from '../../static/images/arrow-right-blk.png'
import Content from '../components/Content'

export const SinglePostTemplate = ({
  featuredImage,
  PostTitle,
  PostText,
  PostAboutDesktop,
  date,
  nextPostURL
}) => (
    <main>
      <article
        className="home-post"
        itemScope
        itemType="http://schema.org/BlogPosting"
      >
        {console.log('xx', PostTitle)}
        <div className="post-hero">
          <div className="anchor-posts container">
            <Link to="/blog/">
              <img src={arrowLeftBlk} alt="arrowLeftBlk" />
              back
            </Link>
          </div>
          <p className="default-text-header container">
            {date}
          </p>
          <p className="default-text-sub container" itemProp="title">
            {PostTitle}
          </p>
          <div className="post-img">
            <div 
              className="blog-post-img relative"
              style={{
                backgroundImage: `url(${featuredImage})`
              }}>
            </div>
          </div>
          <div className="container blog-post-wrapper">
          <Content
            className="blog-about-content display-none-mob"
            source={PostAboutDesktop}
          />
          <Content
            className="blog-text-content"
            source={PostText}
          />
          </div>
        </div>
        <div className="single-post-pagination container">
            {nextPostURL && (
                <div className="next">
                  <Link
                    className="single-post-pagination-link"
                    to={nextPostURL}
                  >
                    next news
                    <img src={arrowRightBlk} alt="arrowRightBlk" />
                </Link>
                </div>
            )}
        </div>
      </article>
    </main>
  )

const SinglePost = ({ data: { post, allPosts }, location }) => {
  const thisEdge = allPosts.edges.find(edge => edge.node.id === post.id)
  return (
    <Layout
      location={location}
      meta={post.frontmatter.meta || false}
      title={post.frontmatter.title || false}
    >
      <SinglePostTemplate
        {...post}
        {...post.frontmatter}
        body={post.html}
        nextPostURL={_get(thisEdge, 'next.fields.slug')}
        prevPostURL={_get(thisEdge, 'previous.fields.slug')}
      />
    </Layout>
  )
}

export default SinglePost

export const pageQuery = graphql`
  ## Query for SinglePost data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query SinglePost($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      id
      frontmatter {
        featuredImage
        PostTitle
        PostText
        PostAboutDesktop
        template
        date(formatString: "DD.MM.YYYY")
      }
    }
    allPosts: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "posts" } } }
      sort: { order: ASC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
        }
        next {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
        previous {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
