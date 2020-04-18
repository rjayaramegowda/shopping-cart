import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from './Product';

function mapStateToProps(state) {
    return {
        products: state.products
    };
}

class ProductList extends Component {
    render() {
        return (
            <section className="row">   
            {
                this.props.products.map((item, index) => {
                    return (<Product vo={item} key={index} />)
                })
            }             
              </section>
        );
    }
}

export default connect(mapStateToProps)(ProductList);