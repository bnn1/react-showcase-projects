import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const text = data.slice(0, count);
    setText(text);
  };

  return (
    <section className='section-center'>
      <h3>tired of borin lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>
          generate
          <input
            type='number'
            required
            value={count}
            name='amount'
            id='amount'
            min='1'
            max='10'
            onChange={(evt) => setCount(evt.target.value)}
          />
          {count > 1
            ? `paragraphs of modern text placeholder!`
            : `paragraph of modern text placeholder!`}
        </label>
        <button type='submit' className='btn'>
          yes please!
        </button>
        <div className='section lorem-text'>
          {text.length > 0 &&
            text.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)}
        </div>
      </form>
    </section>
  );
}

export default App;
