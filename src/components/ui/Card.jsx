import React from 'react'

const card = ({ children, className = "" }) => {
  return (
     <div className={`bg-white rounded-xl border border-gray-200 overflow-hidden ${className}`}>
      {children}
    </div>
  )
}

export default card
