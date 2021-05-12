import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 my-5 text-center">
          <p className="mb-5 orange">Contact me through Github, LinkedIn, Email, or download my resume!</p>
        <a href="https://github.com/NajuaSaad"><FontAwesomeIcon icon={faGithub} className="mx-4 ficon"/></a>
        <a href="https://www.linkedin.com/in/najua-s-5b2236204/"><FontAwesomeIcon icon={faLinkedin} className="mx-4 ficon"/></a>
        <a href="mailto: najuasaad@gmail.com"><FontAwesomeIcon icon={faPaperPlane} className="mx-4 ficon"/></a>
        <a href="../components/resume.pdf"><FontAwesomeIcon icon={faFilePdf} className="mx-4 ficon"/></a>
        </div>
      </div>
    </div>
  )
}

export default Contact;
