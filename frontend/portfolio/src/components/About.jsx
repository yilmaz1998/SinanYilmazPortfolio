import { useState, useEffect } from 'react'
import { motion } from 'framer-motion';

const About = () => {
  const [about, setAbout] = useState(null)


  useEffect(() => {
    fetch(`https://sinanportfolio-e71d315454ee.herokuapp.com/about`, {
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('Failed to fetch')
        }
      })
      .then((data) => setAbout(data))
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

  useEffect(() => {
    document.title = about ? "About | Sinan Yilmaz" : 'Loading...';
  }, [about]);

  const loaded = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="about flex justify-center mx-64"
    >
      <div className="about text-white p-6 rounded-lg shadow-lg text-center">
        <h1 className='text-5xl mb-10 mt-10'>About Me</h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-left"
        >
          <h2 className="text-lg font-bold mt-4">Name:</h2>
          <p className="text-lg">{about.name}</p>
          <h2 className="text-lg font-bold mt-4">Date of Birth:</h2>
          <p className="text-lg">{about.dateofbirth}</p>
          <h2 className="text-lg font-bold mt-4">Place of Birth:</h2>
          <p className="text-lg">{about.placeofbirth}</p>
          <h2 className="text-lg font-bold mt-4">Bio:</h2>
          <p className="text-lg">{about.bio}</p>
          <h1 className='text-5xl text-center mt-8 mb-8'>My Skills</h1>
          <div className='text-left'>
          <h2 className="text-lg font-bold mt-4">Languages:</h2>
          <p className='text-lg mb-2'>JavaScript, Python, HTML, CSS</p>
          <h2 className="text-lg font-bold mt-4">Front-End Libraries:</h2>
          <p className='text-lg mb-2'>React, Tailwind CSS</p>
          <h2 className="text-lg font-bold mt-4">Back-End Libraries:</h2>
          <p className='text-lg mb-2'>Node.js, Express.js, Embedded JavaScript, Django</p>
          <h2 className="text-lg font-bold mt-4">Databases and others:</h2>
          <p className='text-lg mb-2'>MongoDB, PostgreSQL, RESTful Routing, JSON API</p>
          <h2 className="text-lg font-bold mt-4">Authentication:</h2>
          <p className='text-lg mb-2'>JSON Web Token, Express-Sessions</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );

  return about ? loaded() : <h1>Loading...</h1>
}

export default About