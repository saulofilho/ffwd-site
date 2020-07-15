import React from 'react'
import _get from 'lodash/get'
import { Link, graphql } from 'gatsby'
import { Location } from '@reach/router'
import Content from '../components/Content'
import Layout from '../components/Layout'
import './CasePost.css'
import arrowDown from '../../static/images/ico-seta-down.png'
import arrowLeft from '../../static/images/arrow-left-wht.png'
import arrowRight from '../../static/images/arrow-right-wht.png'

const scrollToBottom = () => {
  document.querySelector('#containerCasePost').scrollIntoView({ behavior: 'smooth' });
}

export const CasePostTemplate = ({
  ClientTitle,
  CaseTitle,
  CaseAbout,
  image1,
  image1mob,
  title1,
  text1,
  container1 = [],
  title2,
  text2,
  title3,
  container2 = [],
  title4,
  resultados = [],
  resultadosimage,
  resultadosimagemob,
  nextPostURL,
  prevPostURL,
}) => (
  <Location>
    {({ location }) => {
  return(
    <main>
      {console.log('cont', container1)}
      <article
        className="home-case"
        itemScope
        itemType="http://schema.org/BlogPosting"
      >
        <div className="single-case">
          <div className="case-pots-content">
            <div className="case-hero container">
              <p className="default-text-header">
                {ClientTitle}
              </p>
              <h1>
                {CaseTitle}
              </h1>
              <Content
                className="default-text-about case-about"
                source={CaseAbout}
              />
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
            <div className="containerCasePost" id="containerCasePost">
              <div className="case-imgs display-none-mob">
                <img src={image1} alt="desk" />
              </div>
              <div className="case-imgs display-none-desk">
                <img src={image1mob} alt="mob" />
              </div>
              <div className="case-texts-wrapper container">
                <p className="case-title">{title1}</p>
                <Content
                  className="case-text"
                  source={text1}
                />
              </div>
              {container1.map((item, index) => (
                <div
                  key={item + index}
                >
                  {item.imagemob &&
                    <div className="case-imgs display-none-desk">
                      <img src={item.imagemob} alt={item.alt} />
                    </div>
                  }
                  {item.image &&
                    <div className="case-imgs display-none-mob">
                      <img src={item.image} alt={item.alt} />
                    </div>
                  }
                  {item.youtube &&
                    <Content className="case-yt" source={item.youtube} />
                  }
                </div>
              ))}
              <div className="case-texts-wrapper container">
                <p className="case-title">{title2}</p>
                <Content
                  className="case-text"
                  source={text2}
                />
              </div>
              {title3 &&
                <div className="case-texts-wrapper-title3 container">
                    <p className="case-title3">{title3}</p>
                </div>
              }
              {container2.map((item, index) => (
                <div
                  key={item + index}
                >
                  {item.imagemob &&
                    <div className="case-imgs display-none-desk">
                      <img src={item.imagemob} alt={item.alt} />
                    </div>
                  }
                  {item.image &&
                    <div className="case-imgs display-none-mob">
                      <img src={item.image} alt={item.alt} />
                    </div>
                  }
                  {item.youtube &&
                    <Content className="case-yt" source={item.youtube} />
                  }
                </div>
              ))}
            </div>
            <div className="resultados-wrapper container">
              <p className="case-title-resultados">{title4}</p>
              <div className="resultados container">
                {resultados.map((item, index) => (
                    <div
                      className="resultados-item-wrapper"
                      key={item + index}
                    >
                      {item.sub1 &&
                        <p className="resultados-case-sub1">{item.sub1}</p>
                      }
                      {item.title &&
                        <p className="resultados-case-title">{item.title}</p>
                      }
                      {item.text &&
                        <p className="resultados-case-text">{item.text}</p>
                      }
                      {item.sub2 &&
                        <p className="resultados-case-sub2">{item.sub2}</p>
                      }
                      {item.text2 &&
                        <Content className="case-text" source={item.text2} />
                      }
                    </div>
                  ))}
              </div>
            </div>
            <div className="case-imgs display-none-mob">
              {resultadosimage &&
                <img src={resultadosimage} alt="resultados" />
              }
            </div>
            <div className="case-imgs display-none-desk">
            {resultadosimagemob &&
              <img src={resultadosimagemob} alt="mob" />
            }
            </div>
          </div>
          <div className="case-post-wrapper">
            <div className="case-post container">
              {prevPostURL && (
              <div className="prev">
                <img src={arrowLeft} alt="arrowLeft" />
                <Link
                  className="case-post-link"
                  to={prevPostURL}
                >
                  ANTERIOR
                </Link>
              </div>
              )}
              {nextPostURL && (
                <div className="next">
                  <Link
                    className="case-post-link"
                    to={nextPostURL}
                  >
                    PRÓXIMO
                  </Link>
                  <img src={arrowRight} alt="arrowRight" />
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}}
</Location>
)

const CasePost = ({ data: { post, allPosts }, location }) => {
  const thisEdge = allPosts.edges.find(edge => edge.node.id === post.id)
  return (
    <Layout
      location={location}
      meta={post.frontmatter.meta || false}
      title={post.frontmatter.title || false}
    >
      <CasePostTemplate
        {...post}
        {...post.frontmatter}
        body={post.html}
        allPosts={allPosts.edges.map(post => ({
          ...post.node,
          ...post.node.frontmatter,
          ...post.node.fields
        }))}
        nextPostURL={_get(thisEdge, 'next.fields.slug')}
        prevPostURL={_get(thisEdge, 'previous.fields.slug')}
      />
    </Layout>
  )
}

export default CasePost

export const pageQuery = graphql`
  ## Query for CasePost data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query CasePost($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      id
      frontmatter {
        title
        ClientTitle
        CaseTitle
        CaseAbout
        template
        date(formatString: "DD.MM.YYYY")
        image1
        image1mob
        title1
        text1
        container1 {
          image
          imagemob
          alt
          youtube
        }
        title2
        text2
        title3
        container2 {
          image
          imagemob
          alt
          youtube
        }
        title4
        resultados {
          title
          text
          sub1
          sub2
          text2
        }
        resultadosimage
        resultadosimagemob
      }
    }
    allPosts: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "cases" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          html
          id
        }
        next {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
        previous {
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
