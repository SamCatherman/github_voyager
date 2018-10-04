import React from "react";

//presentational component to display data returned from github API.
//props argument destructured to make JSX more readable
const Result = ({
  username,
  fullName,
  location,
  type,
  page,
  img,
  pubRepos,
  email
}) => (
  <div className="result-container">
    <h4>{username}</h4>
    {fullName && location ? (
      <p>
        {fullName}, {location}
      </p>
    ) : null}
    <img src={img} alt={username} />
    <p>{type}</p>
    <p>Public Repositories: {pubRepos}</p>
    <a href={page}>Visit {username}</a>
    {{ email } ? <a href={`mailto:${email}`}>Contact {username}</a> : null}
  </div>
);

export default Result;
