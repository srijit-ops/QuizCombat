import React from 'react'

function CategoryCard({name, number}) {
  return (
    <div className='w-full bg-[#151517] mb-8 px-5 py-8 rounded-lg relative cursor-pointer hover:scale-105 hover:bg-[#282828cc] transition-all border border-gray-600'>
      <img src='/categories.png' className=' w-12 h-12 mb-8'/>
        <p className='mb-6 text-[#546ef3] font-semibold'>{number}</p>
        <p className='text-white tracking-wider font-semibold text-lg'>{name}</p>
    </div>
  )
}

export default CategoryCard