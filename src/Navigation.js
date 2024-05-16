import React from 'react';

const Navigation = () => {
  const handleButtonClick = (offset) => {
    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
  };

  return (
    <div className='nav'>
      <div><button onClick={() => handleButtonClick(0)}>Home</button></div>
      <div><button onClick={() => handleButtonClick(window.innerHeight)}>Search Exercises</button></div>
      <div><button onClick={() => handleButtonClick(2 * window.innerHeight)}>Exercises</button></div>
    </div>
  );
};

export default Navigation;
