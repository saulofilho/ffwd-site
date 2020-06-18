import React from 'react'
import _get from 'lodash/get'
import { Link, graphql } from 'gatsby'
import Content from '../components/Content'
import Layout from '../components/Layout'
import './VagaPost.css'
import arrowLeftWht from '../../static/images/arrow-left-wht.png'

export const VagaPostTemplate = ({
  title,
  header,
  about,
  overview,
  LikeToSee
}) => (
    <main>
      <article
        itemScope
        itemType="http://schema.org/BlogPosting"
      >
          <div className="vaga-hero">
              <div className="anchor-posts">
                <Link to="/pessoas/">
                  <img src={arrowLeftWht} alt="arrowLeftWht" />
                  back
                </Link>
              </div>
              <p className="default-text-header">
                {header}
              </p>
              <p className="default-text-title">
                {title}
              </p>
              <p className="default-text-about">
                {about}
              </p>
          </div>
          <div className="container vaga-text">
            <p className="default-text-sub vaga-up">
              Overview
            </p>
            <div className="default-text-about">
              <Content source={overview} />
            </div>
            <p className="default-text-sub">
              What We’d Like To See
            </p>
            <div className="default-text-about">
              <Content source={LikeToSee} />
            </div>
            <div className="default-btn apply-btn">
              <button>
                Apply
              </button>
            </div>
          </div>
      </article>
    </main>
  )

// Export Default VagaPost for front-end
const VagaPost = ({ data: { post, allPosts }, location }) => {
  const thisEdge = allPosts.edges.find(edge => edge.node.id === post.id)
  return (
    <Layout
      location={location}
      meta={post.frontmatter.meta || false}
      title={post.frontmatter.title || false}
    >
      <VagaPostTemplate
        {...post}
        {...post.frontmatter}
        body={post.html}
        nextPostURL={_get(thisEdge, 'next.fields.slug')}
        prevPostURL={_get(thisEdge, 'previous.fields.slug')}
      />
    </Layout>
  )
}

export default VagaPost

export const pageQuery = graphql`
  ## Query for VagaPost data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query VagaPost($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      id
      frontmatter {
        title
        template
        header
        about
        overview
        LikeToSee
        date(formatString: "MMMM Do, YYYY")
      }
    }

    allPosts: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "vaga" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
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
