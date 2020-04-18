import React, { Component } from 'react';

class PriceItem extends Component {
    render() {
    return (
        <>
        <div className="col-6 col-md-3 text-right py-1">{this.props.vo.name} ({this.props.vo.quantity} item) : </div>
                        <div className="col-6 col-md-9 py-1">₹ {(this.props.vo.price.actual * this.props.vo.quantity) }</div>

                        <div className="col-6 col-md-3 border-bottom text-right  py-1">Discount Applied: </div>
                        <div className="col-6 col-md-9 border-bottom  py-1">₹ { (this.props.vo.price.display - this.props.vo.price.actual) * this.props.vo.quantity }</div>
            
        </>
    );
}
}

export default PriceItem;

