import React, {Fragment, Component} from 'react';

export default class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }

  render() {
    return (
      <input 
      type='text' 
      placeholder='I yearn for your input'
      onChange={(event) => this.setState({input: event.target.value})}
      onKeyDown={(event) => event.key === "Enter" ? this.props.fire(this.state.input) : null }
      >
      </input>
    )
  }
};