import React from "react";
import BestsellerDesk from "./BestsellerDesk";
import BestsellerMob from "./BestsellerMob";

class Bestseller2 extends React.Component {
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
        <BestsellerDesk
          className='desktop-display'
          brand={this.state.data[4].brand}
          name={this.state.data[4].name}
          img={this.state.data[4].img}
          price={this.state.data[4].price}
          cat={"Premium"}
        />
        <BestsellerMob
          className='mobile-display'
          brand={this.state.data[0].brand}
          name={this.state.data[0].name}
          img={this.state.data[0].img}
          price={this.state.data[0].price}
          cat={"Economy"}
        />
      </div>
    );
  }
}

export default Bestseller2;
