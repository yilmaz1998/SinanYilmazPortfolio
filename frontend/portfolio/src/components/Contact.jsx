import { useState, useEffect } from 'react'

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
    <div className='flex flex-col items-center justify-center h-screen text-white contact'>
    <h1 className='text-5xl mb-4'>Contact Me</h1>
    <div>
    <a className='text-blue-500 hover:text-blue-700' href={`mailto:${contact.email}`}>Mail Me</a>
    <a className="text-blue-500 hover:text-blue-700 ml-4" href={contact.github}>Github</a>
    <a className="text-blue-500 hover:text-blue-700 ml-4" href={contact.linkedin}>LinkedIn</a>
    </div>
    </div>
  )

  return contact ? loaded() : <h1>Loading...</h1>
}

export default Contact