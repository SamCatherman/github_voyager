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
    console.log("component mounted")
    console.log("state inside cdm", this.state);
  };

  searchGithub = query => {
    API.search(query)
      .then(res => this.setState({
        result: res.data
      }))
      .catch(err => console.log(err))
      console.log("query made", query)
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("search: ", this.state.search);
    this.searchGithub(this.state.search);
    console.log("result: ", this.state.result);
  };

  render() {
    return (
      <div className="row">
        <SearchForm
          value={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <Result username={this.state.result.login}
                img={this.state.result.avatar_url}
                type={this.state.result.type}
                location={this.state.result.location}
        />
      </div>
    )
  }


}

export default SearchContainer;
