import React from 'react'

const Dropdown = ({children,className,title,dropref,onClick}) => {
  return (
    <div className={className} ref={dropref} onClick={onClick}>
        <p>{title}</p>
        {children}
    </div>
  )
}

export default Dropdown