## Component Hierarchy

**LoginFormContainer**
 - Login Form
 - Signup Form
 - Logout Button

**AppContainer**
 - Home (Mission Statement)
  * Navbar
   -LoginFormContainer

**WorkersListContainer**
 - WorkerIndex
  * WorkersIndexItem

**WorkersShowContainer**
 -ViewWorker
  + message worker button (BONUS)
  + request worker button (BONUS)

**WorkerReviewsContainer**
 -Average Review score
 -ReviewsIndex (lists all of the reviews for this worker)

**JobsListContainer** (restrict with onEnter hook)
 - JobsIndex
  + JobIndexItem

**JobShowContainer** (restrict with onEnter hook)
 -JobView
  + review (BONUS)

**NewJobContainer** (restrict with onEnter hook)
 - NewJobForm
 - EditJobForm

**NewReviewContainer** (only available to Job poster)
 - ReviewFormContainer
  + ReviewForm

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "LoginFormContainer" |
| "/sign-in" | "LoginFormContainer" |
| "/api" | "AppContainer" |
| "/api/workers" | "WorkersListContainer" |
| "/api/workers/:workerId" | "WorkersShowContainer" |
| "/api/workers/:workerId/reviews" | "WorkerReviewsContainer" |
| "/api/jobs" | "JobsListContainer"
| "/api/jobs/:jobId" | "JobShowContainer"
| "/api/jobs/new" | "NewJobContainer" |
| "/api/jobs/:jobId/edit" | "NewJobContainer" |
| "/api/jobs/:jobId/review" | "NewReviewContainer" |
