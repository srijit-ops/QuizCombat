import React from 'react'


function Question({question, answer, correctAns}) {
  console.log(question, answer, correctAns,)
  return (
    <div>
      <h1 className='text-white'>Timer</h1>
      <h3>{question}</h3>
      <div className='flex justify-between items-center flex-wrap'>
        {
          answer?.slice(0,2).map((item, index)=>{
            <div>{item}</div>
          })
        }
      </div>
      <div className='flex justify-between items-center flex-wrap'>
        {
          answer?.slice(2,4).map((item, index)=>{
            <div>{item}</div>
          })
        }
      </div>
      <button>Next</button>
    </div>
  )
}

export default Question