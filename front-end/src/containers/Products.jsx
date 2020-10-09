import React from "react";
import Item from "../components/Item";
import LoadButton from "../components/LoadButton";
import tires from "../data/tires";

import Bestseller from "../components/Bestseller";

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
      <div className='container'>
        <div className='row'>
          <Bestseller
            brand1={this.state.data[4].brand}
            name1={this.state.data[4].name}
            img1={this.state.data[4].img}
            price1={this.state.data[4].price}
            cat1={"Premium"}
            brand2={this.state.data[0].brand}
            name2={this.state.data[0].name}
            img2={this.state.data[0].img}
            price2={this.state.data[0].price}
            cat2={"Economy"}
          />
        </div>
        <div className='item-container '>
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
