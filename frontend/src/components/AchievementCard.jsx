import React from 'react'
import Sandpic from '../assets/Sandpic.jpg'

const AchievementCard = () => {
  return (
    <div className='grid grid-cols-1 bg-purple-400 rounded-md w-96'>
      <img src={Sandpic} alt='Image profile' className='h-48 w-full rounded-md rounded-b-none'/>
      <div className=''>
        <h2 className='font-semibold'>title</h2>
        <p className='text-xs-mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel architecto laboriosam incidunt, natus deleniti rem iste, quod quisquam non ipsa delectus dolore voluptatum neque quibusdam nihil? Sunt magnam labore recusandae.</p>
      </div>
    </div>
  )
}

export default AchievementCard;