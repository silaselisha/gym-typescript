import React, { useState } from 'react'
import { ClassTypes } from '@/shared/types'

type Props = ClassTypes

const Class = ({ name, image, description }: Props) => {
    const overlayStyles = `p-5 absolute z-20 flex h-[380px] w-[450px] flex-col justify-center item-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90`
  return (
    <li className='relative inline-block h-[380px] w-[450px] mx-5'>
        <div className={overlayStyles}>
            <p className='text-2xl'>{name}</p>
            <p className='mt-5'>{description}</p>
        </div>
        <img src={image} alt={`${image}`} />
    </li>
  )
}

export default Class