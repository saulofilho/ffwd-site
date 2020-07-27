import React from 'react'
import { graphql } from 'gatsby'
import { Location } from '@reach/router'
import CaseSection from '../components/CaseSection'
import Layout from '../components/Layout'
import './ProjetosIndex.css'
import arrowDown from '../../static/images/ico-seta-down.png'
import client1 from '../../static/images/1_desk.jpg'
import client2 from '../../static/images/2_desk.jpg'
import client3 from '../../static/images/3_desk.jpg'
import client4 from '../../static/images/4_desk.jpg'
import client5 from '../../static/images/5_desk.jpg'
import client6 from '../../static/images/6_desk.jpg'
import client7 from '../../static/images/7_desk.jpg'
import client8 from '../../static/images/8_desk.jpg'
import client9 from '../../static/images/9_desk.jpg'
import client10 from '../../static/images/10_desk.jpg'
import client11 from '../../static/images/11_desk.jpg'
import client12 from '../../static/images/12_desk.jpg'
import client13 from '../../static/images/13_desk.jpg'
import client14 from '../../static/images/14_desk.jpg'
import client15 from '../../static/images/15_desk.jpg'
import client16 from '../../static/images/16_desk.jpg'
import client17 from '../../static/images/17_desk.jpg'
import client18 from '../../static/images/18_desk.jpg'
import client19 from '../../static/images/19_desk.jpg'
import client20 from '../../static/images/20_desk.jpg'
import client21 from '../../static/images/21_desk.jpg'

const scrollToBottom = () => {
  document.querySelector('#projeto-section').scrollIntoView({ behavior: 'smooth' });
}

export const ProjetosIndexTemplate = ({
  cases = [],
  contentType
}) => (
    <Location>
      {({ location }) => {
        return (
          <main>
            <div className="projeto">
                <p className="default-text-header container">
                  projetos
                </p>
                <h1 className="container">
                  nossos
                  <br/>
                  cases
                </h1>
                <p className="default-text-about container">
                  Somos uma agência mais que digital, com foco em experiências
                  e resultados.
                  Nesses mais de 10 anos de marketing, criatividade e tecnologia
                  pensamos e executamos ações completas.
                  <br />
                  <br />
                  <br />
                  Veja nossos cases:
                </p>
                <div className="anchor-down container">
                  <button
                    onClick={() => {
                      scrollToBottom()
                    }}
                  >
                    <img src={arrowDown} alt="arrowDown" />
                  </button>
                </div>
            </div>
            <section className="projeto-section" id="projeto-section">
              <CaseSection posts={cases} />
            </section>
            <div className="nossos-clientes container">
              <h2 className="display-none-desk">
                nossos
                <br/> 
                clientes
              </h2>
              <h2 className="display-none-mob">
                nossas marcas
              </h2>
              <p className="default-text-about display-none-mob">
                Somos uma agência mais que digital, com foco em experiências e 
                resultados. Nesses mais de 10 anos de marketing.
              </p>
              <div className="nossos-clientes-logos container">
                <img src={client1} alt="cliente logo" />
                <img src={client2} alt="cliente logo" />
                <img src={client3} alt="cliente logo" />
                <img src={client4} alt="cliente logo" />
                <img src={client5} alt="cliente logo" />
                <img src={client6} alt="cliente logo" />
                <img src={client7} alt="cliente logo" />
                <img src={client8} alt="cliente logo" />
                <img src={client9} alt="cliente logo" />
                <img src={client10} alt="cliente logo" />
                <img src={client11} alt="cliente logo" />
                <img src={client12} alt="cliente logo" />
                <img src={client13} alt="cliente logo" />
                <img src={client14} alt="cliente logo" />
                <img src={client15} alt="cliente logo" />
                <img src={client16} alt="cliente logo" />
                <img src={client17} alt="cliente logo" />
                <img src={client18} alt="cliente logo" />
                <img src={client19} alt="cliente logo" />
                <img src={client20} alt="cliente logo" />
                <img src={client21} alt="cliente logo" />
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
