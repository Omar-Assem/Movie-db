import React from 'react'
import NavBar from '../NavBar/NavBar'

const Register = () => {
  return (
    <>
    <NavBar/>
    <h1 className='text-center text-danger'>Register</h1>
       <div className="m-auto">
    <div className=" w-25 text-center">
  <input type="text" className="form-control " id="floatingInput" placeholder="First Name"/>
  <label htmlFor="floatingInput"></label>
</div>
<div className=" w-25">
  <input type="text" className="form-control  " id="floatingPassword" placeholder="last Name"/>
  <label htmlFor="floatingPassword"></label>
</div>
    </div>
    <div className="m-auto">
    <div className=" w-25">
  <input type="text" className="form-control  " id="floatingPassword" placeholder="User Name"/>
  <label htmlFor="floatingPassword"></label>
</div>
    <div className=" w-25 text-center">
  <input type="email" className="form-control " id="floatingInput" placeholder="Email address"/>
  <label htmlFor="floatingInput"></label>
</div>
<div className=" w-25">
  <input type="password" className="form-control  " id="floatingPassword" placeholder="Password"/>
  <label htmlFor="floatingPassword"></label>
</div>
<div className=" w-25">
  <input type="password" className="form-control  " id="floatingPassword" placeholder="Confirm Password"/>
  <label htmlFor="floatingPassword"></label>
</div>
    </div>
    <button className='btn btn-outline-danger'>Register</button>
    </>
  )
}

export default Register
