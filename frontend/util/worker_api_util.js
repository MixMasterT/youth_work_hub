export const signup = (worker) => (
  $.ajax({
    url: '/api/workers',
    method: 'POST',
    data: { worker }
  })
);
export const editAccount = (worker) => (
  $.ajax({
    url: `/api/workers/${worker.id}`,
    method: 'PATCH',
    data: { worker }
  })
);
export const login = (cred) => (
  $.ajax({
    url: '/api/worker_session',
    method: 'POST',
    data: { cred }
  })
);
export const logout = () => (
  $.ajax({
    url: '/api/worker_session',
    method: 'DELETE'
  })
);
