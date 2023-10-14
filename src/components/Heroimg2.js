import "./Heroimg2.css";
import React, { Component } from 'react'
import banimg from "../assets/c5.jpg"


class Heroimg2 extends Component {
    render() {
        return (
            <div className="hero">
                <div className="mask">
                    <img className="into-img" src={banimg} alt="IntroImg" />
                </div>
                <div className="content">
                    <h1> {this.props.heading} </h1>
                    <p>{this.props.para}</p>
                </div>
            </div>
          )
    }
 
}

export default Heroimg2