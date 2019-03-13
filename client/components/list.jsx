import React, {Fragment} from 'react';
import ListEntry from './listentry.jsx';

const List = (props) => {
  return( 
    <ol>
      {props.data.map((datum, index) =>
      <ListEntry key={index} name={datum} voterator={props.voterator} />
        )}
    </ol>
  )
};

export default List;