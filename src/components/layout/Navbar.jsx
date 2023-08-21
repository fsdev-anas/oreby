import React, { useEffect, useState } from 'react'
import Flex from './Flex'
import Image from './Image'
import List from '../layout/List'
import ListItem from '../layout/ListItem'
import {FaBars} from 'react-icons/fa'
import {BsArrowBarDown} from 'react-icons/bs'
import Container from './Container'

const Navbar = () => {
  let [show,setShow] = useState(true)
  
  useEffect(() => {
    function sizeWidth(){
      if (window.innerWidth < 768) {
        setShow(false)
      }else{
        setShow(true)
      }
    }
    sizeWidth()
    window.addEventListener("resize",sizeWidth)
  },[])

  return (
    <nav className='py-5'>
      <Container>
        <Flex className='md:flex' >
            <div className="w-3/12">
              <Image imgSrc='images/Logo.png' />
            </div>
            <div className="md:w-9/12 w-full">
            <FaBars onClick={() => setShow(!show)} className='md:hidden absolute top-2.5 right-2.5 ml-auto' />
              {show && 
              (
              <List className='md:flex justify-end gap-x-10 mt-4 md:mt-0'>
                <ListItem className='font-dm text-sm font-bold hover:font-bold' listname='Home' />
                <ListItem className='font-dm text-sm font-regular hover:font-bold mt-1 md:mt-0' listname='Shop' />
                <ListItem className='font-dm text-sm font-regular hover:font-bold mt-1 md:mt-0' listname='About' />
                <ListItem className='font-dm text-sm font-regular hover:font-bold mt-1 md:mt-0' listname='Contacts' />
                <ListItem className='font-dm text-sm font-regular hover:font-bold' listname='Journal' />
              </List>
              )}
            </div>
          </Flex>
      </Container>
    </nav>
  )
}

export default Navbar