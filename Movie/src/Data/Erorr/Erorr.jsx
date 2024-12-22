import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Link } from 'react-router-dom'

const Erorr = () => {
  return (
    <div>
        <NavBar/>
      <h1 className='h-100 w-100 text-center justify-content-center text-danger'>Page Not Found</h1>
      <Link to='/'>
      <button className='btn btn-danger text-danger'> go to home</button>
      </Link>
    </div>
  )
}

export default Erorr
