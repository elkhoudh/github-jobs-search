import React from "react";

function Jobs(props) {
  const { jobs } = props;
  const jobsHTML = jobs.map(job => (
    <div>
      <h6>Title: {job.title}</h6>
      <h6>Location: {job.location}</h6>
      <h6>Type: {job.type}</h6>
      <h6>How to Apply: {job.how_to_apply.replace(/<\/?[^>]+(>|$)/g, "")}</h6>
      <img
        alt="..."
        src={
          job.company_logo ||
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
        }
      />
      <a href={job.url}>{job.url}</a>
      <p>Description: {job.description.replace(/<\/?[^>]+(>|$)/g, "")}</p>
    </div>
  ));
  return <div>{jobsHTML}</div>;
}

export default Jobs;
