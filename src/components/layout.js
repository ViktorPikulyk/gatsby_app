import React, { useState, useEffect } from "react"
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

  const [theme, setTheme] = useState(
    typeof window !== "undefined" && window.localStorage.theme
  )

  useEffect(() => {
    if(theme && typeof window !== "undefined") window.localStorage.theme = theme
    if (
      (typeof window !== "undefined" && window.localStorage.theme) === "dark" ||
      (!(
        (typeof window !== "undefined" && window.localStorage)
        .hasOwnProperty('theme')
      ) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark")
      document.body.style.backgroundColor = "#000000"
    } else {
      document.documentElement.classList.remove("dark")
      document.body.style.backgroundColor = "#f5f5f1"
    }
  })


  const themeResolver = () => {
    if (theme === `light`) setTheme("dark")
    else setTheme("light")
  }

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        themeResolver={themeResolver}
        theme={theme}
      />
      <div className="max-w-screen-xl my-0 mx-auto lg:px-10 px-5 lg:py-20 md:py-10 py-5">
        <main>{children}</main>
        <footer className="dark:text-white">
          <hr className="mt-24 dark:text-white dark:bg-white"></hr>©{" "}
          {new Date().getFullYear()}, Built with
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
