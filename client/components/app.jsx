import React, {Fragment, Component} from 'react';
import List from './list.jsx'
import Axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      testData: ['Trevor Smith'],
      testResults: ['I\'m a result!']
    }
  }
  voterator(event) {
    event.preventDefault();
    console.log('Service guarantess citizenship!');
  }
  fire(input) {
    console.log(input, 'I\'m doing my part!')
    //Axios.get('someshit from imdb via the server')
  }
  render() {
    return (
      <Fragment>
        Ayy yo, world.
        <List 
          data={this.state.testData} 
          voterator={this.voterator.bind(this)} 
          fire={this.fire.bind(this)}
          primary={true}
        />
        <List data={this.state.testResults}/>
      </Fragment>
    )
  }
};