import React from "react";

const SearchJob = props => {
  const { getResults } = props;
  return (
    <div className="form-wrapper">
      <form onSubmit={getResults} className="form">
        <div className="input">
          <label>
            <strong>Job Title </strong>
          </label>
          <br />
          <input
            placeholder=" &#xf075; Filter by language"
            type="text"
            name="keyword"
            onChange={props.handleChange}
          />
        </div>
        <div className="input">
          <label>
            <strong>Location</strong>
          </label>
          <br />
          <input
            placeholder="Filter by state"
            type="text"
            name="location"
            onChange={props.handleChange}
          />
        </div>
        <div className="full-time-only">
          <input type="checkbox" />
          <p>Full Time Only</p>
        </div>
        <div>
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchJob;
