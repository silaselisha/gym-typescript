import React from 'react'
import { EnumPages } from '@/shared/types'
import { motion } from 'framer-motion'
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
import { useForm } from 'react-hook-form'
import Htext from '@/components/Htext'

type Props = {
    setClickedPage: (value: EnumPages) => void
}




const ContactUs = ({ setClickedPage }: Props) => {
    const inputStyles = `mb-5 rounded-lg w-full border-2 bg-primary-300 px-5 py-3 placeholder-white`

    const { trigger, register, formState: { errors }} = useForm()
    
    const onSubmit = async (event: any) => {
        const isValid = await trigger()
        if(!isValid) {
            event.preventDefault()
        }
    
    }

  return (
    <section id='contactus' className='mx-auto w-5/6 pb-32 pt-24'>
        <motion.div onViewportEnter={() => setClickedPage(EnumPages.ContactUs)}>
            {/* HEADER */}
            <motion.div className='md:w-3/5'
            initial='hidden'
            whileInView={'visible'}
            transition={{duration: 0.5}}
            viewport={{once: true, amount: 0.5}}
            variants={{
                hidden: {opacity: 0, x:-50},
                visible: {opacity: 1, x: 0}
            }}
            >
                <Htext>
                    <span className='text-primary-500'>Join Now</span>{' '}To Get In Shape
                </Htext>
                <p className='my-5'>Are you ready to take your fitness journey to the next level? Look no further than our state-of-the-art gym, equipped with the latest equipment and amenities to help you reach your goals. </p>
            </motion.div>
            {/* FORM AND IMAGE */}
            <div className='mt-10 md:flex justify-center items-center gap-8'>
                <motion.div className='basis-3/5 mt-10 md:mt-0'
                initial='hidden'
                whileInView={'visible'}
                viewport={{once: true, amount: 0.5}}
                variants={{
                    hidden: {opacity: 0, y: 50},
                    visible: {opacity: 1, y: 0}
                }}
                transition={{duration: 0.5}}
                >
                    <form action='https://formsubmit.co/silaselisha66@gmail.com' target='_blank' onSubmit={onSubmit} method='post'>
                        <input type='text' id='name' className={inputStyles} placeholder='NAME' {...register('name', {required: true, maxLength: 100})}/>
                        {errors.name?.type === 'required' && (
                            <p className='text-primary-300 mt-5'>
                                Field is required
                            </p>
                        )}
                        {errors.name?.type === 'maxLength' && (
                            <p className='text-primary-300 mt-1'>
                                Max length 100 characters
                            </p>
                        )}
                        <input type='email' id='email' className={inputStyles} placeholder='EMAIL' {...register('email', {required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})}/>
                        {errors.name?.type === 'required' && (
                            <p className='text-primary-300 mt-5'>
                                Field is required
                            </p>
                        )}
                        {errors.name?.type === 'pattern' && (
                            <p className='text-primary-300 mt-1'>
                                Invalid email address
                            </p>
                        )}
                        <textarea id='message' className={inputStyles} placeholder='MESSAGE' {...register('message', {required: true, maxLength: 2000})} rows={4} cols={5} />
                        {errors.name?.type === 'required' && (
                            <p className='text-primary-300 mt-5'>
                                Field is required
                            </p>
                        )}
                        {errors.name?.type === 'maxLength' && (
                            <p className='text-primary-300 mt-1'>
                                Max length 2000 characters
                            </p>
                        )}

                        <button type='submit' className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'>
                            Submit
                        </button>
                    </form>
                </motion.div>
                <motion.div className='relative mt-16 md:mt-0 basis-2/5'   initial='hidden'
                whileInView={'visible'}
                viewport={{once: true, amount: 0.5}}
                variants={{
                    hidden: {opacity: 0, y: 50},
                    visible: {opacity: 1, y: 0}
                }}
                transition={{delay: 0.5, duration: 0.5}}>
                    <div className='md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]'>
                        <img src={ContactUsPageGraphic} alt='contact-us-page-graphic' className='w-full'/>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default ContactUs