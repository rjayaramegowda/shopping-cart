import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

function mapStateToProps(state) {
    return {
        carts: state.carts
    };
}

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark fixed-top bg-primary flex-md-nowrap p-0 px-2 shadow">
            <Link className="navbar-brand col mr-0" to="/"><i className="fa fa-star text-warning" style={{fontSize: '36px'}} /></Link>
            <span />
            <Link className="btn btn-primary" to="/search"><i className="fa fa-search" /></Link>
            <Link className="btn btn-primary" to="/mycart"><i className="fa fa-shopping-cart" /> <span className={this.props.carts.length > 0 ? "badge badge-danger" : "d-none"}>{this.props.carts.length}</span>
            </Link>
          </nav>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Nav));