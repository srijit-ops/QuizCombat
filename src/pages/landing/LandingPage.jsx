import React from 'react'
import { WavyBackground } from '../../components/landingComponents/WavyBackground'
import { HoverBorderGradient } from '../../components/common/HoverBorderGradient'
import { useNavigate } from 'react-router-dom'


function LandingPage() {
  const navigate= useNavigate()

  return (
    <div className='relative overflow-y-hidden'>
      <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Quiz it up 
      </p>
      <p className="text-base md:text-lg mt-8 text-slate-400 font-normal inter-var text-center">
      Outsmart the rest with knowledge and dominate the world.
      </p>
      <div className='flex justify-center items-center'>
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        onClick={()=>navigate("/categories")}
      >
        <span>Get started ✨</span>
      </HoverBorderGradient>
      </div>
      
    </WavyBackground>
    </div>
  )
}

export default LandingPage