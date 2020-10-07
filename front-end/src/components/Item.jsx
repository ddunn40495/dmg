import React from "react";
import Oelogo from "../assets/oelogo.png";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='products'>
        <div className='product-info-container'>
          <div className='product-name product-item'>Continental PremiumContact™ 6</div>
          <div className='oelogo'><img src={Oelogo}/></div>
          <div className='product-type product-item'>195/55 R15 85V SUV</div>
          <div className="product-stock product-item">
            Stock <div className='stock-img'></div>
          </div>
          <div className="product-price product-item">Price ₪340</div>
          <div className='stock-buttons produc-stock-buttons product-item'>
            <button className='stock-btn'>-</button>4
            <button className='stock-btn'>+</button>
          </div>
          <div className="product-total product-item">Total ₪1,360</div>
          <div className="product-cart product-item">
            <button className='cart-btn product-cart-btn'>
              <span class='cart-btn-text'>Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
