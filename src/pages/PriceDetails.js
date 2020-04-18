import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PriceItem from './PriceItem';

function mapStateToProps(state) {
    return {
        carts: state.carts
    };
  }

function mapDispatchToProps(dispatch) {
    return {
    };
}

class PriceDetails extends Component {

    render() {
        let totalPrice = 0;
        let totalDiscount = 0;
        return (
            <section className="container-fluid w-100 border mb-5">             
                      <div className="row">
                        <h4 className="col-12 border-bottom p-3 text-secondary">PRICE DETAILS</h4>

                        {
                          this.props.carts.map((vo, index) => {
                            totalPrice += (vo.price.actual * vo.quantity); 
                            totalDiscount += ((vo.price.display - vo.price.actual) * vo.quantity) ;
                            return (<PriceItem vo={vo} key={index} /> )
                          })
                        }                        
                        
                        <div className="col-6 col-md-3 text-right py-1"> Total Discount Availed:</div>
                    <div className="col-6 col-md-9  py-1">₹ {totalDiscount}</div>
                        <div className="col-6 col-md-3 border-bottom text-right  py-1"><strong>Net Payable Amount:</strong></div>
                    <div className="col-6 col-md-9 border-bottom  py-1 text-danger"><strong>₹ {totalPrice}</strong></div>
                        
                      </div>           
                    </section>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PriceDetails));