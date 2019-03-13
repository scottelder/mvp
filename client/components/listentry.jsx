import React, {Fragment} from 'react';
import Vote from './vote.jsx';

const ListEntry = (props) => {
  return( 
    <div>
      {props.name + '\n'}
      {props.primary ? <Input /> : <Vote voterator={props.voterator} />}
    </div>
  )
};

export default ListEntry;