import React from "react";

class LoadButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='load'>
        <button className='load-btn'>Load More Results</button>
      </div>
    );
  }
}

export default LoadButton;
