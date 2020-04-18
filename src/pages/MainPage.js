import React, { Component } from 'react';

import FiltersSidebar from './FiltersSidebar';
import SortByButtons from './SortByButtons';
import ProductList from './ProductList';

class MainPage extends Component {
    render() {
        return (
            <>
        <div className="container-fluid">
          <div className="row">
            <FiltersSidebar />
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10">
              <SortByButtons />
              <ProductList />
            </main>
          </div>
        </div>
      
            </>
        );
    }
}

export default MainPage;