import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [colorValue, setColorValue] = useState('');
  const [palette, setPalette] = useState([]);
  const [isInvalid, setIsInvalid] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsInvalid(false);
    try {
      const colors = new Values(colorValue).all();
      setPalette(colors);
    } catch (error) {
      console.log(error);
      setIsInvalid(true);
    }
  };
  React.useEffect(() => {
    const colors = new Values('#123456').all();
    setPalette(colors);
  }, []);
  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            placeholder='#123456'
            type='text'
            value={colorValue}
            onChange={(e) => setColorValue(e.target.value)}
            className={isInvalid ? 'error' : undefined}
          />
          <button className='btn' type='submit'>
            get palette
          </button>
        </form>
      </section>
      <section className='colors'>
        {palette.map((color, index) => {
          return <SingleColor key={index} {...color} />;
        })}
      </section>
    </>
  );
}

export default App;
