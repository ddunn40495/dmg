import React from "react";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='products'>
        <ul className='product-info'>
          <li className='product-name'>Continental PremiumContact™ 6</li>
          <li>
            {" "}
            <div className='oelogo'></div>
          </li>
          <li>195/55 R15 85V SUV</li>
          <li>
            Stock <div className='stock-img'></div>
          </li>
          <li>Price ₪340</li>
          <li className='stock-buttons'>
            <button className='stock-btn'>-</button>4
            <button className='stock-btn'>+</button>
          </li>
          <li>Total ₪1,360</li>
          <li>
            <button className='cart-btn product-cart-btn'>
              <span class='cart-btn-text'>Add to cart</span>
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Item;
