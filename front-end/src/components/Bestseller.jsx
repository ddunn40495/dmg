import React from "react";
import StockButton from "./StockButton";
import CartButton from "./CartButton";

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
      <div className='premium-bestseller'>
        <div className='tag'>{this.props.cat} Bestseller</div>
        <div className='premium-info'>
          <div className='premium-img'>
            <div className='tire-img'></div>
            <div className='auto-img'></div>
          </div>
          <div className='premium-text'>
            <h2>
              {this.props.brand} - {this.props.name}
            </h2>
            <div className='pb-stock-info'>
              <div className='oelogo'></div>
              205/55 R16 H SUV Stock <div className='stock-img'></div>
              Price ₪{this.props.price} Total ₪1,360
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
    );
  }
}

export default Bestseller;
