import React from "react";

class StockButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='stock-buttons'>
        <button onClick={this.props.sub} className='stock-btn'>
          —
        </button>
        <p className='number'>{this.props.num}</p>
        <button onClick={this.props.add} className='stock-btn'>
          +
        </button>
      </div>
    );
  }
}

export default StockButton;
