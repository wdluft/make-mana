import React, { Component } from 'react';
import LandCount from './LandCount.js';
import ColorSection from './ColorSection.js';
import ResetButton from './ResetButton.js';
import MadeBy from './MadeBy.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      landsNeeded: 17,
      manaColors: [
        {
          color: "White",
          pipsNeeded: 0,
          sourcesNeeded: 0,
          landType: "Plains"
        },
        {
          color: "Blue",
          pipsNeeded: 0,
          sourcesNeeded: 0,
          landType: "Islands"
        },
        {
          color: "Black",
          pipsNeeded: 0,
          sourcesNeeded: 0,
          landType: "Swamps"
        },
        {
          color: "Red",
          pipsNeeded: 0,
          sourcesNeeded: 0,
          landType: "Mountains"
        },
        {
          color: "Green",
          pipsNeeded: 0,
          sourcesNeeded: 0,
          landType: "Forests"
        }
      ]
    }
    this.updateLandsNeeded = this.updateLandsNeeded.bind(this);
    this.updatePips = this.updatePips.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  updateLandsNeeded(e) {
    this.setState({landsNeeded: e.target.value});
  }

  updatePips(e) {
    let totalLands = this.state.landsNeeded;
    let numPips = Number(e.target.value);
    let color = e.target.name;
    let copy = [...this.state.manaColors];
    if(color === "White"){
      copy[0].pipsNeeded = numPips
    } else if(color === "Blue"){
      copy[1].pipsNeeded = numPips
    } else if(color === "Black"){
      copy[2].pipsNeeded = numPips
    } else if(color === "Red"){
      copy[3].pipsNeeded = numPips
    } else if(color === "Green"){
      copy[4].pipsNeeded = numPips
    }
    let totalPips = 0;
    for(let i = 0; i < copy.length; i++){
      totalPips += copy[i].pipsNeeded;
    }
    
    for(let i = 0; i < copy.length; i++){
      copy[i].sourcesNeeded = Math.round((copy[i].pipsNeeded / totalPips) * totalLands);
    }
    
    this.setState({
      manaColors: copy,
    })
  }
  
  handleResetClick() {
    this.setState({
      landsNeeded: 17,
      manaColors: [
        {
          color: "White",
          pipsNeeded: 0,
          sourcesNeeded: 0,
          landType: "Plains"
        },
        {
          color: "Blue",
          pipsNeeded: 0,
          sourcesNeeded: 0,
          landType: "Islands"
        },
        {
          color: "Black",
          pipsNeeded: 0,
          sourcesNeeded: 0,
          landType: "Swamps"
        },
        {
          color: "Red",
          pipsNeeded: 0,
          sourcesNeeded: 0,
          landType: "Mountains"
        },
        {
          color: "Green",
          pipsNeeded: 0,
          sourcesNeeded: 0,
          landType: "Forests"
        }
      ]
    });
  }  

  render() {
    return (
      <div className="container">
        <h1 id="app-title">Mana Base Calculator</h1>
        <div>
          <div className="land-info-section">
            <LandCount totalLandsNeeded={this.state.landsNeeded} handleChange={this.updateLandsNeeded}/>
            <ColorSection colors={this.state.manaColors} handleChange={this.updatePips}/>
            <ResetButton handleClick={this.handleResetClick}/>
          </div>
        </div>
        <MadeBy />
      </div>
    );
  }
}

export default App;
