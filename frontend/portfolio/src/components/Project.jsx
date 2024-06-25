import { useState, useEffect } from 'react'

const Project = () => {
  const [projects, setProjects] = useState(null)


  useEffect(() => {
    fetch(`http://localhost:3000/projects`, {
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
        <h1 className="text-5xl text-center mt-10 text-white mb-8">My Projects</h1>
        {projects.map((item, index) => (
          <div className='project text-white m-12 p-4 border rounded-lg shadow-lg' key={index}>
            <h2 className="text-2xl font-bold mb-4">{item.name}</h2>
            <div className="flex justify-center space-x-4">
              <a className="text-blue-500 hover:text-blue-700" href={item.github}>Github Link</a>
              <a className="text-blue-500 hover:text-blue-700" href={item.live}>Live</a>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  

  return projects ? loaded() : <h1>Loading...</h1>
}

export default Project