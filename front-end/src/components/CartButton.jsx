import React from "react";

class CartButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <button className='cart-btn premium-cart-btn'>
        <span class='premium-cart-btn-text'>Add to cart</span>
      </button>
    );
  }
}

export default CartButton;
