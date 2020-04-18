import React, { Component } from 'react';

class FiltersSidebar extends Component {
    render() {
        return (
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
              <div className="sidebar-sticky p-4">
                <strong>Filters</strong>
                <div className="my-2">Price Range</div>
                <div>
                  <input maxLength={5} type="text" style={{width: '50px'}} defaultValue={10000} />
                  to
                  <input maxLength={6} type="text" style={{width: '50px'}} defaultValue={50000} />
                </div>
                <button className="btn btn-sm btn-primary rounded-pill px-3 mt-2">Apply</button>
              </div>
            </nav>
        );
    }
}

export default FiltersSidebar;