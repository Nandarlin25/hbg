import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className={`w-full md:w-[700px]  lg:w-[1100px] mx-auto ${className}`}>
      {children}
    </div>
  )
}

export default Container