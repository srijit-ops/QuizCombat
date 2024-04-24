import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function LeaderboardPage() {

  const location= useLocation()
  const navigate= useNavigate()
  const {state}= location
  const finalGivenAns = state?.finalGivenAns;

  console.log(finalGivenAns, "in lead")
  // console.log(JSON.parse(localStorage.getItem("givenAns")))

const goHome=()=>{
  navigate("/categories")
  // localStorage.removeItem("givenAns")
}

  return (
    <div className='sm:px-5 px-4 pt-8'>
    <div className='text-white'>LeaderboardPage</div>
    <button className='rounded-lg px-6 py-2 bg-[#546ef3] text-white' onClick={goHome}>Go to home</button>
    </div>
  )
}

export default LeaderboardPage