import React from "react";

const SearchJob = props => {
  const { getResults } = props;
  return (
    <div>
      <form onSubmit={getResults}>
        <label>Job Title</label>
        <input name="keyword" onChange={props.handleChange} />
        <label>Location</label>
        <input name="location" onChange={props.handleChange} />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default SearchJob;
