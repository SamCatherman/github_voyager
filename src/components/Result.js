import React from "react";

const Result = props => (
  <div className="col-md-6">
    <h3>{props.type}</h3>
    <p>{props.username}</p>
    <p>{props.location}</p>
    <img src={props.img} alt={props.username}/>
  </div>
)

export default Result;
