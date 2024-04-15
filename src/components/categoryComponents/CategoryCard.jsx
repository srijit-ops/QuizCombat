import React, { useState } from 'react'
import CustomModal from '../common/CustomModal'

const levels=["easy", "medium", "hard"]
function CategoryCard({name, number}) {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);



  return (
    <div className='w-full bg-[#151517] mb-8 px-5 py-8 rounded-lg relative cursor-pointer hover:scale-105 hover:bg-[#282828cc] transition-all border border-gray-600' onClick={onOpenModal}>
      <img src='/categories.png' className=' w-12 h-12 mb-8'/>
        <p className='mb-6 text-[#546ef3] font-semibold'>{number}</p>
        <p className='text-white tracking-wider font-semibold text-lg'>{name}</p>
        <CustomModal open={open} onCloseModal={onCloseModal} name={name} title={"Select difficulty level"}>
          <form>
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
                <input type="radio" name="level" value={item}/>
                </div>
              )
            })
          }

          </form>
        </CustomModal>
    </div>
  )
}

export default CategoryCard