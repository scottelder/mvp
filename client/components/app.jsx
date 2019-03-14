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
    this.server = '127.0.0.1';
  }
  voterator(event) {
    event.preventDefault();
    console.log('Service guarantess citizenship!');
  }
  fire(input) {
    console.log(input, 'I\'m doing my part!')
    Axios.post(`/search`, {data: input})
      .then((result) => {
        this.setState({results: result.data});
        console.log(result.data, 'Come on you apes! You want to live forever?');
      })
      .catch((err) => console.log(err, `If you don't do your job, I'll shoot you myself.`));
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
        <List 
          data={this.state.testResults}
        />
      </Fragment>
    )
  }
};