import React from 'react';
import Loading from '../assets/images/loading.svg';
import '../assets/styles/loading.scss';

export default ({ message }) => {
  return (
    <div className="loading">
      <img src={Loading} alt="loading-bar" />
      <h1 className="loading__text">{message}</h1>
    </div>
  );
};
