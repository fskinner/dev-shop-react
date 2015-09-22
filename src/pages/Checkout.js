import React, { Component } from 'react';
import { Link } from 'react-router';

class Checkout extends Component {
  render() {
    return (
      <div>
        Order placed!
        <Link to="/"
          className="btn btn-primary btn-lg pull-right top-offset-20 bottom-offset-20">
          Buy more!
        </Link>
      </div>
    );
  }
}

export default Checkout;
