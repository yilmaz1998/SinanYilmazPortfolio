import { useState, useEffect } from 'react'
import { motion } from 'framer-motion';

const Project = () => {
  const [projects, setProjects] = useState(null)


  useEffect(() => {
    fetch(`https://sinanportfolio-e71d315454ee.herokuapp.com/projects`, {
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
    .then((data) => setProjects(data))
    .catch((error) => console.error('Error fetching data:', error))
  }, [])

  const loaded = () => {
    return (
      <div>
        <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl text-white text-center mt-16 mb-8"
      >
        My Projects
      </motion.h1>
      {projects.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="project text-white m-14 p-2 border rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4">{item.name}</h2>
            <h2 className="mb-4">{item.desc}</h2>
            <div className='flex'>
            {item.images.map((image, index) => (
            <img key={index} src={`/images/${image}`} className='w-1/2 p-2'/>
            ))}
            </div>
            <div className="flex justify-center mt-6 space-x-4">
              <a className="text-blue-500 text-lg hover:text-blue-700" href={item.github}>Github Link</a>
              {item.live && <a className="text-blue-500 text-lg hover:text-blue-700" href={item.live}>Live</a>}
            </div>
          </motion.div>
        ))}
      </div>
    );
  }
  
  

  return projects ? loaded() : <h1>Loading...</h1>
}

export default Project