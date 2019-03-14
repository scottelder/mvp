import React, {Component, Fragment} from 'react';
import Vote from './vote.jsx';
import Input from './input.jsx';
import List from './list.jsx'
import Axios from 'axios';

class ListEntry extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.picStyle = {
     position: 'fixed',
     maxHeight: '200px',
     maxWidth: '100px',
     boxShadow: '1px 1px 10px 2px #242121'
   }
  }
  fire(input) {
    Axios.post(`/search`, {data: input})
      .then((result) => {
        this.setState({results: [result.data]});
        console.log(result.data, 'Come on you apes! You want to live forever?');
      })
      .catch((err) => console.log(err, `If you don't do your job, I'll shoot you myself.`));
  }
  render() {
    return( 
      <div>
        {this.props.picture 
        ? <img src={this.props.picture} alt={this.props.name} title={this.props.name} style={this.picStyle}></img>
        : this.props.name + '\n'}
        {this.props.primary 
        ? <Input fire={this.fire.bind(this)} /> 
        : this.props.secondary
        ? <Vote voterator={this.props.voterator} />
        : null
        }
        {this.props.results ? <List data={this.props.results}/> : null}
      </div>
    )
  }
};

export default ListEntry;