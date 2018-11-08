import React, { Component } from "react";
import Navbar from "./Navbar";
import SearchJob from "./SearchBar";

class Layout extends Component {
  state = {
    keyword: "",
    location: "",
    jobs: []
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };
  // fetch api
  getResults = e => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/",
      targetUrl = `https://jobs.github.com/positions.json?description=${
        this.state.keyword
      }&location=${this.state.location}`;
    e.preventDefault();
    fetch(proxyUrl + targetUrl)
      .then(res => res.json())
      .then(data => this.setState({ jobs: data }));
  };

  render() {
    return (
      <>
        <Navbar />
        <SearchJob />
      </>
    );
  }
}

export default Layout;
