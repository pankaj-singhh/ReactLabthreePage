import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [number, setNumber] = useState(() => {
    // Retrieve the initial state from localStorage or default to 0
    const savedNumber = localStorage.getItem('counter');
    return savedNumber !== null ? parseInt(savedNumber, 10) : 0;
  });

  useEffect(() => {
    // Save the counter value to localStorage whenever it changes
    localStorage.setItem('counter', number);
  }, [number]);

  const incrementHandler = () => {
    setNumber(prevNumber => prevNumber + 1);
  };

  const decrementHandler = () => {
    setNumber(prevNumber => Math.max(prevNumber - 1, 0)); // Ensure it doesn't go below 0
  };

  const resetHandler = () => {
    setNumber(0);
  };

  // Calculate background color intensity
  const getColorIntensity = (value) => {
    // Adjust the multiplier and offset to fit the desired color range
    const intensity = Math.min(value * 10, 255); // Ensure intensity doesn't go beyond 255
    return `rgb(${intensity}, ${intensity}, ${intensity})`;
  };

  return (
    <div
      className='flex flex-col items-center h-[30vh] w-[40vw] font-bold text-xl mt-10'
      style={{
        background: `linear-gradient(to bottom, ${getColorIntensity(number)}, black)`
      }}
    >
      <p className='text-3xl pb-10 pt-5 text-red-500'>Counter Page</p>

      <div className='text-center bg-gradient-to-r from-green-500 via-yellow-600 to-blue-700 w-[15rem] text-xl text-gray-300 rounded-md'>
        {number}
      </div>

      <div className='mt-3 pb-5'>
        <button onClick={incrementHandler} className='bg-red-500 rounded-xl w-auto pr-2 pl-2 pt-1 pb-1'>
          Increase
        </button>

        <button onClick={decrementHandler} className='bg-indigo-500 rounded-xl w-auto pr-2 pl-2 pt-1 pb-1 ml-2 mr-2'>
          Decrease
        </button>

        <button onClick={resetHandler} className='bg-indigo-500 rounded-xl w-auto pr-4 pl-4 pt-1 pb-1'>
          Reset
        </button>
      </div>
    </div>
  );
};
export default Counter;