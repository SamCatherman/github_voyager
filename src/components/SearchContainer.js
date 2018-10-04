import React, { Component } from "react";
import SearchForm from "./SearchForm";
import Result from "./Result";
import API from "../utils/API";

class SearchContainer extends Component {
  //initialize state to have an empty result object, and empty search term
  state = {
    result: {},
    search: ""
  };

  //initial request when SearchContainer mounts
  componentDidMount() {
    this.searchGithub("Github");
  }

  //fetch request to github API
  async searchGithub(query) {
    let res = await API.search(query);
    let data = await res.json();
    this.setState({
      result: data
    });
  }

  //generic Input Handler to set state with user input -
  //handles changes on multiple inputs using destructuring and [] syntax
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //execute request to Github on form submit,
  //empty search Input after query submitted
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchGithub(this.state.search);
    this.setState({
      search: ""
    });
  };

  //render SearchForm and Result components
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
