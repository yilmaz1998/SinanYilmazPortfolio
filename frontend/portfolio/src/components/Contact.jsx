import { useState, useEffect } from 'react'
import { motion } from 'framer-motion';

const Contact = () => {
  const [contact, setContact] = useState(null)


  useEffect(() => {
    fetch(`http://localhost:3000/contact`, {
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then((res) => {
      if(res.ok) {
        return res.json()
      } else {
        throw new Error ('Failed to fetch')
      }
    })
    .then((data) => setContact(data))
    .catch((error) => console.error('Error fetching data:', error))
  }, [])

  const loaded = () => (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className='flex flex-col items-center justify-center h-screen text-white background'
  >
    <motion.h1 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className='text-5xl mb-4'
    >
      Contact Me
    </motion.h1>
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <a className='text-blue-500 hover:text-blue-700' href={`mailto:${contact.email}`}>Mail Me</a>
      <a className="text-blue-500 hover:text-blue-700 ml-4" href={contact.github}>Github</a>
      <a className="text-blue-500 hover:text-blue-700 ml-4" href={contact.linkedin}>LinkedIn</a>
    </motion.div>
  </motion.div>
  )

  return contact ? loaded() : <h1>Loading...</h1>
}

export default Contact