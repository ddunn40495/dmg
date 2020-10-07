import React from "react";

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
            <div className='auto-img'></div>
          </div>
          <div className='premium-text'>
            <h2>Continental - Contiecontact 5</h2>
            <div className='pb-stock-info'>
              <div className='oelogo'></div>
              205/55 R16 H SUV Stock <div className='stock-img'></div>
              Price ₪340 Total ₪1,360
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
