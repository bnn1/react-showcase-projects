import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
  const [isShown, setIsShown] = React.useState(false);
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setIsShown(!isShown)}>
          {isShown ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isShown && <p>{info}</p>}
    </article>
  );
};

export default Question;
