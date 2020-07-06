import React from 'react'
import CMS from 'netlify-cms-app'
import './cms-utils'

import { HomePageTemplate } from '../templates/HomePage'
import { ComponentsPageTemplate } from '../templates/SobrePage'
import { ContactPageTemplate } from '../templates/ContatoPage'
import { BlogIndexTemplate } from '../templates/BlogIndex'
import { ProjetosIndexTemplate } from '../templates/ProjetosIndex'
import { PessoasPageTemplate } from '../templates/PessoasPage'
import { SinglePostTemplate } from '../templates/SinglePost'
import { CasePostTemplate } from '../templates/CasePost'
import { VagaPostTemplate } from '../templates/VagaPost'

if (
  window.location.hostname === 'localhost' &&
  window.localStorage.getItem('netlifySiteURL')
) {
  CMS.registerPreviewStyle(
    window.localStorage.getItem('netlifySiteURL') + '/styles.css'
  )
} else {
  CMS.registerPreviewStyle('/styles.css')
}

CMS.registerPreviewTemplate('home-page', ({ entry }) => (
  <HomePageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('sobre-page', ({ entry }) => (
  <ComponentsPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('projetos-page', ({ entry }) => (
  <ProjetosIndexTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('pessoas-page', ({ entry }) => (
  <PessoasPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('contato-page', ({ entry }) => (
  <ContactPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('blog-page', ({ entry }) => (
  <BlogIndexTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('posts', ({ entry }) => (
  <SinglePostTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('cases', ({ entry }) => (
  <CasePostTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('vaga', ({ entry }) => (
  <VagaPostTemplate {...entry.toJS().data} />
))