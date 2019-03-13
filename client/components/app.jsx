import React, {Fragment, Component} from 'react';
import List from './list.jsx'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      testData: ['Trevor Smith']
    }
  }
  voterator(event) {
    event.preventDefault();
    console.log('Service guarantess citizenship!');
  }
  fire(input) {
    console.log(input, 'I\'m doing my part!')
  }
  render() {
    return (
      <Fragment>
        Ayy yo, world.
        <List data={this.state.testData} voterator={this.voterator.bind(this)} fire={this.fire.bind(this)}/>
      </Fragment>
    )
  }
};