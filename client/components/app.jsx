import React, {Fragment, Component} from 'react';
import List from './list.jsx'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      HRATX39: ['Trevor Smith','Laura Robertson','Noah Spann','Mike Janes','James Boyett','Gee Li','Sarah Spear','Remington Davis','Scott Elder','Hannah Kang','Tony Burroughs','Dan Kaiser','Linden Kueck','Nick Fredman','Zubair Desai','Justin Baize','Nik Mentakis','James Dempsey','Sean Meyer','Matt Brannon'],
    }
  }
  render() {
    return (
      <Fragment>
        <List 
          data={this.state.HRATX39} 
          primary={true}
          results={this.state.results}
        />
      </Fragment>
    )
  }
};