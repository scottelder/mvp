import React, {Fragment} from 'react';
import Vote from './vote.jsx';
import Input from './input.jsx';

const ListEntry = (props) => {
  return( 
    <div>
      {props.name + '\n'}
      {props.primary ? <Input fire={props.fire} /> : <Vote voterator={props.voterator} />}
    </div>
  )
};

export default ListEntry;