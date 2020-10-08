import React from "react";
import "./App.css";
import Navbar from "../src/components/Navbar";
import Sort from "../src/components/Sort";
import Products from "./containers/Products";
import tires from "./data/tires";
let baseURL = "http://localhost:3004";

console.log("current base URL:", baseURL);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: tires,
    };
  }
  componentDidMount() {
    console.log(this.state.data);
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className='container'>
          <Sort />
          <hr/>
          <Products />
        </div>
      </div>
    );
  }
}

export default App;
