import React from 'react'
import { graphql } from 'gatsby'
import { Location } from '@reach/router'
import HomeCarousel from '../components/HomeCarousel'
import Layout from '../components/Layout'
import './HomePage.css'

export const HomePageTemplate = ({
  cases = []
}) => (
  <Location>
    {({ location }) => {
      let filteredPosts = cases

        filteredPosts = filteredPosts.filter(post =>
          post.frontmatter.title.toLowerCase()
        )

      return (
        <main className="homePage">
          <section className="homePage-section">
            <HomeCarousel filteredPosts={filteredPosts} />
          </section>
        </main>
      )
    }}
  </Location>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page, cases }, location }) => (
  <Layout
    location={location}
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <HomePageTemplate
      {...page}
      {...page.fields}
      {...page.frontmatter}
      cases={cases.edges.map(post => ({
        ...post.node,
        ...post.node.frontmatter,
        ...post.node.fields
      }))}
    />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      fields {
        contentType
      }
      frontmatter {
        template
      }
    }
    cases: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "cases" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            HomeImage
            HomeDescription
            ClientTitle
            CaseTitle
            CaseAbout
          }
        }
      }
    }
  }
`
