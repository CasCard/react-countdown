import React from "react"
import title from "../styles/Title.css"

export const Title=({text})=>{
    return (
        <h1 className="title">
            {text}
        </h1>
    )
}