import React from "react"
import "./NavBar.css"

export default function NavBar(){
    return(
        <>
        <div className="navbar">
        <div className="navbar--section">
            <div>
              <h3>get<span>Linked</span></h3>
            </div>
            <div className="navlinks">
              <p>Timeline</p>
              <p>Overview</p>
              <p>FAQs</p>
              <p>Contact</p>
            </div>
            <div className="btn--register">
               <button>Register</button>
            </div>
        </div>
        </div>
        </>
    )
}