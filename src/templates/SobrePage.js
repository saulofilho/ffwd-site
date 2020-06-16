import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout.js'
import SobrePageCarousel from '../components/SobrePageCarousel'
import './SobrePage.css'

export const ComponentsPageTemplate = () => (
  <main>
    <section className="sobre-section">
      <SobrePageCarousel /> 
    </section>
  </main>
)

const SobrePage = ({ data: { page }, location }) => (
  <Layout
    location={location}
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ComponentsPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default SobrePage

export const pageQuery = graphql`
  query SobrePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
      }
    }
  }
`
