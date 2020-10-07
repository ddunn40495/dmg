import React from "react";
import Bestseller from "../components/Bestseller";
import Item from "../components/Item";
import LoadButton from "../components/LoadButton";
import "../App.css";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='products-container'>
        <div className='bestsellers-container'>
          <Bestseller />
          <Bestseller />
        </div>
        <div className='item-container'>
          <Item />
          <Item />
          <Item />
        </div>
        <LoadButton />
      </div>
    );
  }
}

export default Products;
