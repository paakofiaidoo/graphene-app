import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';

class Rating extends Component {

  constructor() {
    super();

    this.state = {
      rating: 1
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  render() {
    const { rating } = this.state;

    return (
      <div>
        <h2>Rating from state: {rating}</h2>
        <StarRatingComponent
    name={String} /* name of the radio input, it is required */
    value={Number} /* number of selected icon (`0` - none, `1` - first) */
    starCount={Number} /* number of icons in rating, default `5` */
    onStarClick={Function(nextValue, prevValue, name)} /* on icon click handler */
    onStarHover={Function(nextValue, prevValue, name)} /* on icon hover handler */
    onStarHoverOut={Function(nextValue, prevValue, name)} /* on icon hover out handler */
    renderStarIcon={Function(nextValue, prevValue, name)} /* it should return string or react component */
    renderStarIconHalf={Function(nextValue, prevValue, name)} /* it should return string or react component */
    starColor={String} /* color of selected icons, default `#ffb400` */
    emptyStarColor={String} /* color of non-selected icons, default `#333` */
    editing={Boolean} /* is component available for editing, default `true` */
/>
      </div>
    );
  }
}
export default Rating;
