import React from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';

const Reviews = ({ people, index, setIndex }) => {
  return (
    <div className='section-center'>
      {people.map((person, personIdx) => {
        const { id, image, name, title, quote } = person;
        let position = 'nextSlide';
        if (personIdx === index) position = 'activeSlide';
        if (
          personIdx === index - 1 ||
          (index === 0 && personIdx === people.length - 1)
        ) {
          position = 'lastSlide';
        }
        return (
          <article className={position} key={id}>
            <img src={image} className='person-img' alt={name} />
            <h4>{name}</h4>
            <p className='title'>{title}</p>
            <p className='text'>{quote}</p>
            <FaQuoteRight />
          </article>
        );
      })}
      <button className='prev' onClick={() => setIndex(index - 1)}>
        <FiChevronLeft />
      </button>
      <button className='next' onClick={() => setIndex(index + 1)}>
        <FiChevronRight />
      </button>
    </div>
  );
};

export default Reviews;
