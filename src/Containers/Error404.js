import React from 'react';
import { Link } from 'react-router-dom';
import img_404 from '../img/404.svg';

const Error404 = ({ isSmall }) => {
  return (
    <div
      className="d-flex flex-column h-100 align-items-center justify-content-center"
      style={{ minHeight: '700px' }}
    >
      <img alt="" width="300px" src={img_404} />
      <h1 className="text-dark text-center mt-4 font-weight-light">
        Looks like you're lost!
      </h1>
      <p className="mb-0 mt-1 lead">
        Go back to <Link to="/">Home</Link> instead?
      </p>
    </div>
  );
};

export default Error404;
