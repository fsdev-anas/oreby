import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({listname,className,href}) => {
  return (
    <li className={className}><Link to={href}>{listname}</Link></li>
  )
}

export default ListItem