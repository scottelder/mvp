import React, {Component, Fragment} from 'react';
import Image from './image.jsx';
import Input from './input.jsx';
import List from './list.jsx'
import Axios from 'axios';

class ListEntry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: []
    }
    this.picStyle = {
     position: 'relative',
     maxHeight: '200px',
     maxWidth: '100px',
     boxShadow: '1px 1px 10px 2px #242121'
   }
  }
  fire(input) {
    Axios.post(`/search`, {data: input, owner: this.props.name})
      .then((result) => {
        this.setState({results: [result.data]});
        console.log(result.data, 'Come on you apes! You want to live forever?');
      })
      .catch((err) => console.log(err, `If you don't do your job, I'll shoot you myself.`));
  }
  voterator(event) {
    event.preventDefault();
    Axios.post('/vote', {data: event.target.title})
      .then(result => console.log(result))
      .catch(err => console.log(err))
  }
  render() {
    return( 
      <div>
        {this.props.picture 
        ? <Image 
            src={this.props.picture} 
            alt={this.props.name} 
            title={this.props.name} 
            style={this.picStyle}
            voterator={this.voterator.bind(this)}
          />
        : this.props.name + '\n'}
        {this.props.primary 
        ? <Input fire={this.fire.bind(this)} /> 
        : null
        }
        {this.state.results ? <List data={this.state.results}/> : null}
      </div>
    )
  }
};

export default ListEntry;