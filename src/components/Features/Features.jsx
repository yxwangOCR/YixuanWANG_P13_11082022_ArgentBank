import React from 'react';
import "./Features.css";


function Features(props) {
  return (
    <div className='feature-item'>
        <img className='feature-icon' src={props.icon} alt="features-icons"/>
        <h3 className='feature-item-title'>{props.title}</h3>
        <p>{props.content}</p>
    </div>
  )
}

export default Features