import React from "react";

const Result = props => (
  <div className="result-container">
    <h4>{props.username}</h4>
    <p>{props.fullName}, {props.location}</p>
    <p>{props.type}</p>
    <a href={props.page}>Visit {props.username}</a>
    <img src={props.img} alt={props.username}/>
  </div>
)

export default Result;
