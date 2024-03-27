import React from 'react'

const Dashbar = () => {
  return (
    <div className='flex justify-between px-8 py-3 bg-slate-800 text-white '>
      <div>
        <h1>CODESHERE</h1>
      </div>
      <div className=''>
        <span className='px-4'>Home</span>
        <span className='px-4'>Skills</span>
        <span className='px-4'>Projects</span>
        <span className='px-4'>Experiences</span>
        <span className='px-4'>Achievements</span>
      </div>
    </div>
  )
}

export default Dashbar;
