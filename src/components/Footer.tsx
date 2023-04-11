import React,{ useState } from 'react'
import { motion } from 'framer-motion'
import { EnumPages } from '@/shared/types'
import Logo from '@/assets/Logo.png'

type Props = {
    setClickedPage: (value: EnumPages) => void
}

const Footer = ({ setClickedPage }: Props) => {
  return (
    <footer id='footer' className='bg-primary-100 py-16'>
        <motion.div className='justify-content md:flex items-center mx-auto gap-16 w-5/6'>
            <div className='mt-16 md:md-0 basis-1/2'>
                <img alt='logo' src={Logo} />
                <p className='my-5'>Improve overall fitness and endurance. These classes typically involve high-intensity exercises like jumping jacks, lunges, and squats, and can be a great way to challenge yourself and push your limits.</p>
                <p className='text-sm'>&copy; Evogym  2023</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Links</h4>
                <p className='my-5'>Can be a great way to challenge yourself and push your limits.</p>
                <p className='my-5'>Fun and energetic class is a great way to improve cardiovascular health.</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Contact Us</h4>
                <p className='my-5'>example.gamil.com</p>
                <p className='my-5'>+254700000022</p>
            </div>
        </motion.div>
    </footer>
  )
}

export default Footer