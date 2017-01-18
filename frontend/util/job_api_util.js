export const fetchJobs = () => (
  $.ajax({
    url: `/api/jobs`
  })
);

export const postJob = (job) => (
  $.ajax({
    url:'/api/jobs',
    method: 'POST',
    data: { job }
  })
);

export const editJob = (job) => (
  $.ajax({
    url:`/api/jobs/${job.id}`,
    method: 'PATCH',
    data: { job }
  })
);

export const takeJob = (job_id, worker_id ) => (
  $.ajax({
    url: `/api/jobs/${job_id}`,
    method: `PATCH`,
    data: { type: 'ACCEPT', worker_id }
  })
);
