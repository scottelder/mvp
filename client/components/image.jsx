import React, {Fragment} from 'react'

const Image = (props) => {
  return( 
    <img
      src={props.src}
      title={props.title}
      alt={props.alt}
      style={props.style}
      onClick={(event) => props.voterator(event)}
    >
    </img>
  )
};

export default Image;