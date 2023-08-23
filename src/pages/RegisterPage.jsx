import React from 'react'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <body>
      <div className="container">
        <div className="form">
          <form>
            <h3>Welcome <Link to='/'><span>Project Diary</span></Link></h3>
            <label htmlFor="fname">Name</label>
            <input type="text" name='fname' id='fname'
                   placeholder='Your name ...'/>

            <label htmlFor="uname">Username</label>
            <input type="text" name='uname' id='uname'
                   placeholder='@username'/>

            <label htmlFor="email">Email</label>
            <input type="email" name='email' id='email'
                    placeholder='example@gmail.com'/>

            <label htmlFor="password">Create Password</label>
            <input type="password" name='password' id='password'
                   placeholder='password'/>

            <input type="submit" value="Create Account" />

            <p className="bottom__text">
              Already have an account? <Link to="/login">Log In</Link>
            </p>
          </form>
        </div>
      </div>
    </body>  
)
}

export default RegisterPage