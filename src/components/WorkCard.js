import "./WorkCardStyles.css"

import React from 'react'

import { Link } from "react-router-dom"
const WorkCard = (props) => {
  return (
    <div className="project-card">
    <img src={props.imgsrc} alt="projects" />
    <h3 className="project-title">{props.title}</h3>
    <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
            <Link to={props.view} className="btn">View</Link>
            
        </div>
    </div>
</div>
  )
}

export default WorkCard