import React from "react";

const Result = props => (
  <div>
    <h3>{props.type}</h3>
    <p>{props.username}</p>
    <img src={props.img} alt={props.username}/>
  </div>
)

export default Result;
