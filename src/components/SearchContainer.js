import React, { Component } from "react";
import SearchForm from "./SearchForm";
import Result from "./Result";
import API from "../utils/API";

class SearchContainer extends Component {
  state = {
      result: {},
      search: ""
    }

  componentDidMount() {
    this.searchGithub('Github')
  };

  searchGithub = query => {
    API.search(query)
      .then(res => this.setState({
        result: res.data
      }))
      .catch(err => console.log(err))
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchGithub(this.state.search);
    console.log("result: ", this.state.result);
  };


  render() {
    return (
      <div className="grid-container">
        <SearchForm
          value={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <Result username={this.state.result.login}
                img={this.state.result.avatar_url}
                type={this.state.result.type}
                location={this.state.result.location}
                page={this.state.result.html_url}
                fullName={this.state.result.name}
        />
      </div>
    )
  }


}

export default SearchContainer;
