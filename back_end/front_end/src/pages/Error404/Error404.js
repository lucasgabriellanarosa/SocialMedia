import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div>
        <h1>Page not found</h1>
        <h2>Error 404</h2>
        <Link to={'/'}>Go back to app</Link>
    </div>
  )
}

export default Error404