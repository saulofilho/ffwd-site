import React from 'react'
import { graphql } from 'gatsby'
import { Location } from '@reach/router'
import PostSection from '../components/PostSection'
import Layout from '../components/Layout'
import BlogSearch from '../components/BlogSearch'
import arrowDown from '../../static/images/ico-seta-down.png'

const scrollToBottom = () => {
  document.querySelector('#posts-section').scrollIntoView({ behavior: 'smooth' });
}

export const BlogIndexTemplate = ({
  title,
  posts = [],
  enableSearch = true,
  contentType
}) => (
    <Location>
      {({ location }) => {
        return (
          <main className="Blog" id="blog-hero">
            <div className="blog-hero container">
              <p className="default-text-header">
                news + views
              </p>
              <h1 className="" itemProp="title">
                blog
              </h1>
              <section className="search-blog">
                {enableSearch && <BlogSearch />}
                <div className="default-btn search-btn">
                  <button>
                    search
                  </button>
                </div>
              </section>
              <div className="anchor-down">
                <button
                    onClick={() => {
                      scrollToBottom()
                    }}
                  >
                  <img src={arrowDown} alt="arrow-don" />
                  </button>
                </div>
            </div>
            <section className="posts-section" id="posts-section">
              <div className="container">
                <PostSection posts={posts} />
              </div>
            </section>
          </main>
        )
      }}
    </Location>
  )

const BlogIndex = ({ data: { page, posts }, location }) => (
  <Layout
    location={location}
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <BlogIndexTemplate
      {...page}
      {...page.fields}
      {...page.frontmatter}
      posts={posts.edges.map(post => ({
        ...post.node,
        ...post.node.frontmatter,
        ...post.node.fields
      }))}
    />
  </Layout>
)

export default BlogIndex

export const pageQuery = graphql`
  ## Query for BlogIndex data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query BlogIndex($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      fields {
        contentType
      }
      frontmatter {
        title
        template
        featuredImage
      }
    }
    posts: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "posts" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            PostTitle
            title
            date(formatString: "DD.MM.YYYY")
            featuredImage
          }
        }
      }
    }
  }
`
