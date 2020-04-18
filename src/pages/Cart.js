import React, { Component } from 'react';
import { connect } from 'react-redux';
import { REMOVE_FROM_CART, ADD_TO_CART_QUANTITY, REMOVE_FROM_CARTQUANTITY } from "../constants";

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToCartQuantity: function (vo) {
        dispatch({ type: ADD_TO_CART_QUANTITY, vo });
      },
      removeFromCart: function (vo) {
        dispatch({ type: REMOVE_FROM_CART, vo });
      },
      removeFromCartQuantity: function (vo) {
        dispatch({ type: REMOVE_FROM_CARTQUANTITY, vo });
      }
    };
  }

class Cart extends Component {

    constructor() {
        super();
        this.addToCartQuantity = this.addToCartQuantity.bind(this);
        this.removeFromCartQuantity = this.removeFromCartQuantity.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
      }
    
      addToCartQuantity() {
        console.log("[Cart] addToCartQuantity()");        
        this.props.addToCartQuantity(this.props.vo);
      }

      removeFromCartQuantity() {
        console.log("[Cart] removeFromCartQuantity()");
        if(this.props.vo.quantity > 1) {            
            this.props.removeFromCartQuantity(this.props.vo);
        }        
      }

      removeFromCart() {
        console.log("[Cart] removeFromCart()");
        this.props.removeFromCart(this.props.vo);
      }
      
    render() {
        return (
            <article className="cart d-flex border">
                      <img src={this.props.vo.image}  alt={this.props.vo.name} className="my-3"/>
                      <div className="d-flex">
                        <div className="align-self-center">
                          <h6>{this.props.vo.name}</h6>
                          <div className="d-flex justify-content-between small">
                            <span>₹ {this.props.vo.price.actual}</span>
                            <span className="text-muted">₹ {this.props.vo.price.display}</span>
                            <span className="text-success">{this.props.vo.discount}% off</span>
                          </div>
                          <div className="d-flex justify-content-between small">
                            <button onClick={this.removeFromCartQuantity} className="btn btn-sm btn-primary rounded-circle"><i className="fa fa-minus" /></button>
                            {this.props.vo.quantity} 
                            <button onClick={this.addToCartQuantity} className="btn btn-sm btn-primary rounded-circle"><i className="fa fa-plus" /></button>
                          </div>
                          <div>
                            <button onClick={this.removeFromCart} className="btn btn-sm btn-secondary rounded-pill px-3 my-2">Remove</button>
                          </div>
                        </div>
                      </div>
                    </article>  
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);