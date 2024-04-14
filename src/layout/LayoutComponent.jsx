import React from 'react'
import Header from './Header'

function LayoutComponent({children}) {
  return (
    <div className='relative'>
      <Header/>
      {children}
    </div>
  )
}

export default LayoutComponent