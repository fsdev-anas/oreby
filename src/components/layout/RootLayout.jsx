import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Header from './Header'

const RootLayout = () => {
  return (
    <>
        <Navbar />
        <Header />
        <Outlet />
    </>
  )
}

export default RootLayout