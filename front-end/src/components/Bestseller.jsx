import React from "react";
import Oelogo from "../assets/oelogo.png";
import Autoexpress from "../assets/autoexpress.png";

class Bestseller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='premium-bestseller'>
        <div className='tag'>Premium Bestseller</div>
        <div className='premium-info'>
          <div className='premium-img'>
            <div className='tire-img'></div>
            <div className='auto-img'><img src={Autoexpress} alt="auto express logo"/></div>
          </div>
          <div className='premium-text'>
            <h2>Continental - Contiecontact 5</h2>
            <div className='pb-stock-info'>
              <div className='oelogo'><img src={Oelogo}/></div>
              <div className="product-details">
                <div className="pd-item">205/55 R16 H SUV</div>
                <div className="pd-item">Stock ✅</div>
                <div className="pd-item">Price ₪340</div>
                <div className="pd-item">Total ₪1,360</div>
              </div>
            </div>
            <div className='button-container'>
              <div className='stock-buttons'>
                <button className='stock-btn'>—</button>4
                <button className='stock-btn'>+</button>
              </div>
              <button className='cart-btn premium-cart-btn'>
                <span class='premium-cart-btn-text'>Add to cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bestseller;
