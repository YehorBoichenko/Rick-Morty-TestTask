import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGetHome = () => {
    navigate('/');
  };

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
        <button type="button" className='gethomeBtn' onClick={handleGetHome}>GET ME HOME</button>
      </div>
    </div>
  );
};

export default NotFound;
