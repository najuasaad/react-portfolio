import React from "react";
import image from "./images/najuasaad.jpg"
// import { faHtml5, faCss3Alt, faNodeJs, faReact, faBootstrap, faFortAwesomeAlt, faGit, faNpm, faSlack } from '@fortawesome/free-brands-svg-icons'

function About() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-5 my-4 justify-content-center">
          <a href="https://open.spotify.com/artist/1SfePVRnUVHCQciMUY3m4c"><img 
            alt="Gorgeous Coder" 
            src ={image}
            className="rounded-circle me"
          ></img></a>
        </div>
        <div className="col-8 text-center orange">
          Hi, I'm Najua! <br></br><span className="yellow">(pronounced NEJ-wuh) </span>
        </div>
        <div className="col-8 text-center mt-3">
          <p>
            I am a full-stack developer with experience in HTML, CSS, JS, Bootstrap, Node, Express, MySQL, MongoDB, React, and MERN. 
          </p>
          <p className="mb-5">
            I really love working with databases, React, and front end style. I recently completed the University of Minnesota's coding program. I'm currently learning more about creating functional apps for mobile devices in my spare time.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;