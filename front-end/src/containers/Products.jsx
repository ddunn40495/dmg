import React from "react";
import Bestseller from "../components/Bestseller";
import Item from "../components/Item";
import LoadButton from "../components/LoadButton";
import tires from "../data/tires";

import "../App.css";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: tires,
    };
  }

  componentDidMount() {
    console.log(tires);
    this.setState({
      data: tires,
    });
  }
  render() {
    return (
      <div className='products-container'>
        <div className='bestsellers-container'>
          <div className='premium-bestseller'>
            <Bestseller
              brand={this.state.data[4].brand}
              name={this.state.data[4].name}
              img={this.state.data[4].img}
              price={this.state.data[4].price}
              cat={"Premium"}
            />
          </div>
          <div className='bestsellers-container'>
            <Bestseller
              brand={this.state.data[0].brand}
              name={this.state.data[0].name}
              img={this.state.data[0].img}
              price={this.state.data[0].price}
              cat={"Economy"}
            />
          </div>
        </div>
        <div className='item-container'>
          <Item
            brand={this.state.data[1].brand}
            name={this.state.data[1].name}
            img={this.state.data[1].img}
            price={this.state.data[1].price}
          />
          <Item
            brand={this.state.data[2].brand}
            name={this.state.data[2].name}
            img={this.state.data[2].img}
            price={this.state.data[2].price}
          />
          <Item
            brand={this.state.data[3].brand}
            name={this.state.data[3].name}
            img={this.state.data[3].img}
            price={this.state.data[3].price}
          />
        </div>
        <LoadButton />
      </div>
    );
  }
}

export default Products;
