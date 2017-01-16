import React from 'react';

class WorkersIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchWorkers();
  }

  render() {
    return (
      <main>
        <h1>We offer the best young workers around!</h1>
        {this.props.workers.map((w) => (
          <div key={w.id}>
            <h3>{w.username}</h3>
            <img src={w.picture_url} />
            <p>{w.bio}</p>
          </div>
        ))}
      </main>
    );
  }
}

export default WorkersIndex;
