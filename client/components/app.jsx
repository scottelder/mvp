import React, {Fragment, Component} from 'react';
import List from './list.jsx'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      HRATX39: ['Trevor Smith','Laura Robertson','Noah Spann','Mike Janes','James Boyett','Gee Li','Sarah Spear','Remington Davis','Scott Elder','Hannah Kang','Tony Burroughs','Dan Kaiser','Linden Kueck','Nick Fredman','Zubair Desai','Justin Baize','Nik Mentakis','James Dempsey','Sean Meyer','Matt Brannon'],
    }
    this.parentStyle = {
      margin: '36px',
      boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,.4)'
    }
  }
  render() {
    return (
      <div style={this.parentStyle}>
        <List 
          data={this.state.HRATX39}
          primary={true}
          results={this.state.results}
        />
      </div>
    )
  }
};