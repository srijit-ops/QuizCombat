import React, { useState, useRef } from 'react'
import CustomModal from '../common/CustomModal'
import { useStore } from '../../store/store';
import { useQuizDetails } from '../../hooks/quiz.hooks';
import { serialize } from '../../utils/paramsAppenderFunc';
import { useNavigate, createSearchParams } from 'react-router-dom';

const levels=["easy", "medium", "hard"]
function CategoryCard({name, number, id}) {

  // const difficultyRef= useRef(null)
  const navigate=useNavigate()

  // const updateAllQuizDetails= useStore((state)=>state.updateAllQuizDetails)
  // const allQuizDetails= useStore((state)=>state.allQuizDetails)

  const [open, setOpen] = useState(false);
  const [difficultyLevel, setDifficultyLevel] = useState("")

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => {
    setOpen(false)
    console.log("closde")
  };

  
const difficultyHandler=(e)=>{
  setDifficultyLevel(e.target.value)

}



const fetchQuiz=async()=>{
  // console.log(isRefetchError, isRefetching, status)
  // const check= await refetch()
  // console.log(check.data)
  // updateAllQuizDetails(check.data)
  // console.log(allQuizDetails, "zustand")
  navigate({
    pathname:"/quiz",
    search:`?${createSearchParams({
      difficulty:difficultyLevel,
      category:id
  })}`
  })
 
}

  return (
    <div className='w-full bg-[#151517] mb-8 px-5 py-8 rounded-lg relative cursor-pointer hover:scale-105 hover:bg-[#282828cc] transition-all border border-gray-600' onClick={onOpenModal}>
      <img src='/categories.png' className=' w-12 h-12 mb-8'/>
        <p className='mb-6 text-[#546ef3] font-semibold'>{number}</p>
        <p className='text-white tracking-wider font-semibold text-lg'>{name}</p>
        <CustomModal open={open} onCloseModal={onCloseModal} name={name} title={"Select difficulty level"}>
          {/* <form> */}
          {
            levels.map((item, index)=>{
              return(
                <div
                key={index}
                className="flex justify-between items-center mb-5"
              >
                 <p className="text-gray-700 dark:text-gray-300 sm:text-base text-sm">
                  {item}
                </p>
                <input type="radio" name="level" value={item} onChange={difficultyHandler}/>
                </div>
              )
            })
          }
          <div className='flex justify-center items-center mt-8'>
            <button className='rounded-lg px-6 py-2 bg-[#546ef3] text-white' onClick={fetchQuiz}>Start</button>
          </div>
          {/* </form> */}
        </CustomModal>
    </div>
  )
}

export default CategoryCard