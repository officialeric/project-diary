import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <body>
      <div className="container">
        <div className="form">
          <form>
            <h3>Welcome Again</h3>
          
            <label htmlFor="email">Email</label>
            <input type="email" name='email' id='email'
                    placeholder='example@gmail.com'/>

            <label htmlFor="password">Password</label>
            <input type="password" name='password' id='password'
                   placeholder='password'/>

            <input type="submit" value="Sign in" />

            <p className="bottom__text">
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </form>
        </div>
      </div>
    </body>  
)
}

export default LoginPage