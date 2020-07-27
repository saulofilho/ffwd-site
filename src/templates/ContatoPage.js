import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import './ContatoPage.css'
import arrowDownWht from '../../static/images/arrow-down-wht.png'

const scrollToBottom = () => {
  document.querySelector('#contatos-infos').scrollIntoView({ behavior: 'smooth' });
}

export const ContactPageTemplate = () => (
  <main>
    <div className="contato-hero">
      <div className="default-flex">
        <p className="default-text-header container">
          contato
        </p>
        <h1 className="container">
          vamos falar?
        </h1>
        <p className="default-text-sub-sobre container">
          Liga pra gente, manda um email,
          vem conhecer a agência.
          Estamos esperando seu contato.
          </p>
      </div>
      <div className="anchor-down container display-none-mob">
        <button
          onClick={() => {
            scrollToBottom()
          }}
        >
          <img src={arrowDownWht} alt="arrow-down-wht" />
        </button>
      </div>
    </div>
    <div className="contato-infos container" id="contatos-infos">
      <div className="contato-address-container">
        <div className="call-us">
          <p className="default-text-about">
            <strong>Call us on</strong>
          </p>
          <p className="default-text-about">
            <br/>
            +55 48 3364 5570
            <br/>
            go@ffwd.com.br
          </p>
        </div>
        <div className="address">
          <p className="default-text-about">
            <strong>Address</strong>
          </p>
          <p className="default-text-about">
            <br/>
            Rua Niberto Haase, 100 - Sala 301
            <br/>
            Santa Mônica, Florianópolis, SC
            <br/>
            88035-215
          </p>
        </div>
      </div>
      <div className="contato-assine-wrapper">
        <div className="contato-infos-container">
          <p className="default-text-header">
            01
          </p>
          <h2>
            contato para novos negócios:
          </h2>
          <p className="default-text-about">
            go@ffwd.com.br
          </p>
        </div>
        <div className="contato-news">
          <p className="default-text-header">
            02
          </p>
          <h2>
            assine 
            <br/>
            nossa news
          </h2>
          <p className="default-text-about">
            *sem spam, prometemos =]
          </p>
          <section className="news-email">
            <input 
              type="text" 
              placeholder="E-mail"
            />
            <div className="default-btn">
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
              <a href="https://www.facebook.com/goFFWD/">
                <img src="/images/ico-face.png" alt="face"/>
              </a>
            </button>
            <button>
              <a href="https://www.instagram.com/goffwd/">
                <img src="/images/ico-insta.png" alt="insta"/>
              </a>
            </button>
            <button>
              <a href="https://wa.me/554891519810?text=FFWD">
                <img src="/images/ico-whats.png" alt="whats"/>
              </a>
            </button>
            <button>
              <a href="mailto:go@ffwd.com.br">
                <img src="/images/ico-mail.png" alt="mail"/>
              </a>
            </button>
        </section>
      </div>
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
