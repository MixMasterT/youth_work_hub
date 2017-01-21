import React from 'react';

const JobsIndexItem = ({job, onClick}) => {
  const date = new Date(job.start_time);
  const dateString = date.toDateString();
  const time = date.toTimeString().split(/\s/)[0];
  return (
    <div className="jobs-index-item" onClick={onClick}>
      <div className='status-details'>
        <h5>status: {job.status}</h5>
        <h5>Date: {dateString}</h5>
        <h5>Time: {time}</h5>
        <h4>Total = ${job.cost}</h4>
      </div>
      <div className='cost-details'>
        <h5>Address: {job.address ? job.address : 'Address not given'}
        </h5>
        <h3>{job.job_type} job</h3>
        <h5>Wage: ${job.wage}/hr</h5>
        <h5>Duration: {job.duration} hours</h5>
      </div>
    </div>
  );
};

export default JobsIndexItem;
