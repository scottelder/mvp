import React, {Fragment} from 'react'

const Component = (props) => {
  return( 
    <a onClick={(event) => props.voterator(event)}>You know you want to click it.</a>
  )
};

export default Component;