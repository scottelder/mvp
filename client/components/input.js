import React, {Fragment, Component} from 'react';

export default class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
    this.inputStyle = {
      height: '18px',
      widht: '450px',
      borderRadius: '2px'
    }
  }

  render() {
    return (
      <input
        style={this.inputStyle} 
        type='text' 
        placeholder='I yearn for your input'
        onChange={(event) => this.setState({input: event.target.value})}
        // onKeyDown={(event) => console.log(event.key)}
        onKeyDown={event => event.key === "Enter" ? (this.props.fire(this.state.input), event.target.value = null ): null }
      >
      </input>
    )
  }
};