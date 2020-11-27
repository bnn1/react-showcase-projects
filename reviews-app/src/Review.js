import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = React.useState(0);
  const { id, image, job, name, text } = people[index];

  const checkIndex = (idx) => {
    if (idx > people.length - 1) return 0;
    if (idx < 0) return people.length - 1;
    return idx;
  };
  const prevReview = () => {
    setIndex((index) => {
      const newIdx = index - 1;
      return checkIndex(newIdx);
    });
  };
  const nextReview = () => {
    setIndex((index) => {
      const newIdx = index + 1;
      return checkIndex(newIdx);
    });
  };
  const randomReview = () => {
    let randomIdx;
    do {
      randomIdx = Math.floor(Math.random() * people.length);
    } while (randomIdx === index);
    setIndex(randomIdx);
  };
  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h2 className='author'>{name}</h2>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevReview}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextReview}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomReview}>
        surprise me
      </button>
    </article>
  );
};
export default Review;
