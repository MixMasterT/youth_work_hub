import React from 'react';

import Review from './review';

import { connect } from 'react-redux';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: 3
    }
  }

  render() {
    const reviewArray = this.props.reviewArray;
    console.log(reviewArray[0].rating + reviewArray[1].rating);
    console.log(reviewArray.reduce((r1,r2) => parseInt(r1.rating) + parseInt(r2.rating)));
    if (reviewArray.length === 0) {
      return ("");
    } else {
      const avgRating = reviewArray.reduce((r1, r2) => {
        return parseInt(r1.rating) + parseInt(r2.rating);
      }) / reviewArray.length;

      const visibleReviews = reviewArray.slice(0, this.state.showing);

      const reviews = visibleReviews.map((r) => (
        <Review key={r.id} review={r} />
      ));


      return (
        <div className='review-list'>
          <h3>Average Rating:{avgRating}</h3>
          {reviews}
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  reviewArray: state.workerDetail.reviews
});

export default connect(mapStateToProps)(ReviewList);
