import React, { useState } from 'react';
import data from './data';

const List = () => {
  const [people, setPeople] = useState(data);
  const clearPeople = () => {
    setPeople([]);
  };
  return (
    <div className='container'>
      <h1>{people.length} birthdays today</h1>
      <ul className='persons'>
        {people.map((person) => {
          const { id, name, age, image } = person;
          return (
            <li key={id}>
              <img src={image} alt={name} />
              <h2>{name}</h2>
              <p>{age} years</p>
            </li>
          );
        })}
      </ul>
      <input type='button' value='Clear all' onClick={clearPeople} />
    </div>
  );
};

export default List;
