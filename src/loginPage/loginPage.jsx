import React, { useState, useEffect } from 'react'
import '../mainPage/custom.css'
import { LoginPageFields, RegistrationPageFields } from './loginPageDumb'

const Login = (isLoginPage) => {
  const [LoginPage, setIsLoginPage] = useState(false)
  useEffect(() => {
    setIsLoginPage(isLoginPage)
  }, [isLoginPage])
  const pageFormFields = LoginPage ? LoginPageFields : RegistrationPageFields
  return (
     <>
      <div className='mainLoginComponent'>
          <div className='loginComponent'>
              <p className='LoginPageMainText'>
                  {LoginPage ? 'Login' : 'Registration'}
              </p>
              <form>
              <div>
              {pageFormFields.map((fields, index) => (
                <div key={index} className='loginFields'>
                    <input type='text' placeholder={fields.field} style={{ borderRadius: '7px', borderColor: 'black', borderWidth: '3px' }} />
                </div>
              ))}
              </div>
                <button className='login_btn'>
                    {LoginPage ? 'LogIn' : 'Registration'}
                </button>
              </form>
          </div>
      </div>
     </>
  )
}
export default Login
