import React from 'react';
/**
 * Component to render a 404 Not Found page.
 */

const NotFound = () => {
  return (
    <div className='container'>
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
        <button type="button" className='gethomeBtn'>GET ME HOME</button>
      </div>
    </div>
    </div>

  );
};

export default NotFound;
