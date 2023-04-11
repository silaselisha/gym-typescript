import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon
} from '@heroicons/react/24/solid'
import { EnumPages } from '@/shared/types'
import Htext from '@/components/Htext'
import { BenefitsType } from '@/shared/benefitType'
import Benefit from '@/components/Benefit'
import ActionButton from '@/components/ActionButton'
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'

type Props = {
    setClickedPage: (value: EnumPages) => void
}

const benefits: Array<BenefitsType> = [
    {
        icon: <HomeModernIcon className='h-6 w-6' />,
        title: 'Increased Energy and Productivity',
        description: 'Exercise helps to increase blood flow and oxygen to the brain, which can help to improve cognitive function and mental clarity.'
    },
    {
        icon: <UserGroupIcon className='h-6 w-6' />,
        title: 'Improved Physical Health',
        description: 'Engaging in physical activity on a consistent basis can help to reduce the risk of a variety of health conditions, including heart disease, high blood pressure, and type 2 diabetes.'
    },
    {
        icon: <AcademicCapIcon className='h-6 w-6' />,
        title: 'Reduced Stress and Anxiety',
        description: 'Regular exercise has been shown to reduce symptoms of stress, anxiety, and depression, as well as improve mood and overall well-being.'
    }
]

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    }
}

const Benefits = ({ setClickedPage }: Props) => {
  return (
    <section id='benefits' className='mx-auto min-h-full w-5/6 py-20'>
        <motion.div onViewportEnter={() => setClickedPage(EnumPages.Benefits)}>
            {/* HEADER */}
            <div className='md:my-5 md:w-3/5'>
                <Htext>
                    More Than Just a Gym
                </Htext>
                <motion.p className='text-sm my-5' initial={'hidden'}
                    whileInView={'visible'}
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x:-50},
                        visible: {opacity: 1, x: 0}
                    }}>Our expert trainers are dedicated to providing personalized attention to each and every member, and our range of fitness classes caters to all levels of fitness. Whether you are looking to lose weight, build muscle, or simply lead a healthier lifestyle, EvoGym is the perfect place for you. Join us today and take the first step towards a fitter, healthier you!</motion.p>
            </div>
            {/* BENEFITS */}
            <motion.div className='md:flex items-center justify-between gap-8 mt-5'
            initial={'hidden'}
            whileInView={'visible'}
            viewport={{once: true, amount: 0.5}}
            variants={container}
            >
                {benefits.map((benefit: BenefitsType) => (
                    <Benefit
                     key={benefit.title} 
                     title={benefit.title} 
                     description={benefit.description} 
                     icon={benefit.icon} 
                     setClickedPage={setClickedPage}
                    />
                ))}
            </motion.div>
            {/* GRAPHICS AND DESCRIPTION */}
            <div className='mt-16 items-center md:flex justify-between gap-20 md:mt-28 '>
                {/* IMAGE */}
                <img src={BenefitsPageGraphic} alt='benefit-page-graphic' className='mx-auto'/>

                {/* DESCRIPTION */}
                <div className=''>
                    {/* TITLE */}
                    <motion.div className='relative' initial={'hidden'}
                    whileInView={'visible'}
                    viewport={{once: true, amount: 0.5}}
                    transition={{delay: 0.2, duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x:-50},
                        visible: {opacity: 1, x:0}
                    }}>
                        <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves'>
                            <div>
                                <Htext>
                                    Millions of Happy Members Getting{' '} <span className='text-primary-500'>FIT</span>
                                </Htext>
                            </div>
                        </div>
                    </motion.div>
                    {/* DESCRIPTION */}
                    <motion.div initial={'hidden'}
                    whileInView={'visible'}
                    viewport={{once: true, amount: 0.5}}
                    transition={{delay: 0.2, duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x:-50},
                        visible: {opacity: 1, x:0}
                    }}>
                        <p className='my-5'>
                            Are you ready to take your fitness journey to the next level? Look no further than our state-of-the-art gym, equipped with the latest equipment and amenities to help you reach your goals. Our experienced trainers are dedicated to providing personalized attention to each member, and our range of fitness classes caters to all levels of fitness. Join us today and discover the best version of yourself!
                        </p>
                        <p className='mb-5'>
                            Ready to improve your mental and physical health? Our gym offers a variety of exercise options that can help you reduce stress, increase energy, and boost your overall well-being. With our modern facilities and expert trainers, you can feel confident in achieving your fitness goals. Take the first step towards a happier, healthier you and join us today!
                        </p>
                    </motion.div>
                    {/* BUTTONS */}
                    <div className='relative mt-16'>
                        <div className='before:absolute before:z-[-1] before:-bottom-20 before:right-40 before:content-sparkles'>
                            <ActionButton setClickedPage={setClickedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits