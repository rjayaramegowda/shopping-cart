import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FILTER_BY_PRICE } from "../constants";

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {      
        filterByPrice: function (data) {
          dispatch({type: FILTER_BY_PRICE, data })
        }
  };
}


class FiltersSidebar extends Component {
  state = { low: 100, high: 50000 };

  constructor() {
    super();    
    this.filterByPrice = this.filterByPrice.bind(this);
    this.minTxtCHange = this.minTxtCHange.bind(this);
    this.maxTxtCHange = this.maxTxtCHange.bind(this);
}

filterByPrice() {   
    console.log("[FiltersSidebar] filterByPrice()")
    this.props.filterByPrice(this.state);             
}

minTxtCHange(e) {
  this.setState({low: Number(e.target.value)})
}

maxTxtCHange(e) {
  this.setState({high: Number(e.target.value)})
}

  render() {
    return (
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky p-4">
        <strong>Filters</strong>
        <div className="my-2">Price Range</div>
        <div>
          <input value={this.state.low} onChange={this.minTxtCHange} className="mr-2"  type="number" style={{width: '70px'}} />
          to
          <input value={this.state.high} onChange={this.maxTxtCHange} className="ml-2"  type="number" style={{width: '70px'}} />
        </div>
        <button onClick={this.filterByPrice} className="btn btn-sm btn-primary rounded-pill px-3 mt-2">Apply</button>
      </div>
    </nav>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(FiltersSidebar));