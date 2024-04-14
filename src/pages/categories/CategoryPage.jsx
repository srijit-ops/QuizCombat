import React from 'react'
import CategoryCard from '../../components/categoryComponents/CategoryCard'

function CategoryPage() {
  const categories= [0,1,2,3,4]
  return (
    <div className='flex justify-between items-center flex-wrap overflow-x-hidden sm:px-5 px-4'>
      {
        categories.map((item, index)=>{
          return(
            <div key={index} className=' w-1/5 mx-4'>
              <CategoryCard/>
            </div>
          )
        })
      }
    </div>
  )
}

export default CategoryPage