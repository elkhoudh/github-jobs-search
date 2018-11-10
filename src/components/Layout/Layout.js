import React, { Component } from "react";
import Navbar from "./Navbar";
import SearchJob from "./SearchBar";
import Jobs from "./Jobs";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

class Layout extends Component {
  state = {
    keyword: "",
    location: "",
    jobs: [],
    isSubmitted: false
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
      .then(data => this.setState({ jobs: data, isSubmitted: true }));
    //this.renderJobs();
  };
  // renderJobs = () => {
  //   const { jobs } = this.state;
  //   jobs.map(job => {
  //     console.log(job);
  //   });
  // };
  render() {
    const { isSubmitted } = this.state;
    const results = isSubmitted ? (
      <Jobs jobs={this.state.jobs} />
    ) : (
      "search for jobs"
    );
    return (
      <>
        <Navbar />
        <SearchJob
          getResults={this.getResults}
          handleChange={this.handleChange}
        />
        <Grid container spacing={24}>
          <Grid item xs={8}>
            <Paper>
              <h2>Featured Jobs</h2>
              <hr />
              {results}
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>
              <h2>Featured Company</h2>
            </Paper>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default Layout;
