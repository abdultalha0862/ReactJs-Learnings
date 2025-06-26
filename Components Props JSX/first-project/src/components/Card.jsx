import React from "react";
import "./card.css"

const Card=(props)=>{
    return(
        <div className="card">
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
        </div>
    )
}
export default Card