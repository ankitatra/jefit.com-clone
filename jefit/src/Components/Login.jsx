import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='loginpg'>
      <br />
      <br />
      <div style={{ display: 'flex', justifyContent: 'center' }} >
        <img style={{ width: "140px" }} src="https://www.jefit.com/images/jefit_logo_website_signuplogin.svg" alt="" />
      </div>
      <div className="loginbox">
        <div className="center">
          <div className="title">Login</div>
          {/* <div className="title2">continue with</div> */}
          <br />
          <div className='container'>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Password" />
            </div>
            <div className="form-check">

              <label className="form-check-label">
                Remember Me
              </label>
              <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
            </div>
            <button style={{ textAlign: "center", marginLeft: "126px" }} className="btnall">Login</button>

          </div>
          <br />
          <div className="title2">Or continue with</div>
          <div className='icondiv'>
            <img src="https://www.jefit.com/images/rg_google.svg" alt="" className="icon" />
            <img src="https://www.jefit.com/images/rg_fb.svg" alt="" className="icon" />
            <img src="https://www.jefit.com/images/rg_apple.svg" alt="" className="icon" />
          </div>

          <br />
          <div style={{ textAlign: 'center' }}>
            <p style={{ display: 'flex', justifyContent: 'center' }} > <b>New to JEFIT? </b><Link to="/signup"><p> create an account </p></Link>. </p>
          </div>

        </div>
      </div>
      <br />
    </div>
  )
}

export default Login