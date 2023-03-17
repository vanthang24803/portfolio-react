import React from "react";
import About from "../About/About";


const ScrollDown = () => {
    return (
        <div className="scroll-down">
            <a href={About} className="mouse__wrapper">
                <span className="home__scroll-name">Scroll Down</span>
                <span className="mouse">
                    <span className="wheel"></span>
                </span>
            </a>
        </div>
    ) 
}


export default ScrollDown