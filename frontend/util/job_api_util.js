export const fetchJobs = () => (
  $.ajax({
    url: `/api/jobs`
  })
);

export const fetchJob = (id) => (
  $.ajax({
    url: `/api/jobs/${id}`
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
    data: { type: 'ACCEPT', acceptance: { job_id, worker_id } }
  })
);

export const leaveFeedback = (review) => (
  $.ajax({
    url: `/api/reviews`,
    method: `POST`,
    data: { review }
  })
);

export const updateFeedback = (review) => (
  $.ajax({
    url: `/api/jobs/${review.job_id}/reviews/${review.id}`,
    method: `PATCH`,
    data: { review }
  })
);
