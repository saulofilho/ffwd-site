import React from 'react'
import { graphql } from 'gatsby'
import { Location } from '@reach/router'
import qs from 'qs'
import PostSection from '../components/PostSection'
// import PostCategoriesNav from '../components/PostCategoriesNav'
import Layout from '../components/Layout'
import BlogSearch from '../components/BlogSearch'
import arrowDown from '../../static/images/ico-seta-down.png'

/**
 * Filter posts by date. Feature dates will be fitered
 * When used, make sure you run a cronejob each day to show schaduled content. See docs
 *
 * @param {posts} object
 */
export const byDate = posts => {
  const now = Date.now()
  return posts.filter(post => Date.parse(post.date) <= now)
}

/**
 * filter posts by category.
 *
 * @param {posts} object
 * @param {title} string
 * @param {contentType} string
 */
export const byCategory = (posts, title, contentType) => {
  const isCategory = contentType === 'postCategories'
  const byCategory = post =>
    post.categories &&
    post.categories.filter(cat => cat.category === title).length
  return isCategory ? posts.filter(byCategory) : posts
}

export const BlogIndexTemplate = ({
  title,
  posts = [],
  enableSearch = true,
  contentType
}) => (
    <Location>
      {({ location }) => {
        let filteredPosts =
          posts && !!posts.length
            ? byCategory(byDate(posts), title, contentType)
            : []

        let queryObj = location.search.replace('?', '')
        queryObj = qs.parse(queryObj)

        if (enableSearch && queryObj.s) {
          const searchTerm = queryObj.s.toLowerCase()
          filteredPosts = filteredPosts.filter(post =>
            post.frontmatter.title.toLowerCase().includes(searchTerm)
          )
        }

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
                <a href="#posts-section">
                  <img src={arrowDown} alt="arrow-don" />
                </a>
                </div>
            </div>
            <section className="posts-section" id="posts-section">
              <div className="container">
              {posts.map((post) => (
              <p className="default-text-about">
                {console.log('x', post)}
                        {post.PostTitle}
                      </p>
                      ))}
                {/* <PostSection posts={filteredPosts} /> */}
                <p>teste X</p>
              </div>
            </section>
          </main>
        )
      }}
    </Location>
  )

const BlogIndex = ({ data: { page, posts, postCategories }, location }) => (
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
      postCategories={postCategories.edges.map(post => ({
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
      sort: { order: ASC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            PostTitle
            title
            date(formatString: "YYYY.MM.DD")
            featuredImage
          }
        }
      }
    }
    postCategories: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "postCategories" } } }
      sort: { order: ASC, fields: [frontmatter___title] }
    ) {
      edges {
        node {
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
