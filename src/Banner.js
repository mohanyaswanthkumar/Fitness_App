import React from 'react'
import gym from './gym.jpg'
const Banner = () => {
  return (
    <div className='banner'>
      <p>Not everyone can wake up every day feeling energized and motivated to put in the hard work that it takes <br/> to stay fit.</p>
      <img src={gym} alt="Banner" className="w-full h-64 object-cover"/>
    </div>
  )
}

export default Banner
