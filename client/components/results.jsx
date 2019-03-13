import React, {Fragment} from 'react'
import ResultEntry from './resultentry.jsx';

const Results = (props) => {
  return( 
    props.results.map((result, index) => {
      <ResultEntry key={index} result={result}/>
    })
  )
};

export default Results;