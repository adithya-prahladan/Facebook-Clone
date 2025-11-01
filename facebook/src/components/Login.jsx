import React from 'react'
import './Login.css'


function Login() {
  return (
    <div className='container'>
        <div className='left'>
            <h1>facebook</h1>
            <h2>Facebook helps you connect and share with the people in your life.</h2>
        </div>
        <div className='right'>
          <div className='rightCard'>
              <input type="text" placeholder='Email address or phone number' required />
              <input type="password" placeholder='Password' required /><br /><br />
              <a href="/home" id='log'><button id='login'>Log in</button></a><br /><br />
              <a href="#">Forgotten password</a><br />
              <hr />
              <a href="/signUp"><button id='newAccount'>Create new account</button></a>
          </div>
          <div className='bottomLink'>
              <p>
                <span>Create a Page</span> for a celebrity ,brand or business.
              </p>
          </div>
        </div>
    </div>
  )
}

export default Login