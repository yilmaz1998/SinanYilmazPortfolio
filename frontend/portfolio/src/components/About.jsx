import { useState, useEffect } from 'react'

const About = () => {
  const [about, setAbout] = useState(null)


  useEffect(() => {
    fetch(`http://localhost:3000/about`, {
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
    <div className='flex m-8'>
    <div className='image w-1/4 mt-6'>
      <img src="/src/assets/71781841581__860736E2-D137-4916-A843-057F800F01A0.jpeg"/>
    </div>
    <div className='about text-white w-3/4 text-center mt-6 ml-4'>
      <h1 className='text-5xl'>About Me</h1>
      <h2 className='mt-4'><span className='font-bold'>Name:</span> {about.name}</h2>
      <h2 className='mt-4'><span className='font-bold'>Date of Birth: </span> {about.dateofbirth}</h2>
      <h2 className='mt-4'><span className='font-bold'>Place of Birth: </span> {about.placeofbirth}</h2>
      <p className='mt-4'>{about.bio}</p>
    </div>
    </div>
  )

  return about ? loaded() : <h1>Loading...</h1>
}

export default About