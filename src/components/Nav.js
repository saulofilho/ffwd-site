import React, { useState, useEffect } from 'react'
import classnames from "classnames";
import { Location } from '@reach/router'
import { Link } from 'gatsby'
import { X } from 'react-feather'
import Logo from './Logo'
import { debounce } from "lodash"

import './Nav.css'

export const Navigation = (props) => {
  const [active, setActive] = useState(false);
  const [activeSubNav, setActiveSubNav] = useState(false);
  const [currentPath, setCurrentPath] = useState(false);
  const [prevScrollpos, setPrevScrollpos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setCurrentPath(props.location.pathname);

    const onScrollDebounced = debounce(() => {
      handleScroll();
    }, 50);

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollpos > currentScrollPos;
  
      setPrevScrollpos(currentScrollPos)
      setVisible(visible)
      console.log('prev', prevScrollpos)
      console.log('curr', currentScrollPos)
    };

    window.addEventListener("scroll", onScrollDebounced);

    return () => {
      window.removeEventListener("scroll", onScrollDebounced);
    }
  }, [])

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
      className={
        classnames
          ("navbar",
            {
              "navbar--hidden": !visible
            },
            `Nav ${active ? 'Nav-active' : ''}`
          )
      }
    >
      <div className="nav-container">
        <Link to="/" onClick={() => handleLinkClick()}>
          <Logo {...props} />
        </Link>
        <div className="Nav--Links">
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
              Blog
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
          <button
            className="Button-blank Nav--MenuButton"
            onClick={() => handleMenuToggle()}
          >
          </button>
        </div>
        {
          props.location.pathname === '/' ||
            props.location.pathname.split('/')[1] === 'contato' ||
            props.location.pathname.split('/')[1] === 'vaga'
            ?
            <button
              className="Button-blank Nav--MenuButton"
              onClick={() => handleMenuToggle()}
            >
              {active ? 
              <X color='#000' />
                :
              <img src={`/images/menu-ham-white.png`} alt="logo-black" />}
            </button>
            :
            <button
              className="Button-blank Nav--MenuButton"
              onClick={() => handleMenuToggle()}
            >
              {active ? 
              <X color='#000' />
                :
              <img src={`/images/menu-ham-black.png`} alt="logo-black" />}
            </button>
        }
      </div>
    </nav>
  )
}

export default ({ subNav }) => (
  <Location>{route => <Navigation subNav={subNav} {...route} />}</Location>
)
