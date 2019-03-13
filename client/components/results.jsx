import React, {Fragment} from 'react'
import ResultEntry from './resultentry.jsx';

const Results = (props) => {
  return(
    <ul>
      {props.results.map((result, index) => 
        <ResultEntry 
          key={index} 
          entry={result}
        />
      )}
    </ul>
  )
};

export default Results;