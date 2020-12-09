import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, type }) => {
  const [isCopied, setIsCopied] = useState(false);
  const color = rgbToHex(...rgb);
  const handleClick = () => {
    navigator.clipboard.writeText(color);
    setIsCopied(true);
  };
  useEffect(() => {
    const timeout = setTimeout(() => setIsCopied(false), 3000);
    return () => clearTimeout(timeout);
  }, [isCopied]);
  return (
    <article
      className={`color ${type === 'shade' ? 'color-light' : undefined}`}
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{color}</p>
      {isCopied && <p>copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
