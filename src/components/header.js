import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import sunSVG from "../images/sun.svg"
import moonSVG from "../images/moon.svg"

const Header = ({ siteTitle, themeResolver }) => {
  
  return (
  <header className="w-full bg-black dark:bg-black">
    <div className="max-w-screen-xl flex lg:flex-row md:flex-row flex-col lg:justify-between md:justify-between items-center items-stretch mx-auto px-10">
    <div className="lg:text-left text-center my-3">
      <h1 className="m-0">
        <Link className="text-gray-100"
          to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
    <ul className="flex flex-row items-stretch m-0 justify-center lg:bg-black bg-black dark:bg-black">
      <li className="flex flex-row items-stretch m-0">
        <Link className="font-mono px-5 text-gray-200 lg:py-0 py-3 flex items-center lg:hover:bg-primary hover:bg-hovering text-textHeader hover:text-white" to="/studtask">StudTask</Link>
      </li>
      <li className="flex flex-row items-stretch m-0">
        <Link className="font-mono px-5 text-gray-200 lg:py-0 py-3 flex items-center lg:hover:bg-primary hover:bg-hovering text-textHeader hover:text-white" to="/about">About</Link>
      </li>
      <li className="flex flex-row items-stretch m-0 ml-auto lg:ml-10 md:ml-5">
        <button onClick={themeResolver} className="w-8"><img className="w-8 p-2 dark:p-2 bg-white dark:bg-black rounded-full transition duration-500 ease-in-out" src={localStorage.theme === 'light'?sunSVG:moonSVG} alt="O"/></button>
      </li>
    </ul>
    </div>
  </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
