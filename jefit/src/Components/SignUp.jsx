import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div style={{ backgroundColor: '#DBE8F4' }}>
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }} >
                <img style={{ width: "140px" }} src="https://www.jefit.com/images/jefit_logo_website_signuplogin.svg" alt="" />
            </div>
            <div className="loginbox">
                <div className="center">
                    <div className="title">create account</div>
                    <div className="title2">continue with</div>
                    <div className='icondiv'>
                        <img src="https://www.jefit.com/images/rg_google.svg" alt="" className="icon" />
                        <img src="https://www.jefit.com/images/rg_fb.svg" alt="" className="icon" />
                        <img src="https://www.jefit.com/images/rg_apple.svg" alt="" className="icon" />
                    </div>
                    <div className="title2">Or</div>
                    <div className='container'>
                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter a username" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email Address</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter your email" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Password" />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Confirm password" />
                        </div>
                        <button style={{textAlign:"center", marginLeft:"86px"}} className="btnall">Create account</button>
                        
                    </div>
                    <br />
                    <div style={{ textAlign: 'center' }}>
                    <p style={{display: 'flex', justifyContent: 'center'}} > <b>Already a member ? </b><Link to="/login"><p> Sign-in </p></Link>  </p>
                    </div>
                    
                </div>
            </div>
            <br />
        </div>
    )
}

export default Signup