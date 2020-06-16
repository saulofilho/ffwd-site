import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import './ContatoPage.css'

// Export Template for use in CMS preview
export const ContactPageTemplate = () => (
  <main>
    <div className="contato-hero">
      <div className="default-flex">
        <p className="default-text-header container">
          contato
        </p>
        <p className="default-text-title container">
          vamos falar?
        </p>
        <p className="default-text-sub container">
          Liga pra gente, manda um email,
          vem conhecer a agência.
          Estamos esperando seu contato.
          </p>
      </div>
    </div>
    <div className="contato-infos container">
      <div className="contato-adress-container">
        <div className="call-us">
          <p className="default-text-header">
            <strong>Call us on</strong>
          </p>
          <p className="default-text-header top-zero">
            +55 48 3364 5570
            <br/>
            go@ffwd.rocks
          </p>
        </div>
        <div className="adress">
          <p className="default-text-header">
            <strong>Adress</strong>
          </p>
          <p className="default-text-header top-zero">
            Rua Niberto Haase, 100 - Sala 301
            <br/>
            Santa Mônica,
            <br/>
            Florianópolis, SC
            <br/>
            88035-215
          </p>
        </div>
      </div>
      <div className="contato-infos-container">
        <p className="default-text-header">01.</p>
        <h2>contato para novos negócios:</h2>
        <p className="default-text-header">go@ffwd.com.br</p>
      </div>
      <div className="contato-infos-container">
        <p className="default-text-header">
          02.
        </p>
        <h2>
          assine nossa news
        </h2>
        <p className="default-text-header top-zero">
          *sem spam, prometemos =]
        </p>
        <section className="news-email">
          <input 
            type="text" 
            placeholder="E-mail"
          />
          <div className="default-btn news-btn">
            <button>
              cadastre-se
            </button>
          </div>
        </section>
      </div>
    </div>
    <div className="contato-social-container">
      <section className="social-btns container">
          <button>
            <a href="https://wa.me/5511933430190?text=Olá">
              <img src="/images/ico-whats.png" alt="whats"/>
            </a>
          </button>
          <button>
            <a href="https://wa.me/5511933430190?text=Olá">
              <img src="/images/ico-insta.png" alt="insta"/>
            </a>
          </button>
          <button>
            <a href="https://wa.me/5511933430190?text=Olá">
              <img src="/images/ico-face.png" alt="face"/>
            </a>
          </button>
          <button>
            <a href="https://wa.me/5511933430190?text=Olá">
              <img src="/images/ico-mail.png" alt="mail"/>
            </a>
          </button>
      </section>
    </div>
  </main>
)

const ContatoPage = ({ data: { page }, location }) => (
  <Layout
    location={location}
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ContactPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ContatoPage

export const pageQuery = graphql`
  query ContatoPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        template
      }
    }
  }
`
