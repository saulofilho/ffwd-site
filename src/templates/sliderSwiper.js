// import React, { useState } from 'react'
// import { graphql } from 'gatsby'
// import { Location } from '@reach/router'
// import qs from 'qs'
// // import ProjetosSlider from '../components/ProjetosSlider';

// import Content from '../components/Content'
// import Swiper from 'react-id-swiper';
// import 'swiper/css/swiper.css';
// import './ProjetosIndex.css';

// // import PageHeader from '../components/PageHeader'
// // import ProjetosCarousel from '../components/ProjetosCarousel'
// // import PostCategoriesNav from '../components/PostCategoriesNav'
// import Layout from '../components/Layout'

// /**
//  * Filter cases by date. Feature dates will be fitered
//  * When used, make sure you run a cronejob each day to show schaduled content. See docs
//  *
//  * @param {cases} object
//  */
// export const byDate = cases => {
//   const now = Date.now()
//   return cases.filter(post => Date.parse(post.date) <= now)
// }

// /**
//  * filter cases by category.
//  *
//  * @param {cases} object
//  * @param {title} string
//  * @param {contentType} string
//  */
// export const byCategory = (cases, title, contentType) => {
//   const isCategory = contentType === 'postCategories'
//   const byCategory = post =>
//     post.categories &&
//     post.categories.filter(cat => cat.category === title).length
//   return isCategory ? cases.filter(byCategory) : cases
// }

// const HeroSliderConfigs = {
//   slidesPerView: 1,
//   effect: 'fade',
//   loop: true,
//   centeredSlides: true,
//   grabCursor: false,
//   hashNavigation: {
//     watchState: true,
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// };

// const ProjetosSlider = ({
//   cases,
//   body
// }) => {

//   const [parallaxSwiper, setParallaxSwiper] = useState(null);
//   const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
//   const parallaxOpacity = 0.5;
//   return (
//     <>
//       <Swiper {...HeroSliderConfigs} getSwiper={setParallaxSwiper}>
//         {cases.map(img => (
//           <div 
//             key={img.title}
//             className="cases-slide"
//           >
//             <div
//               className="cases-slide-image"
//               data-swiper-parallax={parallaxAmount}
//               data-swiper-parallax-opacity={parallaxOpacity}
//             >
//               <img src={img.featuredImage} alt="" />
//               <a href={img.slug}>teste</a>
//             </div>
//           </div>
//         ))}
//       </Swiper>
//     </>
//   );
// };

// // Export Template for use in CMS preview
// export const ProjetosIndexTemplate = ({
//   body,
//   title,
//   subtitle,
//   featuredImage,
//   cases = [],
//   postCategories = [],
//   enableSearch = true,
//   contentType
// }) => (
//   <Location>
//     {({ location }) => {
//       // console.log(cases)
//       let filteredPosts =
//         cases && !!cases.length
//           ? byCategory(byDate(cases), title, contentType)
//           : []

//       let queryObj = location.search.replace('?', '')
//       queryObj = qs.parse(queryObj)

//       if (enableSearch && queryObj.s) {
//         const searchTerm = queryObj.s.toLowerCase()
//         filteredPosts = filteredPosts.filter(post =>
//           post.frontmatter.title.toLowerCase().includes(searchTerm)
//         )
//       }

//       return (
//         <main className="Cases">
//           <div className="cases-hero">
//             teste
//           </div>
//           <ProjetosSlider cases={filteredPosts} body={body} />
//         </main>
//       )
//     }}
//   </Location>
// )

// // Export Default ProjetosIndex for front-end
// const ProjetosIndex = ({ data: { page, cases, postCategories } }) => (
//   <Layout
//     meta={page.frontmatter.meta || false}
//     title={page.frontmatter.title || false}
//   >
//     <ProjetosIndexTemplate
//       {...page}
//       {...page.fields}
//       {...page.frontmatter}
//       body={page.html}
//       cases={cases.edges.map(post => ({
//         ...post.node,
//         ...post.node.frontmatter,
//         ...post.node.fields
//       }))}
//       postCategories={postCategories.edges.map(post => ({
//         ...post.node,
//         ...post.node.frontmatter,
//         ...post.node.fields
//       }))}
//     />
//   </Layout>
// )

// export default ProjetosIndex

// export const pageQuery = graphql`
//   ## Query for ProjetosIndex data
//   ## Use GraphiQL interface (http://localhost:8000/___graphql)
//   ## $id is processed via gatsby-node.js
//   ## query name must be unique to this file
//   query ProjetosIndex($id: String!) {
//     page: markdownRemark(id: { eq: $id }) {
//       ...Meta
//       html
//       fields {
//         contentType
//       }
//       frontmatter {
//         title
//         excerpt
//         template
//         subtitle
//         featuredImage
//       }
//     }

//     cases: allMarkdownRemark(
//       filter: { fields: { contentType: { eq: "cases" } } }
//       sort: { order: DESC, fields: [frontmatter___date] }
//     ) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             title
//             date
//             categories {
//               category
//             }
//             featuredImage
//           }
//         }
//       }
//     }
//     postCategories: allMarkdownRemark(
//       filter: { fields: { contentType: { eq: "postCategories" } } }
//       sort: { order: ASC, fields: [frontmatter___title] }
//     ) {
//       edges {
//         node {
//           fields {
//             slug
//           }
//           frontmatter {
//             title
//           }
//         }
//       }
//     }
//   }
// `
