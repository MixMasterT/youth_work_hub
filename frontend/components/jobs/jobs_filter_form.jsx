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

    const inputs = job_types.map((job_type) => (
      <label key={job_type}>{job_type}
        <input
          type='checkbox'
          defaultChecked={false}
          defaultValue={job_type}
          onChange={this.setFilter}
        />
      </label>
    ))
    return (
      <form id='jobs-filter-form'>
        {inputs}
      </form>
    );
  }
}

export default JobsFilterForm;
