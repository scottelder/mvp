import React, {Fragment, Component} from 'react';
import List from './list.jsx'
import Axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      HRATX39: ['Trevor Smith','Laura Robertson','Noah Spann','Mike Janes','James Boyett','Gee Li','Sarah Spear','Remington Davis','Scott Elder','Hannah Kang','Tony Burroughs','Dan Kaiser','Linden Kueck','Nick Fredman','Zubair Desai','Justin Baize','Nik Mentakis','James Dempsey','Sean Meyer','Matt Brannon'],
      results: []
    }
    this.server = '127.0.0.1';
  }
  voterator(event) {
    event.preventDefault();
    console.log('Service guarantess citizenship!');
  }
  render() {
    return (
      <Fragment>
        <List 
          data={this.state.HRATX39} 
          voterator={this.voterator.bind(this)} 
          primary={true}
          results={this.state.results}
        />
      </Fragment>
    )
  }
};