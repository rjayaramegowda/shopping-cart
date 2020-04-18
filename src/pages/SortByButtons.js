import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  SORT_BY_PRICE_HIGH,
  SORT_BY_PRICE_LOW,
  SORT_BY_DISCOUNT,
  FILTER_BY_PRICE,
} from "../constants";

function mapStateToProps(state) {
  return {      
  };
}

function mapDispatchToProps(dispatch) {
  return {
      soryByPirceHigh: function () {
          dispatch({type: SORT_BY_PRICE_HIGH})
        },
        soryByPirceLow: function () {
          dispatch({type: SORT_BY_PRICE_LOW})
        },
        soryByDiscount: function () {
          dispatch({type: SORT_BY_DISCOUNT})
        },
        filterByPrice: function () {
          dispatch({type: FILTER_BY_PRICE, data:{ low: 10000, high: 50000 } })
        }
  };
}

class SortByButtons extends Component {

  constructor() {
    super();
    this.soryByPirceHigh = this.soryByPirceHigh.bind(this);
    this.soryByPirceLow = this.soryByPirceLow.bind(this);
    this.soryByDiscount = this.soryByDiscount.bind(this);
    this.filterByPrice = this.filterByPrice.bind(this);
}

soryByPirceHigh() {   
    console.log("[SortByButtons] soryByPirceHigh()")
    this.props.soryByPirceHigh();             
}

soryByPirceLow() {   
    console.log("[SortByButtons] soryByPirceLow()")
    this.props.soryByPirceLow();     
    
}

soryByDiscount() {   
    console.log("[SortByButtons] soryByDiscount()")
    this.props.soryByDiscount();             
}

filterByPrice() {   
    console.log("[SortByButtons] filterByPrice()")
    this.props.filterByPrice();             
}

  render() {
    return (
      <>
      <div className="d-md-none">
      <div className="d-flex flex-sm-wrap ">
        <button type="button" onClick={this.soryByPirceHigh} className="btn btn-link btn-lg btn-block text-secondary">
          <i className="fa fa-unsorted" /> Sort</button>
        <button type="button" onClick={this.filterByPrice} className="btn btn-link btn-lg btn-block mt-0 text-secondary">
          <i className="fa fa-filter" /> Filter</button>
      </div>
    </div>
    <div className="d-none d-md-block">
      <div className="d-flex flex-wrap flex-md-nowrap align-items-center pt-3 pb-2">
        <strong>Sort By</strong>
        <button className="btn btn-outline-secondary ml-4" onClick={this.soryByPirceHigh}>Price -- High Low</button>
        <button className="btn btn-outline-secondary ml-2" onClick={this.soryByPirceLow}>Price -- Low High</button>
        <button className="btn btn-outline-secondary ml-2" onClick={this.soryByDiscount}>Discount</button>
      </div>
    </div>
  </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortByButtons);