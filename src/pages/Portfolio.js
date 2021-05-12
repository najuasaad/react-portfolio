import React from "react";
import myProjects from "../components/myprojects.json"

import Project from "../components/Project"


function Portfolio() {
  return (
    <div className="container">
      <div className="row">
        <p className="text-center mx-auto orange">(click on the icons for the code or deployed version)</p>
      </div>
      
      <div className="row">
        {myProjects.map((proj) => (
          <Project key={proj.project} {...proj}/>
        ))}
      </div>
    </div>
  )
}

export default Portfolio;