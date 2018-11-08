import React, { Component } from "react";
import NavBar from "./components/NavBar";
import "./App.css";

class App extends Component {
  state = {
    keyword: "",
    location: "",
    jobs: []
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  getResults = e => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/",
      targetUrl = `https://jobs.github.com/positions.json?description=${
        this.state.keyword
      }&location=${this.state.location}`;
    e.preventDefault();
    fetch(proxyUrl + targetUrl)
      .then(res => res.json())
      .then(data => this.setState({ jobs: data }));
    this.renderJobs();
  };

  renderJobs = () => {
    const { jobs } = this.state;
    jobs.map(job => {
      console.log(job);
    });
  };

  render() {
    console.log(this.state.jobs);
    return (
      <div>
        <NavBar getResults={this.getResults} handleChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
