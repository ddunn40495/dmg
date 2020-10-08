import React from "react";
import StockButton from "./StockButton";
import CartButton from "./CartButton";

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
        <ul className='product-info'>
          <li className='product-name'>
            {this.props.brand} {this.props.name}
          </li>
          <li>
            {" "}
            <div className='oelogo'></div>
          </li>
          <li>195/55 R15 85V SUV</li>
          <li>
            Stock <div className='stock-img'></div>
          </li>
          <li>Price ₪{this.props.price}</li>
          <StockButton
            num={this.state.num}
            add={this.addNum}
            sub={this.subNum}
          />
          <li>Total ₪1,360</li>
          <li>
            <CartButton />
          </li>
        </ul>
      </div>
    );
  }
}

export default Item;
