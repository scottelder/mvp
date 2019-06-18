import React, {Fragment, Component} from 'react';
import Axios from 'axios';

export class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  submit(data) {
    Axios.post('/login', data)
      .then(() => console.log('Successful login post'))
      .catch((err) => console.log(err))
  }
  render() {
    return (
      <div>
        Login!
        <input 
          placeholder='Username'
          onChange={ event => this.setState({username: event.value}) }
          onKeyDown={ event => event.key === "Enter" ? doThing : null }
        />
        <input 
        placeholder='Password'
        onChange={ event => this.setState({password: event.value}) }
        onKeyDown={ event => event.key === "Enter" ? doThing : null }
        />
        <a>Sign Up!</a>
      </div>
    )
  }
}