import React, { Component } from 'react';

export default class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
    this.inputStyle = {
      height: '18px',
      width: '200px',
      borderRadius: '2px'
    }
  }
  handleFire(){
    this.props.fire(this.state.input), event.target.value = '';
  }

  render() {
    return (
      <input
        style={this.inputStyle} 
        type='text' 
        placeholder='I yearn for your input'
        onChange={(event) => this.setState({input: event.target.value})}
        onKeyDown={event => event.key === "Enter" ? this.handleFire() : null }
      >
      </input>
    )
  }
};