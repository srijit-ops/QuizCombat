import React, { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Result from '../../components/leaderboardComponents/Result'

function LeaderboardPage() {

  const [totalScore, setTotalScore] = useState(0)
  const location= useLocation()
  const navigate= useNavigate()
  const {state}= location
  const finalGivenAns = state?.finalGivenAns;

  // const finalTotalScore= useMemo(()=>{
  //   if(finalGivenAns.length>0){
  //     finalGivenAns.forEach((item)=>{
  //       if(item.correctAns===item.givenAnswer){
  //         setTotalScore(prev=>prev+10)
  //         console.log(totalScore)
  //       }
  //     })
  //     return totalScore
  //   }
  // },[finalGivenAns])

  useEffect(()=>{
    if(finalGivenAns.length>0){
      finalGivenAns.forEach((item)=>{
        if(item.correctAns===item.givenAnswer){
          setTotalScore(prev=>prev+5) //this is running twice caz react 18 useffect run twice by default , have to ake it run once
        }
      })
    }
  },[])

  // console.log(JSON.parse(localStorage.getItem("givenAns")))

const goHome=()=>{
  navigate("/categories")
  // localStorage.removeItem("givenAns")
}

  return (
    <div className='sm:px-5 px-4 pt-8 flex justify-center items-center flex-col'>
    <p className='text-white font-semibold tracking-wider mb-8 text-lg'>Total Score:</p>
    <div className='p-8 rounded-[50%] bg-[#546ef3] mb-10 h-44 w-44 flex justify-center items-center'>
      <p className='text-white font-semibold text-5xl'>{totalScore}</p>
    </div>
    <Result finalGivenAns={finalGivenAns}/>
    <button className='rounded-lg px-6 py-2 bg-[#546ef3] text-white mb-8' onClick={goHome}>Go to home</button>
    </div>
  )
}

export default LeaderboardPage