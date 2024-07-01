import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen background text-white">
          <h1 className=' text-4xl'>No Page Found</h1>
          <Link className="text-blue-500 hover:text-blue-700 mt-6" to={'/'}>Home Page</Link>
        </div>
  )
}

export default NotFound