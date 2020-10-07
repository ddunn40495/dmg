import React from "react";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='navbar'>
        <div className='nav-left filter'></div>
        <div className='nav-middle search'>
          <form className='search-form'>
            <input
              type='search'
              placeholder='Search'
              className='search-input'
            ></input>
            <input type='submit' value='🔍' className='search-btn'></input>
          </form>
        </div>
        <div className='nav-right'>
          <div className='account'>
            <br />
            <span className='nav-text'>Account</span>
          </div>
          <div className='orders'>
            <br />
            <span className='nav-text'>Orders</span>
          </div>
          <div className='shopping-cart'>
            <br />
            <span className='nav-text'>Cart</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
