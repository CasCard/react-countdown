import React from "react"
import description from "../styles/Description.css"
export const Description=({text})=>{
    return(
        <div className="description">
            <p className="decription-text">{text}</p>
        </div>
    )
}