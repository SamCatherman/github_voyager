import React from "react";

const SearchForm = ({ handleFormSubmit, value, handleInputChange }) => (
  <form onSubmit={handleFormSubmit}>
    <input
      type="text"
      name="search"
      placeholder="find a github user..."
      value={value}
      onChange={handleInputChange}
    />
    <button className="button" type="submit">
      Find User
    </button>
  </form>
);

export default SearchForm;
