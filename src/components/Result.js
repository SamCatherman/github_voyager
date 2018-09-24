import React from "react";

const Result = ({
  username,
  fullName,
  location,
  type,
  page,
  img,
  pubRepos
}) => (
  <div className="result-container">
    <h4>{username}</h4>
    <p>
      {fullName}, {location}
    </p>
    <p>{type}</p>
    <p>Public Repositories: {pubRepos}</p>
    <a href={page}>Visit {username}</a>
    <img src={img} alt={username} />
  </div>
);

export default Result;
