import React from "react";
import StockButton from "./StockButton";
import CartButton from "./CartButton";
import Oelogo from "../assets/oelogo.png";
import Autoexpress from "../assets/autoexpress.png";
import Tire from "../assets/tire.png";

class Bestseller extends React.Component {
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
      <div className='bestsellers-container'>
        <div className='desktop-display col'>
          <div className='premium-bestseller'>
            <div className='tag'>{this.props.cat1} Bestseller</div>
            <div className='premium-info'>
              <div className='premium-img'>
                <div className='tire-img'></div>
                <div className='auto-img'>
                  <img src={Autoexpress} alt='auto express logo' />
                </div>
              </div>

              <div className='premium-text'>
                <h2>
                  {this.props.brand1} {this.props.name1} 5
                </h2>
                <div className='pb-stock-info'>
                  <div className='oelogo'>
                    <img src={Oelogo} />
                  </div>
                  <div className='product-details'>
                    <div className='pd-item'>205/55 R16 H SUV</div>
                    <div className='pd-item'>Stock ✅</div>
                    <div className='pd-item'>Price ₪{this.props.price1}</div>
                    <div className='pd-item'>Total ₪1,360</div>
                  </div>
                </div>

                <div className='button-container'>
                  <StockButton
                    num={this.state.num}
                    add={this.addNum}
                    sub={this.subNum}
                  />
                  <CartButton />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='desktop-display col'>
          <div className='economy-bestseller'>
            <div className='tag'>{this.props.cat2} Bestseller</div>
            <div className='premium-info'>
              <div className='premium-img'>
                <div className='tire-img'></div>
                <div className='auto-img'>
                  <img src={Autoexpress} alt='auto express logo' />
                </div>
              </div>

              <div className='premium-text'>
                <h2>
                  {this.props.brand2} {this.props.name2} 5
                </h2>
                <div className='pb-stock-info'>
                  <div className='oelogo'>
                    <img src={Oelogo} />
                  </div>
                  <div className='product-details'>
                    <div className='pd-item'>205/55 R16 H SUV</div>
                    <div className='pd-item'>Stock ✅</div>
                    <div className='pd-item'>Price ₪{this.props.price2}</div>
                    <div className='pd-item'>Total ₪1,360</div>
                  </div>
                </div>

                <div className='button-container'>
                  <StockButton
                    num={this.state.num}
                    add={this.addNum}
                    sub={this.subNum}
                  />
                  <CartButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bestseller;
