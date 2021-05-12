import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCode, faWindowRestore } from '@fortawesome/free-solid-svg-icons'
import user from "../images/userdirectory.jpg"
import study from "../images/studybuddy.jpg"
import prog from "../images/progressivebudget.jpg"
import note from "../images/notetaker.jpg"
import lunchable from "../images/lunchables.jpg"
import fit from "../images/fitnesstracker.jpg"

function Project(props) {
  console.log(props.image)

  const imgSrc = () => {
    if (props.project === "USER DIRECTORY") {
      return user
    } else if (props.project === "STUDY BUDDY") {
      return study
    } else if (props.project === "LUNCHABLES") {
      return lunchable
    } else if (props.project === "NOTE TAKER") {
      return note
    } else if (props.project === "PROGRESSIVE BUDGET") {
      return prog
    } else {
      return fit
    }
  }

  return (
    <div className="card projectCard border-0 col-md-5 mx-auto" /* style="width: 18rem;" */>
        <p className="card-text orange text-center mt-0 title">{props.project}</p>
        <p className="card-text orange text-center mt-0">{props.description}</p>
      <img src={imgSrc()} className="card-img-top projImage" alt={props.project}/>
        <a className= "position-relative codeIcon" href={props.repo}><FontAwesomeIcon icon={faFileCode} className="yicon"/></a>
        <a className= "position-relative depIcon mb-0" href={props.deployed}><FontAwesomeIcon icon={faWindowRestore} className="yicon"/></a>
    </div>
  )
}

export default Project;