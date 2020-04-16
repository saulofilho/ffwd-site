import React from 'react'
import { graphql } from 'gatsby'
import { Location } from '@reach/router'
import qs from 'qs'
// import PageHeader from '../components/PageHeader'
// import PostCategoriesNav from '../components/PostCategoriesNav'
import CaseSection from '../components/CaseSection'
import Layout from '../components/Layout'
import './ProjetosIndex.css'

/**
 * Filter cases by date. Feature dates will be fitered
 * When used, make sure you run a cronejob each day to show schaduled content. See docs
 *
 * @param {cases} object
 */
export const byDate = cases => {
  const now = Date.now()
  return cases.filter(post => Date.parse(post.date) <= now)
}


/**
 * filter cases by category.
 *
 * @param {cases} object
 * @param {title} string
 * @param {contentType} string
 */
export const byCategory = (cases, title, contentType) => {
  const isCategory = contentType === 'postCategories'
  const byCategory = post =>
    post.categories &&
    post.categories.filter(cat => cat.category === title).length
  return isCategory ? cases.filter(byCategory) : cases
}

// Export Template for use in CMS preview
export const ProjetosIndexTemplate = ({
  title,
  subtitle,
  featuredImage,
  cases = [],
  postCategories = [],
  enableSearch = true,
  contentType
}) => (
  <Location>
    {({ location }) => {
      let filteredPosts =
        cases && !!cases.length
          ? byCategory(byDate(cases), title, contentType)
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
        <main className="projeto">
          {/* <PageHeader
            title={title}
            subtitle={subtitle}
            backgroundImage={featuredImage}
          />

          {!!postCategories.length && (
            <section className="section thin">
              <div className="container">
                <PostCategoriesNav enableSearch categories={postCategories} />
              </div>
            </section>
          )} */}
          <div className="projeto-hero">
            <h1>teste</h1>
          </div>

          {!!cases.length && (
            <section className="projeto-section">
              <CaseSection posts={filteredPosts} />
            </section>
          )}
        </main>
      )
    }}
  </Location>
)

// Export Default ProjetosIndex for front-end
const ProjetosIndex = ({ data: { page, cases, postCategories }, location }) => (
  <Layout
    location={location}
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ProjetosIndexTemplate
      {...page}
      {...page.fields}
      {...page.frontmatter}
      cases={cases.edges.map(post => ({
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

export default ProjetosIndex

export const pageQuery = graphql`
  ## Query for ProjetosIndex data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query ProjetosIndex($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      fields {
        contentType
      }
      frontmatter {
        title
        excerpt
        template
        subtitle
        featuredImage
      }
    }

    cases: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "cases" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date
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
