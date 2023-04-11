import React, { useState } from 'react'
import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import SponsorRedBull from '@/assets/SponsorRedBull.png'
import SponsorForbes from '@/assets/SponsorForbes.png'
import SponsorFortune from '@/assets/SponsorFortune.png'
import ActionButton from '@/components/ActionButton'
import useMediaQuery from '@/hooks/useMediaQuery'
import { EnumPages } from '@/shared/types'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'


type Props = {
    setClickedPage: (value: EnumPages) => void;
}

const Home = ({ setClickedPage }: Props) => {
    const isMediaQueryAbove = useMediaQuery('(min-width: 1060px)')

  return (
    <section className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0' id='home'>
        {/* IMAGE & MAIN HEADER */}
        <motion.div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6' onViewportEnter={() => setClickedPage(EnumPages.Home)}>
            {/* HEADER */}
            <div className='z-10 mt-32 md:basis-3/5'>
                {/* HEADINGS */}
                <motion.div className='md:-mt-20'
                    initial={'hidden'}
                    whileInView={'visible'}
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x:-50},
                        visible: {opacity: 1, x: 0}
                    }}
                >
                    <div className='relative'>
                        <div className='before:absolute before:-top-6 md:before:content-evolvetext before:z-[-1] before:-left-20'>
                            <img src={HomePageText} alt='home-page-text' />
                        </div>
                    </div>
                    <p className='text-sm mt-8'>
                        Welcome to EvoGym, your ultimate destination for fitness and wellness! At EvoGym, we believe that fitness is not just a physical activity, but a way of life. Our state-of-the-art gym is equipped with top-of-the-line equipment and amenities, designed to help you achieve your fitness goals in a safe and enjoyable environment!
                    </p>
                </motion.div>
                {/* ACTION BUTTONS */}
                <motion.div className='mt-8 flex items-center gap-8'
                    initial={'hidden'}
                    whileInView={'visible'}
                    viewport={{once: true, amount: 0.5}}
                    transition={{delay: 0.2, duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x:-50},
                        visible: {opacity: 1, x:0}
                    }}
                >
                    <ActionButton setClickedPage={setClickedPage}>
                        Join
                    </ActionButton>
                    <AnchorLink className='underline font-bold text-sm text-primary-500 hover:text-secondary-500'
                    onClick={() => setClickedPage(EnumPages.ContactUs)}
                    href={`#${EnumPages.ContactUs}`}
                    >
                        <p>Learn More</p>
                    </AnchorLink>
                </motion.div>
            </div>
            {/* IMAGE */}
            <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end'>
                <img src={HomePageGraphic} alt='home-page-graphic' />
            </div>
        </motion.div>
        {/* SPONSORS */}
        {isMediaQueryAbove && (
            <div className='h-[100px] w-full bg-primary-100 py-10 mx-auto '>
                <div className='mx-auto w-5/6'>
                    <div className='flex w-3/5 items-center justify-between gap-8'>
                        <img src={SponsorForbes} alt='sponsor-forbes' />
                        <img src={SponsorRedBull} alt='sponsor-red-bull' />
                        <img src={SponsorFortune} alt='sponsor-fortune' />
                    </div>
                </div>
            </div>
        )}
    </section>
  )
}

export default Home