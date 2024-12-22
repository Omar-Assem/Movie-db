import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar'
import Joi from 'joi'
import { log } from 'joi-browser'

const Login = () => {
    const [login, setLogin] = useState({
        email:'',
        password:'',
    })
    const changeUser = (e) => {
        let user = login
        user[e.target.name] = e.target.value
        setLogin(user)
        console.log(login)
        handleValidate
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(login)
    }
    const handleValidate = () => {
 Joi.object({
        email: Joi.string().email({tlds:{allow:false}}).required(),
        password: Joi.string().required().min(6).max(30),
      }
      
    )
  }
  console.log(handleValidate)

  return (
    <>
    <NavBar/>
    <h1 className='text-center text-danger'>Login</h1>
    <form action="" onSubmit={handleSubmit}>
    <div className="m-auto">
    <div className=" w-25 text-center">
  <input type="email" className="form-control " id="floatingInput" placeholder="Email" onChange={changeUser} name='email'/>
  <label htmlFor="floatingInput"></label>
</div>
<div className=" w-25">
  <input type="password" className="form-control  " id="floatingPassword" placeholder="Password"onChange={changeUser} name='password'/>
  <label htmlFor="floatingPassword"></label>
</div>
    </div>
    </form>
  
 <button className='btn btn-outline-danger'>Login</button>
    </>
  )


}
export default Login
