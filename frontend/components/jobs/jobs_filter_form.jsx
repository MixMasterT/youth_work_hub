import React from 'react';

class JobsFilterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: []
    }

    this.setFilter = this.setFilter.bind(this);
  }

  setFilter(e) {
    let mutibleFilters = this.state.filters;
    if (this.state.filters.includes(e.target.value)) {
      const itemIdx = mutibleFilters.indexOf(e.target.value);
      mutibleFilters.splice(itemIdx, 1);
      this.setState({ filters: mutibleFilters });
    } else {
      mutibleFilters.push(e.target.value);
      this.setState({ filters: mutibleFilters });
    }
    this.props.updateJobTypes(mutibleFilters);
  }

  render() {
    const job_types = ["art",
                       "baby-sitting",
                       "cleaning",
                       "computer work",
                       "gardening",
                       "kitchen work",
                       "lawn-mowing",
                       "music",
                       "pet-care",
                       "tutoring",
                       "yard-work"];

    const jobTypeCheckboxes = job_types.map((job_type) => (
      <div className='filter-checkbox'
           key={job_type}
      >
        <input
          id={job_type}
          type='checkbox'
          defaultChecked={false}
          defaultValue={job_type}
          onChange={this.setFilter}
          />
        <label htmlFor={job_type}>{job_type}</label>
      </div>
    ))
    return (
      <form className='jobs-filter-form'>
        <h2>Filter by...</h2>
        <h3>Job Type</h3>
        <div className='job-types'>
          {jobTypeCheckboxes}
        </div>
      </form>
    );
  }
}

export default JobsFilterForm;
