import React, { useState } from 'react'
import CategoryCard from '../../components/categoryComponents/CategoryCard'
import { useCategories } from '../../hooks/categories.hooks'
import Loader from '../../components/common/Loader'

function CategoryPage() {
  const {data, isLoading}= useCategories()
  console.log(data, isLoading, "categories chrck")
  return (
    isLoading===true?
    <Loader/>
    :
    <div className='flex justify-between items-center flex-wrap overflow-x-hidden sm:px-5 px-4 pt-8'>
      {
        data?.trivia_categories.map((item, index)=>{
          return(
            <div key={index} className=' w-1/5 mx-4'>
              <CategoryCard name={item.name} number={index+1} id={item.id}/>
            </div>
          )
        })
      }
    </div>
  )
}

export default CategoryPage