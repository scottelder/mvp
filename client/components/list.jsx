import React, {Fragment} from 'react';
import ListEntry from './listentry.jsx';

const List = (props) => {
  const listStyle = {

    height: '400',
    width: '100%'
  }
  return( 
    <ol style={listStyle}>
      {props.data.map((datum, index) =>
      <ListEntry 
        key={index}
        id={index} 
        name={datum.name ? datum.name : datum}
        picture={datum.image_URL ? datum.image_URL : null} 
        voterator={props.voterator} 
        primary={props.primary}
        results={props.results}
        />
        )}
    </ol>
  )
};

export default List;