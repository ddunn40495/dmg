import React from "react";

class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='row'>
        <h1>Recommended Products</h1>
          <div className='col-10 selected-filters'>
            Selected filters: <div className='chip'>Continental <button className="close-btn">x</button></div>
          </div>
          <div className=' col-2 sort'>
            Sort by:{" "}
            <div className='chip'>
              <label for='popularity'>Popularity</label>
              <select name='popularity'>
                <option value='popularity'></option>
              </select>
            </div>
          </div>
        </div>
    );
  }
}

export default Sort;
