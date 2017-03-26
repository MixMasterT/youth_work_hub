import React from 'react';

class JobsFilterForm extends React.Component {
  constructor(props) {
    super(props);
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
          name='job_type[]'
          defaultChecked={false}
          defaultValue={job_type}
          onChange={this.props.updateFilter}
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
