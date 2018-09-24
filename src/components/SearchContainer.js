import React, { Component } from "react";
import SearchForm from "./SearchForm";
import Result from "./Result";
import API from "../utils/API";

class SearchContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  componentDidMount() {
    this.searchGithub("Github");
  }

  searchGithub = query => {
    API.search(query)
      .then(res => res.json())
      .then(data => {
        this.setState({
          result: data
        });
      })
      .catch(err => console.err(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchGithub(this.state.search);
    console.log("result: ", this.state.result);
  };

  render() {
    const result = this.state.result;
    return (
      <div className="grid-container">
        <SearchForm
          value={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <Result
          username={result.login}
          img={result.avatar_url}
          type={result.type}
          location={result.location}
          page={result.html_url}
          fullName={result.name}
          pubRepos={result.public_repos}
          email={result.email}
        />
      </div>
    );
  }
}

export default SearchContainer;
