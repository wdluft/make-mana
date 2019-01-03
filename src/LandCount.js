import React, { Component } from 'react';

class LandCount extends Component {
  render() {
    return (
      <div className="lands-needed-section input-section">
        <label for="total-lands-needed">Lands Needed: </label>
        <input id="total-lands-needed" className="num-input" type="number" min="0" value={this.props.totalLandsNeeded} onChange={this.props.handleChange} />
      </div>
    );
  }
}

export default LandCount;
