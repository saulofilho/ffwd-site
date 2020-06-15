import React from 'react'
import './Logo.css'

export default ({ location }) => (
  <>
    {location.pathname === '/' ||
      location.pathname.split('/')[1] === 'contato' ||
      location.pathname.split('/')[1] === 'vaga' ? <div
        className="Logo"
        style={{
          backgroundImage: `url(/images/logo-white.png)`
        }}
      />
      :
      <div
        className="Logo"
        style={{
          backgroundImage: `url(/images/logo-black.png)`
        }}
      />}
  </>
)
