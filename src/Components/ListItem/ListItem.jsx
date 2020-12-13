import React, { useState, useRef } from 'react'
import './ListItem.scss';

function ListItem({ people }) {
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef()

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
      <div className='list-item' onClick={toggleIsOpen}>
        <div className="list-item-name">
          <h2>{people.name}</h2>
        </div>
        <div 
          className="list-item-info-parent" 
          ref={parentRef} 
          style={isOpen 
            ? {height: parentRef.current.scrollHeight + "px", opacity: 1} 
            : {height: "0px", opacity: 0}
          }>
          <div className="list-item-info">
            <p>Gender: {people.gender}</p>
            <p>Birth year: {people.birthYear}</p>
          </div>
        </div>
        <div className="beam"></div>
      </div>
      
  )
}

export default ListItem
