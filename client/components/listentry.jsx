import React, {Component, Fragment} from 'react';
import Image from './image.jsx';
import Input from './input.jsx';
import List from './list.jsx'
import Axios from 'axios';

class ListEntry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: [],
      candidates: []
    }
   this.divStyle = {
     display: 'inline-block',
     paddingTop: '4px',
     paddingLeft: '2px',
     paddingRight: '2px',
     paddingBottom: '4px'
   }
   this.priStyle = {
    paddingTop: '4px',
    paddingLeft: '2px',
    paddingRight: '2px',
    paddingBottom: '4px'
   }
  }
  fire(input) {
    Axios.post(`/search`, {data: input, owner: this.props.name})
      .then((result) => {
        this.setState({results: [result.data]});
        console.log('Service guarantees citizenship!');
      })
      .catch((err) => console.log(err, `If you don't do your job, I'll shoot you myself.`));
  }
  voterator(event) {
    event.preventDefault();
    Axios.post(`/vote/${this.props.name}`, {data: event.target.title})
      .then(result => console.log(result))
      .catch(err => console.log(err))
  }
  componentDidMount() {
    if (this.props.primary) {
      Axios.get(`/voted/${this.props.name}`)
        .then(data => this.setState({candidates: data.data}))
        .catch(err => console.log(err, `Denise Richard's acting`))
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.results !== this.state.results) {
      Axios.get(`/voted/${this.props.name}`)
      .then(data => this.setState({candidates: data.data}))
      .catch(err => console.log(err, `Denise Richard's acting`))
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