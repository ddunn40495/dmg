import React from "react";
import StockButton from "./StockButton";
import CartButton from "./CartButton";
import Oelogo from "../assets/oelogo.png";


class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
    };
  }
  addNum = () => {
    const upOne = 1;
    this.setState({
      num: this.state.num + upOne,
    });
  };
  subNum = () => {
    const downOne = 1;
    this.setState({
      num: this.state.num - downOne,
    });
  };
  componentDidMount() {
    console.log(this.state.num);
  }
  render() {
    return (
      <div className='products'>

        <div id='desktop-display'>
          <div className='product-info-container'>
            <div className='product-name product-item mobile1'>{this.props.brand} {this.props.name} 6</div>
            <div className='oelogo mobile1'><img src={Oelogo}/></div>
            <div className='product-type product-item mobile2'>195/55 R15 85V SUV</div>
            <div className="product-stock product-item mobile1">
              Stock <div className='stock-img'></div>
            </div>
            <div className="product-price product-item mobile2">Price ₪{this.props.price}</div>
               <StockButton
            num={this.state.num}
            add={this.addNum}
            sub={this.subNum}
          />
            <div className="product-total product-item mobile2">Total ₪1,360</div>
            <div className="product-cart product-item mobile2">
                        <CartButton />

            </div>
          </div>
        </div>

        <div id='mobile-display'>
          <div className='product-info-container'>
            <div className="mobile1">
              <div className='product-name product-item'>Continental PremiumContact™ 6</div>
              <div className="product-row">
                <div className='oelogo product-item mobile1'><img src={Oelogo}/></div>
                <div className="product-stock product-item">
                  Stock <div className='stock-img'></div>
                </div>
              </div>
              <div className='stock-buttons product-stock-buttons product-item'>
                <button className='stock-btn'>-</button>4
                <button className='stock-btn'>+</button>
              </div>
            </div>
            <div className="mobile2">
              <div className='product-type product-item'>195/55 R15 85V SUV</div>
              <div className="product-row">
                <div className="product-price product-item">Price ₪340</div>
                <div className="product-total product-item">Total ₪1,360</div>
              </div>
              <div className="product-cart product-item">
                <button className='cart-btn product-cart-btn'>
                  <span className='cart-btn-text'>Add to cart</span>
                </button>
              </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
