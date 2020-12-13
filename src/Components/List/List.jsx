import React from 'react'
import ListItem from '../ListItem/ListItem'
import './List.scss';

function List({ people }) {

  return (
    <div class="list">
      {people.results.map((person) => (
        <ListItem 
          people={person}
          key={person.name} 
        />
      ))}
    </div>
  )
}

export default List
