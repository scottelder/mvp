import React, {Fragment} from 'react'

const Image = (props) => {
  const picStyle = {
    position: 'relative',
    maxHeight: '200px',
    maxWidth: '100px',
    boxShadow: '0px 0px 10px 1px #242121',
    margin: '4px',
    borderRadius: '2px'
  }
  return( 
    <img
      src={props.src}
      title={props.title}
      alt={props.alt}
      style={picStyle}
      onClick={(event) => props.voterator(event)}
    >
    </img>
  )
};

export default Image;