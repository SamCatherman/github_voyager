import React, { Component } from "react";
import SearchForm from "./SearchForm";
import Result from "./Result";
import API from "../utils/API";

class SearchContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  //initial request when SearchContainer mounts
  componentDidMount() {
    this.searchGithub("Github");
  }

  //fetch request to github API
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

  //set state with user input
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //execute request to Github on form submit
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchGithub(this.state.search);
    this.setState({
      search: ""
    });
  };

  //render searchform and Result components
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
