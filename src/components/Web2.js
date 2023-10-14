import "./WebStyles.css";

import React from 'react'

const Web2 = (props) => {
  return (
    <div className="web-card">
        <div className="web-row1">
            <img src={props.imgs} alt="project" />
            <video controls autoplay loop src={props.video}></video>
        </div>
        <div className="web-row2">
            <h3>{props.heading} </h3>
            <p>{props.text} </p>
        </div>
        <hr />
    </div>
    
  )
}

export default Web2