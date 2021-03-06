import React from "react";
import Options from "../assets/options-sharp.png";
import Account from "../assets/account.png";
import Orders from "../assets/order.png";
import Cart from "../assets/shoppingcart.png";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='navbar'>
        <div className='nav-left filter'>
          <img src={Options} alt="filter img"/>
        </div>
        <div className="nav-middle search">
          <form className='search-form'>
            <input
              type='search'
              placeholder='Search'
              className='search-input'
            ></input>
            <input type='submit' value='🔍' className='search-btn'></input>
          </form>
        </div>
        <div className="nav-right">
          <div className='nav-right-items account'>
            <img src={Account} alt="account img"/>
            <br />
            <span className='nav-text'>Account</span>
          </div>
          <div className='nav-right-items orders'>
            <img src={Orders} alt="order img"/>
            <br />
            <span className='nav-text'>Orders</span>
          </div>
          <div className='nav-right-items shopping-cart'>
            <img src={Cart} alt="shopping cart img"/>
            <br />
            <span className='nav-text'>Cart</span>
          </div>
        </div>
        </div>
    );
  }
}

export default Navbar;
