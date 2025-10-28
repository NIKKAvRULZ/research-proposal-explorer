import React from 'react'

const Card = ({ children, className = '', hover = true, ...props }) => {
  return (
    <div 
      className={`floating-card ${hover ? 'hover:transform hover:-translate-y-1' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card