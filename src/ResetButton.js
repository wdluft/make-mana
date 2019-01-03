import React, { Component } from 'react';


class ResetButton extends React.Component {
	constructor(props){
		super(props)
	}
	
	render(){
		return(
			<div id="btn-div">
				<button id="reset-btn" onClick={this.props.handleClick}>Reset</button>
			</div>
		)
	}
}

export default ResetButton;
