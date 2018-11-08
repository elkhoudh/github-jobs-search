import React from "react";

const SearchJob = props => (
  <form onSubmit={props.getResults}>
    <label>Job Title</label>
    <input name="keyword" onChange={props.handleChange} />
    <label>Location</label>
    <input name="location" onChange={props.handleChange} />
    <button type="submit">SUBMIT</button>
  </form>
);

export default SearchJob;
