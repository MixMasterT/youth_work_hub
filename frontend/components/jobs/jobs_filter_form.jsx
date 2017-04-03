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
    if (this.state.filters.includes(e.target.value)) {
      const mutibleFilters = this.state.filters;
      const itemIdx = mutibleFilters.indexOf(e.target.value);
      mutibleFilters.splice(itemIdx, 1);
      this.setState({ filters: mutibleFilters });
    } else {
      const modFilters = this.state.filters;
      modFilters.push(e.target.value);
      this.setState({ filters: modFilters });
    }
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
        <label>{job_type}
          <input
            type='checkbox'
            defaultChecked={false}
            defaultValue={job_type + ' '}
            onChange={this.setFilter}
            />
        </label>
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
