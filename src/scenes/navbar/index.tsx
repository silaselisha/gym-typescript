import React, { useState } from 'react'
import Logo from '@/assets/Logo.png'
import { EnumPages } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import ActionButton from '@/components/ActionButton'
import Link from './Link'


type Props = {
    clickedPage: EnumPages;
    setClickedPage: (value: EnumPages) => void;
    isTopOfPage: boolean;
}

const index = ({ clickedPage, setClickedPage, isTopOfPage }: Props) => {
    const flexbetween = 'flex justify-between items-center'
    const isMediaQueryAbove = useMediaQuery("(min-width: 1060px)")
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)

    const background = isTopOfPage ? '' : 'bg-primary-100 dropshadow'
    
  return (
    <nav>
        <div className={`${flexbetween} ${background} fixed top-0 z-30 py-6 w-full`}>
            <div className={`${flexbetween} mx-auto w-5/6`}>
                <div className={`${flexbetween} w-full gap-16`}>
                    <img src={Logo} alt="logo" />

                    {isMediaQueryAbove ? 
                        (<div className={`${flexbetween} w-full`}>
                            <div className={`${flexbetween} text-sm gap-8`}>
                                <Link page='Home' setClickedPage={setClickedPage} clickedPage={clickedPage}/>
                                <Link page='Benefits' setClickedPage={setClickedPage} clickedPage={clickedPage}/>
                                <Link page='Our Classes' setClickedPage={setClickedPage} clickedPage={clickedPage}/>
                                <Link page='Contact Us' setClickedPage={setClickedPage} clickedPage={clickedPage}/>
                            </div>
                            <div className={`${flexbetween} gap-8`}>
                                <p>Sign In</p>
                                <ActionButton setClickedPage={setClickedPage}>Become a Member</ActionButton>
                            </div>
                        </div>) : (<button className='bg-secondary-500 rounded-full' onClick={() => {setIsMenuToggled(!isMenuToggled)}}>
                            <Bars3Icon className='h-6 w-6 text-white'/>
                        </button>)
                    }
                </div>
            </div>
        </div>
       
        {/* MOBILE MENU */}
        {!isMediaQueryAbove && isMenuToggled && (
            <div className='fixed right-0 z-40 bottom-0 h-full w-[300px] bg-primary-100 drop-shadow-xl'>
                {/* CLOSE ICON */}
                <div className='flex justify-end p-12'>
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <XMarkIcon className='h-6 w-6 text-gray-400'/>
                    </button>
                </div>
                {/* MENU ITEM */}
                <div className={`ml-[33%] flex flex-col text-xl gap-8`}>
                    <Link page='Home' setClickedPage={setClickedPage} clickedPage={clickedPage}/>
                    <Link page='Benefits' setClickedPage={setClickedPage} clickedPage={clickedPage}/>
                    <Link page='Our Classes' setClickedPage={setClickedPage} clickedPage={clickedPage}/>
                    <Link page='Contact Us' setClickedPage={setClickedPage} clickedPage={clickedPage}/>
                </div>
            </div>
        )}
    </nav>
  )
}

export default index