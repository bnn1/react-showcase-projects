import React, { useState, useEffect } from 'react';
import data from './data';
import Reviews from './Reviews';

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index > people.length - 1) setIndex(0);
    if (index < 0) setIndex(people.length - 1);
  }, [index]);

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <Reviews people={people} index={index} setIndex={setIndex} />
    </section>
  );
}

export default App;
