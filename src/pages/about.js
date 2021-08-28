import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => (
  <Layout>
    <Link className="block w-24 outline-none px-3 pb-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition duration-300 ease-in-out dark:text-white font-extrabold" to="/"><p className="text-4xl m-0">&#8249;<span className="text-base align-middle">  Home</span></p></Link>
    <br/>
    <br/>
    <Seo title="About" />
    <div className="animate-slideInFromBottom lg:px-24 lg:pt-16 lg:pb-24 lg:bg-white lg:dark:bg-primary"> 
        <p className="text-2xl text-justify text-greySecondary">Graduate of computer science with no work experience yet. I’ve built a few projects
by myself and I’m looking for a role where I can grow and learn from other experienced
team members.</p>
    <div className="lg:border-2 rounded-2xl flex lg:flex-row flex-col">
      <div className="lg:w-1/2 w-full lg:px-10 py-10 dark:text-white">
        <h2 className="text-5xl">Viktor</h2>
        <h2 className="text-5xl">Pikulyk</h2>
        <h3 className="text-4xl italic text-red-600">Front End Developer</h3>
        <hr className="dark:text-white dark:bg-white lg:hidden block"></hr>
      </div>
      <div className="lg:w-1/2 w-full my-auto lg:px-10">
        <p className="m-0 dark:text-white text-xl">Lviv, Ukraine</p>
        <br/>
        <p className="m-0 dark:text-white text-xl">+38 (***) ***-****</p>
        <p className="m-0 dark:text-white text-xl">************@gmail.com</p>
        <br/>
        <p className="m-0 dark:text-white text-xl">LinkedIn: <a className="text-blue-700" href="https://linkedin.com/in/viktor-pikulyk">/in/viktor-pikulyk</a></p>
        <p className="m-0 dark:text-white text-xl">GitHub: <a className="text-blue-700" href="https://github.com/ViktorPikulyk">github.com/ViktorPikulyk</a></p>
      </div>
    </div>
    <div className="lg:border-2 rounded-2xl flex lg:flex-row flex-col mt-6">
      <div className="lg:w-1/2 w-full lg:px-10 py-10 dark:text-white">
      <hr className="dark:text-white dark:bg-white lg:hidden block"></hr>
        <h2 className="text-5xl">Projects</h2>
        <hr className="dark:text-white dark:bg-white lg:hidden block"></hr>
      </div>
      <div className="lg:w-1/2 w-full lg:mt-10 lg:px-10">
        <h3 className="text-4xl dark:text-white">StudTask</h3>
        <ul className="list-disc dark:text-white">
          <li>Designed and implemented an online
event planning system for students.</li>
          <li>Built fast and responsive web app using
latest MERN Stack techniques.</li>
          <li>Used: Node.js, React, MongoDB,
GraphQL.</li>
        </ul>
      </div>
    </div>
    <div className="lg:border-2 rounded-2xl flex lg:flex-row flex-col mt-6">
      <div className="lg:w-1/2 w-full lg:px-10 py-10 dark:text-white">
      <hr className="dark:text-white dark:bg-white lg:hidden block"></hr>
        <h2 className="text-5xl">Skills</h2>
        <hr className="dark:text-white dark:bg-white lg:hidden block"></hr>
      </div>
      <div className="lg:w-1/2 w-full lg:mt-10 lg:px-10">
        <ul className="dark:text-white ml-0">
          <li>JavaScript (React/Node.js)</li>
          <li>HTML/ CSS</li>
          <li>REST API (GraphQL)</li>
          <li>Gatsby</li>
          <li>Bootstrap/TailwindCSS</li>
          <li>MongoDB</li>
          <li>Git</li>
        </ul>
      </div>
    </div>
    <div className="lg:border-2 rounded-2xl flex lg:flex-row flex-col mt-6">
      <div className="lg:w-1/2 w-full lg:px-10 py-10 dark:text-white">
        <hr className="dark:text-white dark:bg-white lg:hidden block"></hr>
        <h2 className="text-5xl">Education</h2>
        <hr className="dark:text-white dark:bg-white lg:hidden block"></hr>
      </div>
      <div className="lg:w-1/2 w-full lg:my-10 lg:px-10">
        <h3 className="text-4xl dark:text-white">Lviv Polytechnic National University</h3>
        <p className="m-0 dark:text-white text-2xl font-bold">B.S. in Computer Science</p> 
        <p className="m-0 dark:text-white text-md">(September 2017 - June 2021)</p>
        <br/>
        <p className="m-0 dark:text-white text-xl text-justify">Relevant courses: Algorithmic and OOP Programming, Data Science, Artificial intelligence, Machine learning, Web Development and Design</p>
      </div>
    </div>
    </div>
  </Layout>
)

export default About
