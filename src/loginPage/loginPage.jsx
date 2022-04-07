import React from 'react'
import '../mainPage/custom.css'
import { LoginPageFields } from './loginPageDumb'

const Login = () => {
  return (
     <>
      <div className='mainLoginComponent'>
          <div className='loginComponent'>
              <p className='LoginPageMainText'>
                  Login
              </p>
              <div>
              {LoginPageFields.map((fields, index) => (
                <div key={index} className='loginFields'>
                    <input type='text' placeholder={fields.field} style={{ borderRadius: '7px', borderColor: 'black', borderWidth: '3px' }} />
                </div>
              ))}
              </div>
              <button className='login_btn'>Log In</button>
          </div>
      </div>
     </>
  )
}
export default Login
