import React from 'react';
import ListEntry from './listentry.jsx';

const List = (props) => {
  const listStyle = {
    height: '400',
    width: '100%',
    padding: '0',
    margin: '0'
  }
  return( 
    <ol style={listStyle}>
      {props.data.map((datum, index) =>
        <ListEntry 
          key={index}
          id={index} 
          name={datum.owner ? datum.owner : datum}
          actor={datum.actor ? datum.actor: null}
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