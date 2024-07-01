import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className='text-white m-20 rounded-lg shadow-lg text-center'
  >
        <motion.h1 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-5xl mb-8'
      >
        My Skills
      </motion.h1>
  <div className='text-left'>
    <p className='text-lg mb-2'><span className='font-bold'>Languages:</span> JavaScript, Python, HTML, CSS</p>
    <p className='text-lg mb-2'><span className='font-bold'>Frontend Libraries:</span> React, Tailwind CSS</p>
    <p className='text-lg mb-2'><span className='font-bold'>Backend Libraries:</span> Node.js, Express.js, Embedded JavaScript, Django</p>
    <p className='text-lg mb-2'><span className='font-bold'>Database:</span> MongoDB, PostgreSQL</p>
    <p className='text-lg mb-2'><span className='font-bold'>Authentication:</span> JSON Web Token, Express-sessions</p>
  </div>
</motion.div>
  )
}

export default Skills