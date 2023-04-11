import { BenefitsType } from '@/shared/benefitType'
import { EnumPages } from '@/shared/types'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'

type Props = {
    setClickedPage: (value: EnumPages) => void
    title: string;
    description: string;
    icon: React.ReactNode;
} 

const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {opacity: 1, scale: 1}
}

const Benefit = ({title, description, icon, setClickedPage}: Props) => {
  return (
    <motion.div className='mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center' variants={childVariant}> 
        <div className='mb-4 flex justify-center items-center'>
            <div className='rounded-full border-2 border-gray-100 p-4 bg-primary-100'>
                {icon}
            </div>
        </div>
        <h4 className='font-bold'>{title}</h4>
        <p className='my-3'>{description}</p>
        <AnchorLink className='underline font-bold text-sm text-primary-500 hover:text-secondary-500'
            onClick={() => setClickedPage(EnumPages.ContactUs)}
            href={`#${EnumPages.ContactUs}`}
            >
                <p>Learn More</p>
        </AnchorLink>
    </motion.div>
  )
}

export default Benefit