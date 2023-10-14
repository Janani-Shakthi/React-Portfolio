import "./WebStyles.css";
import Web2 from "./Web2";
import Web3 from "./Web3";

import React from 'react'

const Web1 = () => {
  return (
    <div className="web-container">
        <h1 className="project-heading">Projects</h1>
        <div className="website">
        {Web3.map((val, ind) =>{
          return(
            <Web2 
            key={ind}
            imgs={val.imgs}
            video={val.video}
            heading={val.heading}
            text={val.text}
            
            />
          )
        })}
        </div>
    </div>
  )
}

export default Web1;