import React from 'react';
import './Body.css';

function Sqaure(props) {
  return (
    <div className='sqaure' onClick={props.onClick}>
      <h1 className='square-text'>{props.value}</h1>
    </div>
  );
}

export default Sqaure;
