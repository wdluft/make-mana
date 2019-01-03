import React, { Component } from 'react';

class ColorSection extends React.Component {
	constructor(props){
		super(props);
	}
	
	render(){
		const manaColors = this.props.colors.map((c, index) => (
			<Color key={c.id} {...c} handleChange={this.props.handleChange}/>
		))
		
		return (
			<div>
				{manaColors}
			</div>
		)
	}
}

class Color extends React.Component {
	render(){
		const {color, pipsNeeded, sourcesNeeded, landType} = this.props;

		return (
			<div className={"mana-section " + color + "-section input-section"}>
				<label for={color}>Pips: </label>
				<input id={color} className="num-input" name={color} type="number" min="0" value={pipsNeeded} onChange={this.props.handleChange}/>
				<p>{landType} Needed: {sourcesNeeded}</p>
			</div>
		)
	}
}

export default ColorSection;