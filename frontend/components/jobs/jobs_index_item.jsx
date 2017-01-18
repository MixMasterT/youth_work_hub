import React from 'react';

const JobsIndexItem = ({job, onClick}) => (
  <div className="jobs-index-item" onClick={onClick}>
    <h4>{job.job_type}</h4>
    <p>{job.description}</p>
    <p>{job.address}</p>
    <p>{job.wage}</p>
    <p>{job.duration}</p>
    <p>total = {job.cost}</p>
  </div>
);

export default JobsIndexItem;
