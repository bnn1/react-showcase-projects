import React from 'react';

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [isShortened, setIsShortened] = React.useState(true);
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>
          {isShortened ? `${info.substr(0, 150)}...` : info}
          <button onClick={() => setIsShortened(!isShortened)}>
            {isShortened ? `read more` : `show less`}
          </button>
        </p>
        <button className='delete-btn' onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
