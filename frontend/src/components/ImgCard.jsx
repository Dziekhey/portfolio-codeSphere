import React from 'react'


const ImgCard = ({Image}) => {
  return (
    <div>
    <div className="relative max-w-64 overflow-hidden rounded-2xl shadow-lg group m-6 h-96 border-4 shadow-zinc-200">
      <img src={Image} alt="Sandra's Picture" className='size-full transition-transform group-hover:scale-110 duration-200' />
    </div>
    </div>
  )
}

export default ImgCard;
