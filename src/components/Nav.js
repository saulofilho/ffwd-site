import React, { useState, useEffect } from 'react'
import classnames from "classnames";
import { Location } from '@reach/router'
import { Link } from 'gatsby'
import { X } from 'react-feather'
import Logo from './Logo'
import { debounce } from "lodash"
import Headroom from 'react-headroom'

import './Nav.css'

export const Navigation = (props) => {
  const [active, setActive] = useState(false);
  const [activeSubNav, setActiveSubNav] = useState(false);
  const [currentPath, setCurrentPath] = useState(false);
  const [prevScrollpos, setPrevScrollpos] = useState(0);
  const [visible, setVisible] = useState(true);

  // useEffect(() => {
  //   setCurrentPath(props.location.pathname);

  //   const onScrollDebounced = debounce(() => {
  //     handleScroll();
  //   }, 50);

  //   const handleScroll = () => {
  //     const currentScrollPos = window.pageYOffset;
  //     const visible = prevScrollpos > currentScrollPos;

  //     setPrevScrollpos(currentScrollPos)
  //     setVisible(visible)
  //   };

  //   window.addEventListener("scroll", onScrollDebounced);

  //   return () => {
  //     window.removeEventListener("scroll", onScrollDebounced);
  //   }
  // }, [prevScrollpos, props.location.pathname])

  const handleMenuToggle = () => setActive(!active)

  // Only close nav if it is open
  const handleLinkClick = () => setActive(active) && handleMenuToggle()

  const toggleSubNav = subNav =>
    setActiveSubNav(activeSubNav === subNav ? false : subNav)

  const { subNav } = props,
    NavLink = ({ to, className, children, ...props }) => (
      <Link
        to={to}
        className={`NavLink ${
          to === currentPath ? 'active' : ''
          } ${className}`}
        onClick={() => handleLinkClick()}
        {...props}
      >
        {children}
      </Link>
    )

  return (
    <nav
      className={`${active ? 'nav-active' : ''}`}
    >
      <Headroom
      style={{
        position: "fixed",
        background: "transparent",
        zIndex: 9
      }} 
      >
      <div className={classnames("navbar", { "navbar-hidden": !visible })}>
        <div className="nav-wrapper container">
          <Link to="/" onClick={() => handleLinkClick()}>
            <Logo {...props} />
          </Link>
          {
            props.location.pathname === '/' ||
              props.location.pathname.split('/')[1] === 'contato' ||
              props.location.pathname.split('/')[1] === 'vaga'
              ?
              <button
                className="Button-blank nav-btn"
                onClick={() => handleMenuToggle()}
              >
                {active ?
                  <X color='#000' />
                  :
                  <img src={`/images/menu-ham-white.png`} alt="logo-black" />}
              </button>
              :
              <button
                className="Button-blank nav-btn"
                onClick={() => handleMenuToggle()}
              >
                {active ?
                  <X color='#000' />
                  :
                  <img src={`/images/menu-ham-black.png`} alt="logo-black" />}
              </button>
          }
        </div>
      </div>
      </Headroom>
      <div className="nav-links">
        <div className="nav-links-nav">
          <img src={'/images/logo-black.png'} />
          <button
            className="Button-blank nav-btn"
            onClick={() => handleMenuToggle()}
          >
            <X color='#000' />
          </button>
        </div>
        <div className="nav-links-menu-hamburger">
          <NavLink to="/sobre/">sobre</NavLink>
          <NavLink to="/projetos/">projetos</NavLink>
          <NavLink to="/pessoas/">pessoas</NavLink>
          <NavLink to="/blog/">blog</NavLink>
          <div
            className={`Nav--Group ${
              activeSubNav === 'posts' ? 'active' : ''
              }`}
          >
            <span
              className={`NavLink Nav--GroupParent ${
                props.location.pathname.includes('posts') ||
                  props.location.pathname.includes('blog') ||
                  props.location.pathname.includes('post-categories')
                  ? 'active'
                  : ''
                }`}
              onClick={() => toggleSubNav('posts')}
            >
              Pessoas
              <div className="Nav--GroupLinks">
                <NavLink to="/blog/" className="Nav--GroupLink">
                  All Posts
                </NavLink>
                {subNav.posts.map((link, index) => (
                  <NavLink
                    to={link.slug}
                    key={'posts-subnav-link-' + index}
                    className="Nav--GroupLink"
                  >
                    {link.title}
                  </NavLink>
                ))}
              </div>
            </span>
          </div>
          <NavLink to="/contato/">contato</NavLink>
          <div className="contact-menu-hamburger display-none-desk">
            <div className="contato-address-container">
              <div className="call-us">
                <p className="default-text-about">
                  <strong>Call us on</strong>
                </p>
                <p className="default-text-about">
                  <br />
              +55 48 3364 5570
              <br />
              go@ffwd.rocks
            </p>
              </div>
              <div className="address">
                <p className="default-text-about">
                  <strong>address</strong>
                </p>
                <p className="default-text-about">
                  <br />
              Rua Niberto Haase, 100 - Sala 301
              <br />
              Santa Mônica, Florianópolis, SC
              <br />
              88035-215
            </p>
              </div>
            </div>
          </div>
          <button
            className="Button-blank nav-btn"
            onClick={() => handleMenuToggle()}
          >
          </button>
        </div>
      </div>
    </nav>
  )
}

export default ({ subNav }) => (
  <Location>{route => <Navigation subNav={subNav} {...route} />}</Location>
)
