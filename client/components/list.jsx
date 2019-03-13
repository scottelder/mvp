import React, {Fragment} from 'react';
import ListEntry from './listentry.jsx';

const List = (props) => {
  return( 
    <ol>
      {props.data.map((datum, index) =>
      <ListEntry 
        key={index} 
        name={datum} 
        voterator={props.voterator} 
        fire={props.fire}
        primary={true}
        />
        )}
    </ol>
  )
};

export default List;