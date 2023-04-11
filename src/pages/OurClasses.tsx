import React, { useState } from 'react'
import { EnumPages } from '@/shared/types'
import { motion } from 'framer-motion'
import Image1 from '@/assets/image1.png'
import Image2 from '@/assets/image2.png'
import Image3 from '@/assets/image3.png'
import Image4 from '@/assets/image4.png'
import Image5 from '@/assets/image5.png'
import Image6 from '@/assets/image6.png'
import Htext from '@/components/Htext'
import { ClassTypes } from '@/shared/types'
import Class from '@/components/Class'

type Props = {
    setClickedPage: (value: EnumPages) => void
}

const ourClasses: Array<ClassTypes> = [
    {
        name: 'High-Intensity Interval Training (HIIT)',
        description: 'HIIT is a type of workout that involves short bursts of high-intensity exercise, followed by periods of rest. This type of training is known for its effectiveness in burning calories and building endurance.',
        image: Image1
    },
    {
        name: 'Yoga',
        description: 'Yoga is a practice that focuses on physical postures, breathing techniques, and meditation. It is known for its ability to improve flexibility, strength, and balance, as well as reduce stress and promote relaxation.',
        image: Image2
    },
    {
        name: 'Pilates',
        description: 'Pilates is a low-impact exercise that focuses on strengthening the core muscles, improving posture, and increasing flexibility. This type of workout is great for improving balance and coordination, as well as toning the body.',
        image: Image3
    },
    {
        name: 'Spin',
        description: 'Spin classes are high-energy cycling workouts that are great for burning calories and improving cardiovascular health. These classes typically involve upbeat music and motivational coaching to keep you engaged and energized.',
        image: Image4
    },
    {
        name: 'Zumba',
        description: 'Zumba is a dance-inspired workout that combines Latin and international music with easy-to-follow dance moves. This fun and energetic class is a great way to improve cardiovascular health while having fun and learning new dance moves.',
        image: Image5
    },
    {
        name: 'Bootcamp',
        description: 'Bootcamp classes are a combination of strength and cardio exercises designed to improve overall fitness and endurance. These classes typically involve high-intensity exercises like jumping jacks, lunges, and squats, and can be a great way to challenge yourself and push your limits.',
        image: Image6
    }
]

const OurClasses = ({ setClickedPage }: Props) => {
  return (
    <section id='ourclasses' className='w-full bg-primary-100 py-40'>
        <motion.div onViewportEnter={() => setClickedPage(EnumPages.OurClasses)}>
            <motion.div className='mx-auto w-5/6'
            initial='hidden'
            whileInView={'visible'}
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
                hidden: {opacity: 0, x: -50},
                visible: {opacity: 1, x: 0}
            }}
            >
                <div className='md:w-3/5'>
                    <Htext>Our Classes</Htext>
                    <p className='py-5'>Our gym offers a variety of fitness classes to cater to all levels of fitness. From high-intensity interval training (HIIT) to yoga and pilates, we have something for everyone. Our expert trainers lead each class and provide personalized attention to help you reach your fitness goals. With a range of class times throughout the week, you can easily find a class that fits into your busy schedule. Join us today and discover the benefits of group fitness!</p>
                </div>
            </motion.div>
            {/* SIDE SCROLL */}
            <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
                <ul className='w-[2800px] whitespace-nowrap'>
                    {ourClasses.map((item, index) => (
                        <Class 
                            key={item.name + index}
                            name={item.name}
                            image={item.image}
                            description={item.description}
                        />
                    ))}
                </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default OurClasses