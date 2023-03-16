import React from 'react';

const NotFound = () => {
  return (
    <div className="background-img">
      <div className="space"></div>
      <div className="wrapper">
        <div className="img-wrapper">
          <span className='notfound'>44</span>
        </div>
        <p className='notfound-text'>
          The page you are trying to search has been <br /> moved to another
          universe.
        </p>
        <button type="button">GET ME HOME</button>
      </div>
    </div>
  );
};

export default NotFound;
