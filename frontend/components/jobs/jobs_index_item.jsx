import React from 'react';

const JobsIndexItem = ({job, onClick}) => {
  const date = new Date(job.start_time);
  const dateString = date.toDateString();
  const time = date.toTimeString().split(/\s/)[0];
  return (
    <div className="jobs-index-item" onClick={onClick}>
      <h3>{job.job_type}</h3>
      <div className='details'>
        <div className='descrition'>
          <h5>Date: {dateString}</h5>
          <h4>Description:</h4>
          <p>{job.description}</p>
          <h5>Address: {job.address ? job.address : 'Address not given'}</h5>
        </div>
        <div className='cost'>
          <h5>Time: {time}</h5>
          <h5>Wage: {job.wage}</h5>
          <h5>Duration: {job.duration}</h5>
          <h4>Total = ${job.cost}</h4>
        </div>
      </div>
    </div>
  );
};

export default JobsIndexItem;
