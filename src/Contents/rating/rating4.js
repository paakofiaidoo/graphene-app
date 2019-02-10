import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Rating from 'react-rating';

class Rating2 extends Component {

  render() {


    return (
      <Rating
        stop={6}
        emptySymbol={['fa fa-star-o fa-2x low', 'fa fa-star-o fa-2x low',
          'fa fa-star-o fa-2x medium', 'fa fa-star-o fa-2x medium',
          'fa fa-star-o fa-2x high', 'fa fa-star-o fa-2x high']}
        fullSymbol={['fa fa-star fa-2x low', 'fa fa-star fa-2x low',
          'fa fa-star fa-2x medium', 'fa fa-star fa-2x medium',
          'fa fa-star fa-2x high', 'fa fa-star fa-2x high']}
          fractions={2}

      />
    );
  }
}
export default Rating2;
