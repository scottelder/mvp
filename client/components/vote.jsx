import React, {Fragment} from 'react'

const Component = (props) => {
  return( 
    <a onClick={(event) => props.voterator(event)}>Lick it and click it</a>
  )
};

export default Component;