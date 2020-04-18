import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Cart from './Cart';
import PriceDetails from './PriceDetails';

class MyCart extends Component {
    render() {
        return (
            <div className="container-fluid">
              <div className="row">
                <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                  <div className="sidebar-sticky p-4" />
                </nav>
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10">
                      <div className="row">
                        <h3 className="my-4">My Cart</h3>
                        {
                          this.props.carts.map((vo, index) => {
                            return (<Cart vo={vo} key={index} /> )
                          })
                        }
                        
                        <PriceDetails />                    
                      </div>
                    </main>
                  </div>
              <div>
              </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
      carts: state.carts
  };
}

export default withRouter(connect(mapStateToProps)(MyCart));