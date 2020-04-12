import React from 'react'
import { graphql } from 'gatsby'
import { Location } from '@reach/router'
import qs from 'qs'
// import PageHeader from '../components/PageHeader'
// import PostCategoriesNav from '../components/PostCategoriesNav'
import VagaSection from '../components/VagaSection'
import Layout from '../components/Layout'
import './ProjetosIndex.css'

/**
 * Filter vagas by date. Feature dates will be fitered
 * When used, make sure you run a cronejob each day to show schaduled content. See docs
 *
 * @param {vagas} object
 */
export const byDate = vagas => {
  const now = Date.now()
  return vagas.filter(post => Date.parse(post.date) <= now)
}

/**
 * filter vagas by category.
 *
 * @param {vagas} object
 * @param {title} string
 * @param {contentType} string
 */
export const byCategory = (vagas, title, contentType) => {
  const isCategory = contentType === 'postCategories'
  const byCategory = post =>
    post.categories &&
    post.categories.filter(cat => cat.category === title).length
  return isCategory ? vagas.filter(byCategory) : vagas
}

// Export Template for use in CMS preview
export const VagasIndexTemplate = ({
  title,
  subtitle,
  featuredImage,
  vagas = [],
  postCategories = [],
  enableSearch = true,
  contentType
}) => (
  <Location>
    {({ location }) => {
      let filteredPosts =
        vagas && !!vagas.length
          ? byCategory(byDate(vagas), title, contentType)
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

          {!!vagas.length && (
            <section className="projeto-section">
              <VagaSection posts={filteredPosts} />
            </section>
          )}
        </main>
      )
    }}
  </Location>
)

// Export Default VagasIndex for front-end
const VagasIndex = ({ data: { page, vagas, postCategories } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <VagasIndexTemplate
      {...page}
      {...page.fields}
      {...page.frontmatter}
      vagas={vagas.edges.map(post => ({
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

export default VagasIndex

export const pageQuery = graphql`
  ## Query for VagasIndex data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query VagasIndex($id: String!) {
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

    vagas: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "vagas" } } }
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
            categories {
              category
            }
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
