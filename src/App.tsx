import React, { useState, useEffect } from 'react'
import Navbar from '@/scenes/navbar'
import { EnumPages } from '@/shared/types'
import Home from '@/pages/Home'
import Benefits from '@/pages/Benefits'
import OurClasses from '@/pages/OurClasses'
import ContactUs from '@/pages/ContactUs'
import Footer from '@/components/Footer'

type Props = {
    
}

const App = ({  } : Props) => {
  const [clickedPage, setClickedPage] = useState<EnumPages>(EnumPages.Home)
  const [isScrollTop, setIsScrollTop] = useState<boolean>(true)

  useEffect(() => {
    const handleScrollY = () => {
      if(window.scrollY === 0) {
        setIsScrollTop(true)
        setClickedPage(EnumPages.Home)
      }else {
        setIsScrollTop(false)
      }
    }

    window.addEventListener('scroll', handleScrollY)

    return () => {
      window.removeEventListener('scroll', handleScrollY)
    }
  }, [])

  return (
    <div className='app bg-gray-50'>
      
        <Navbar clickedPage={clickedPage} setClickedPage={setClickedPage} isTopOfPage={isScrollTop}/>
        <Home setClickedPage={setClickedPage}/>
        <Benefits setClickedPage={setClickedPage}/>
        <OurClasses setClickedPage={setClickedPage}/>
        <ContactUs setClickedPage={setClickedPage}/>
        <Footer setClickedPage={setClickedPage} />
    </div>
  )
}

export default App