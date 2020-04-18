import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { ADD_TO_CART } from "../constants";

class Product extends Component {
  constructor() {
    super();
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    console.log("[Product] addToCart()");
    this.props.addToCart(this.props.vo);
  }

  render() {
    return (
      <div className="col-6 col-sm-4 col-md-3 col-lg-2 p-0">
        <article className="product">
          <img
            src={this.props.vo.image}
            className="img-fluid"
            alt={this.props.vo.name}
          />
          <h6>{this.props.vo.name}</h6>
          <div className="d-flex justify-content-between small">
            <span>₹ {this.props.vo.price.actual}</span>
            <span className="text-muted">₹ {this.props.vo.price.display}</span>
            <span className="text-success">{this.props.vo.discount}% off</span>
          </div>
          <div className="text-center">
            <button
              onClick={this.addToCart}
              className="btn btn-sm btn-warning rounded-pill px-3 my-2"
            >
              Add to cart
            </button>
          </div>
        </article>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: function (vo) {
      dispatch({ type: ADD_TO_CART, vo });
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Product));
