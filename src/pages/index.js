import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import MidBox from "../components/mid-box"
import SmallBox from "../components/small-box"
import StudtaskImg from "../images/studtask.png"
import StudtaskLogo from "../images/logo_studtask.png"
import GitHubLogoB from "../images/github_logo.png"
import GitHubLogoW from "../images/github_logo_white.png"
import LinkedInLogo from "../images/linkedin_logo.png"
import ProfileW from "../images/Profile_W.png"
import ProfileB from "../images/Profile_B.png"


if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="flex flex-row overflow-auto p-10 absolute left-0 right-0 mt-10 animate-slideInFromRight">
      <div className="min-w-invBox w-invBox h-80 "></div>
      <MidBox>
        <div className="w-full h-full bg-gradient-to-r from-gfirst to-glast flex items-stretch">
          <Link className="w-full h-full p-7" to="/studtask/">
            <p className="text-2xl mb-0 flex">
              <img className="w-10 h-10 ml-1" alt="studtaskLogo" src={StudtaskLogo}/>
              <h1 className="ml-3">StudTask</h1>
            </p>
            <p className="font-mono font-bold text-gray-500 text-lg">Online event planning system for students</p>
            <img className="mt-10 ml-1" alt="studtaskImg" src={StudtaskImg}></img>
            </Link>
        </div>
      </MidBox>
      <MidBox>
        <div className="w-full h-full bg-white dark:bg-primary dark:text-white flex items-stretch">
          <Link className="w-full h-full p-7" to="/about/">
            <p className="text-2xl mb-0 flex">
              <img className="w-10 h-10 ml-1 hidden dark:block" alt="ProfileW" src={ProfileW}/>
              <img className="w-10 h-10 ml-1 dark:hidden" alt="ProfileB" src={ProfileB}/>
              <h1 className="ml-3">About Me</h1>
            </p>
            <div className="w-full py-10 dark:text-white">
              <h2 className="text-4xl m-0">Viktor</h2>
              <h2 className="text-4xl m-0">Pikulyk</h2>
              <h3 className="text-2xl italic text-red-600">Front End Developer</h3>
              <p className="text-blue-500 mt-20">More info...</p>
            </div>
          </Link>
        </div>
      </MidBox>
      <div className="flex flex-col justify-between">
        <SmallBox>
          <div className="w-full h-full bg-white dark:bg-primary dark:text-white flex items-stretch">
            <Link className="w-full h-full p-3" to="https://github.com/ViktorPikulyk">
              <img className="mt-5 ml-1 w-36 hidden dark:block" alt="GHlogoW" src={GitHubLogoW}></img>
              <img className="mt-5 ml-1 w-36 dark:hidden" alt="GHlogoB" src={GitHubLogoB}></img>
            </Link>
          </div>
        </SmallBox>
        <SmallBox>
          <Link className="w-full h-full p-0" to="https://linkedin.com/in/viktor-pikulyk/">
            <img alt="LIlogo" src={LinkedInLogo}></img>
          </Link>
        </SmallBox>
      </div>
      <MidBox>
      </MidBox>
      <div className="flex flex-col justify-between">
        <SmallBox></SmallBox>
        <SmallBox></SmallBox>
      </div>
      <MidBox></MidBox>
      <MidBox></MidBox>
      <MidBox></MidBox>
    </div>
    <h1 className="dark:text-white">Hi people</h1>
    <br></br>
    <p className="mt-96">
       <br />
    </p>
  </Layout>
)

export default IndexPage
