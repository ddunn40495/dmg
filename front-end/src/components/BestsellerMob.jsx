import React from "react";
import StockButton from "./StockButton";
import CartButton from "./CartButton";
import Oelogo from "../assets/oelogo.png";
import Autoexpress from "../assets/autoexpress.png";

class BestsellerMob extends React.Component {
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
      <div className='premium-bestseller'>
        <div className='tag'>{this.props.cat} Bestseller</div>

        <div className='premium-info'>
          <div className='bestseller-row1'>
            <div className='premium-img'>
              <div className='tire-img'></div>
              <div className='auto-img'>
                <img src={Autoexpress} alt='auto express logo' />
              </div>
            </div>

            <div className='premium-text'>
              <h2>
                {this.props.brand} - {this.props.name}
              </h2>
              <div className='pb-stock-info'>
                <div className='row1'>
                  <img src={Oelogo} className='oelogo' />
                  205/55 R16 H SUV
                </div>

                <div className='row2'>
                  <div className='pd-item'>
                    Stock ✅ Price ₪{this.props.price} Total ₪1,360
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='bestseller-row2 button-container'>
            <StockButton
              num={this.state.num}
              add={this.addNum}
              sub={this.subNum}
            />
            <CartButton />
          </div>
        </div>
      </div>
    );
  }
}

export default BestsellerMob;
