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
        products: state.products
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
            dispatch({type: FILTER_BY_PRICE})
          }
    };
}

class Comp extends Component {

    constructor() {
        super();
        this.soryByPirceHigh = this.soryByPirceHigh.bind(this);
        this.soryByPirceLow = this.soryByPirceLow.bind(this);
        this.soryByDiscount = this.soryByDiscount.bind(this);
        this.filterByPrice = this.filterByPrice.bind(this);
    }

    soryByPirceHigh() {   
        console.log("[Comp] soryByPirceHigh()")
        this.props.soryByPirceHigh();             
    }

    soryByPirceLow() {   
        console.log("[Comp] soryByPirceLow()")
        this.props.soryByPirceLow();     
        
    }

    soryByDiscount() {   
        console.log("[Comp] soryByDiscount()")
        this.props.soryByDiscount();             
    }

    filterByPrice() {   
        console.log("[Comp] filterByPrice()")
        this.props.filterByPrice();             
    }

    render() {
        return (
            <div className="my-5">
                <h1>Welcome to Comp1</h1>  
                {this.props.products[0].price}  <br />

                <button className="btn btn-primary" onClick={this.soryByPirceHigh}>soryByPirceHigh</button> <br /><br />
                <button className="btn btn-primary" onClick={this.soryByPirceLow}>soryByPirceLow</button> <br /><br />
                <button className="btn btn-primary" onClick={this.soryByDiscount}>soryByDiscount</button> <br /><br />
                <button className="btn btn-primary" onClick={this.filterByPrice}>filterByPrice</button> <br />

                         
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Comp);