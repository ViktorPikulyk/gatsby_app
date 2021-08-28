import React, { useState }  from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    document.body.style.backgroundColor = "#000000";
  } else {
    document.documentElement.classList.remove('dark');
    document.body.style.backgroundColor = "#f5f5f7";
  }

  const [theme, setTheme] = useState(`light`);

  const themeResolver = () => {
    if(theme === `light`) setTheme('dark');
    else setTheme('light');
    localStorage.theme = theme;
    console.log("theme changed to" + theme);
  }


  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} themeResolver={themeResolver} />
      <div className="max-w-screen-xl my-0 mx-auto lg:px-10 px-5 lg:py-20 md:py-10 py-5">
        <main>{children}</main>
        <footer className="dark:text-white">
          <hr className="mt-24 dark:text-white dark:bg-white"></hr>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
