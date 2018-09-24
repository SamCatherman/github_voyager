import React from "react";

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
    <p>{type}</p>
    <p>Public Repositories: {pubRepos}</p>
    <a href={page}>Visit {username}</a>
    {{ email } === null ? (
      <a href={`mailto:${email}`}>Contact {username}</a>
    ) : null}
    <img src={img} alt={username} />
  </div>
);

export default Result;
