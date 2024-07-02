import { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import profilePicture from '../assets/71781841581__860736E2-D137-4916-A843-057F800F01A0.jpeg'

const About = () => {
  const [about, setAbout] = useState(null)


  useEffect(() => {
    fetch(`https://sinanportfolio-e71d315454ee.herokuapp.com/about`, {
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
    .then((data) => setAbout(data))
    .catch((error) => console.error('Error fetching data:', error))
  }, [])

  const loaded = () => (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='flex justify-center m-8'
  >
  <div className='about text-white p-6 rounded-lg shadow-lg text-center'>
    <img className='picture w-1/6 mx-auto rounded-full mb-4' src={profilePicture} alt="Profile Picture"/>
    <h1 className='text-5xl mb-2'>About Me</h1>
    <div className='text-left'>
      <h2 className='text-lg font-bold mt-4'>Name:</h2>
      <p className='text-lg'>{about.name}</p>
      <h2 className='text-lg font-bold mt-4'>Date of Birth:</h2>
      <p className='text-lg'>{about.dateofbirth}</p>
      <h2 className='text-lg font-bold mt-4'>Place of Birth:</h2>
      <p className='text-lg'>{about.placeofbirth}</p>
      <h2 className='text-lg font-bold mt-4'>Bio:</h2>
      <p className='text-lg'>{about.bio}</p>
    </div>
  
  </div>
</motion.div>
)

  return about ? loaded() : <h1>Loading...</h1>
}

export default About