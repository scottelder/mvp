import React, {Component} from 'react';
import Image from './image.jsx';
import Input from './input.jsx';
import List from './list.jsx'
import axios from 'axios';

class ListEntry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: [],
      candidates: []
    }
  }
  fire(input) {
    axios.post(`/search`, {data: input, owner: this.props.name})
      .then((result) => {
        this.setState({results: [result.data]});
        console.log('Service guarantees citizenship!');
      })
      .catch(console.log);
  }
  voterator(event) {
    event.preventDefault();
    axios.post(`/vote/${this.props.name}`, {data: event.target.title})
      .then(result => console.log(result))
      .catch(console.log)
  }
  componentDidMount() {
    if (this.props.primary) {
      axios.get(`/voted/${this.props.name}`)
        .then(data => this.setState({candidates: data.data}))
        .catch(console.log);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.results !== this.state.results) {
      axios.get(`/voted/${this.props.name}`)
      .then(data => this.setState({candidates: data.data}))
      .catch(console.log);
    }
    this.divStyle = {
      display: 'inline-block',
      paddingTop: '4px',
      paddingLeft: '2px',
      paddingRight: '2px',
      paddingBottom: '4px',
      fontFamily: `'Roboto', sans-serif`,
    }
    this.priStyle = {
     paddingTop: '4px',
     paddingLeft: '2px',
     paddingRight: '2px',
     paddingBottom: '4px',
     fontFamily: `'Roboto', sans-serif`,
     color: '#c0b283'
    }
  }
  render() {
    return( 
      <div style={this.props.primary ? this.priStyle : this.divStyle}>
        {this.props.picture 
          ? <Image 
              src={this.props.picture} 
              alt={this.props.actor} 
              title={this.props.actor} 
              voterator={this.voterator.bind(this)}
            />
          : this.props.name + '\n'}
        {this.props.primary 
          ? <Input fire={this.fire.bind(this)} /> 
          : null
        }
        {this.state.results ? <List data={this.state.results}/> : null}
        {this.state.candidates.length ? <List data={this.state.candidates}/> : null}
      </div>
    )
  }
};

export default ListEntry;