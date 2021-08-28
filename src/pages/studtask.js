import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Studtask = () => (
  <Layout>
    <Link className="block w-24 outline-none px-3 pb-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition duration-300 ease-in-out dark:text-white font-extrabold" to="/"><p className="text-4xl m-0">&#8249;<span className="text-base align-middle">  Home</span></p></Link>
    <br/>
    <br/>
    <Seo title="StudTask" />
    <div className="animate-slideInFromBottom text-justify"> 
    <h1 className="dark:text-white">StudTask</h1>
    <p className="text-xl text-greySecondary">Pikulyk V.R., Yurchak I.Y. (supervisor). Design and implementation of an
online event planning system for students. Bachelor's thesis - National University
"Lviv Polytechnic", Lviv, 2021.</p>
    <p className="text-xl text-greySecondary">Extended abstract.</p>
    <p className="text-xl text-greySecondary">The bachelor's thesis is dedicated to the design and implementation of an
online event planning system for students.</p>
    <p className="text-xl text-greySecondary">The first section of the report discusses several similar software products,
identifies their strengths and weaknesses. Also the features of service on which it is
necessary to be guided when designing system are chosen.</p>
    <p className="text-xl text-greySecondary">The second section describes the program area and sets requirements for its
functionality. According to these requirements, all the necessary software
implementation tools have been selected, namely React [1] for writing the client part
of the service and Node.js [2] for writing the server, and GraphQL [3] will be used to
process requests.</p>
    <p className="text-xl text-greySecondary">The third section develops requirements for system components. A functional-
logical scheme for a general understanding of the project structure, a data structure
diagram to describe the information that will be in all objects of the system, as well as
data flow diagrams to guide which functionality will be in each of the objects. The
whole process of writing the server part of the service and its integration with the
client part is described in detail.</p>
    <p className="text-xl text-greySecondary">The fourth section describes the entire process of using the user interface, from
registration to task status management. All additional functionality is described, and
the test of adaptability of the interface to various formats of devices is carried out.
The fifth section substantiates the feasibility of this project from an economic
point of view. The analysis of the market of similar software products is carried out,
the strategy of development of a product is defined, and also its profitability is
proved.</p>
    <p className="text-xl text-greySecondary">The object of research is event planners.The subject of research - the basic principles of operation of event planners.</p>
    <p className="text-xl text-greySecondary">The purpose of the study: the aim of the work was to design and develop an
online service for students that will help them easily and conveniently plan their time.</p>
    <p className="text-xl text-greySecondary">Results: an online event planning service for students has been developed,
which implements all the necessary functionality, as well as added several additional
features, namely report generation and calculation of the rating score.</p>
    <p className="text-xl text-greySecondary">Keywords - student, planning, tasks, web, service.</p>
    <p className="text-xl text-greySecondary">List of used literature sources.</p>
    <p className="text-xl text-greySecondary">1. Robin Wieruch - The Road to React: Your journey to master plain yet
pragmatic React.js.</p>
    <p className="text-xl text-greySecondary">2. Azat Mardan - Practical Node.js: Building Real-World Scalable Web Apps.</p>
    <p className="text-xl text-greySecondary">3. Robin Wieruch - The Road to GraphQL: Your journey to master pragmatic
GraphQL in JavaScript with React.js and Node.js</p>
    <br/>
    <p className="dark:text-white text-xl">URL:<a className="text-blue-700 text-xl" href="https://studtask.herokuapp.com"> studtask.herokuapp.com</a></p>
    </div>
  </Layout>
)

export default Studtask
