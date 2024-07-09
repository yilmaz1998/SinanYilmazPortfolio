import React from 'react'
import { motion } from 'framer-motion'
import Resume from '../assets/SinanYilmazResume.pdf'

const Welcome = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center h-screen background"
    >
      <motion.h1 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-5xl text-white text-center mb-6'
      >
        Sinan Yilmaz
      </motion.h1>
      <motion.h1 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className='text-xl text-white text-center'
      >
        Software Developer
      </motion.h1>
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        href={Resume}
        className="text-xl mt-4 text-blue-500 hover:text-blue-700"
      >
        View Resume
      </motion.a>
    </motion.div>
  )
}

export default Welcome;
