import React from 'react'
import { graphql } from 'gatsby'
import { Location } from '@reach/router'
import CaseSection from '../components/CaseSection'
import Layout from '../components/Layout'
import './ProjetosIndex.css'
import arrowDown from '../../static/images/ico-seta-down.png'
import cardClient from '../../static/images/card-cliente.png'

export const byDate = cases => {
  const now = Date.now()
  return cases.filter(post => Date.parse(post.date) <= now)
}

export const ProjetosIndexTemplate = ({
  cases = [],
  contentType
}) => (
    <Location>
      {({ location }) => {
        let filteredPosts = byDate(cases)

        filteredPosts = filteredPosts.filter(post =>
          post.frontmatter.title.toLowerCase()
        )
        return (
          <main className="projeto">
            <div className="
            ">
              <div className="default-flex">
                <p className="default-text-header">projetos</p>
                <p className="default-text-title">nossos cases</p>
                <p className="default-text-about">
                  Somos uma agência mais que digital, com foco em experiências
                  e resultados.
                  Nesses mais de 10 anos de marketing, criatividade e tecnologia
                  pensamos e executamos ações completas.
                  <br />
                  <br />
                  <br />
                  Veja nossos cases:
                </p>
                <div className="anchor-down">
                  <a href="#projeto-section">
                    <img src={arrowDown} alt="" />
                  </a>
                </div>
              </div>
            </div>
            {!!cases.length && (
              <section className="projeto-section" id="projeto-section">
                <CaseSection posts={filteredPosts} />
              </section>
            )}
            <div className="nossos-clientes">
              <h2>nossos clientes</h2>
              <div className="nossos-clientes-logos">
                <img src={cardClient} alt="" />
                <img src={cardClient} alt="" />
                <img src={cardClient} alt="" />
                <img src={cardClient} alt="" />
                <img src={cardClient} alt="" />
                <img src={cardClient} alt="" />
                <img src={cardClient} alt="" />
                <img src={cardClient} alt="" />
                <img src={cardClient} alt="" />
                <img src={cardClient} alt="" />
                <img src={cardClient} alt="" />
                <img src={cardClient} alt="" />
                <img src={cardClient} alt="" />
                <img src={cardClient} alt="" />
                <img src={cardClient} alt="" />
                <img src={cardClient} alt="" />
                <img src={cardClient} alt="" />
                <img src={cardClient} alt="" />
              </div>
            </div>
          </main>
        )
      }}
    </Location>
  )

// Export Default ProjetosIndex for front-end
const ProjetosIndex = ({ data: { page, cases }, location }) => (
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
            ProjetosTitle
            ProjetosDescription
          }
        }
      }
    }
  }
`
