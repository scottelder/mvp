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
  render() {
    return (
      <Fragment>
        Ayy yo, world.
        <List data={this.state.testData} voterator={this.voterator.bind(this)} />
      </Fragment>
    )
  }
};