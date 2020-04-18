import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles.scss";

import Nav from './pages/Nav';
import MyCart from './pages/MyCart';
import MainPage from './pages/MainPage'


// Pages <Route exact path={["/", "/index.html"]} component={MainPage} />

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
        <Nav />
        <Route exact path={["/", "/index.html"]} component={MainPage} />        
        <Route exact path={"/mycart"} component={MyCart} />        
        </div>
      </Router>

    );
  }
}

export default App;