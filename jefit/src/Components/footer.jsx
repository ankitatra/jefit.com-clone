import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="container-fluid" style={{backgroundColor: "#F8FBFE", padding:"80px", height:"200px"}}>
        <div className="container" >
            <div className="row" style={{display:"flex",}}>
                <div className="col-md-3">
                    <p><b>Product</b></p>
                    <p className="pall">Elite Membership</p>
                    <p className="pall">Coach</p>
                    <p className="pall">Signup</p>
                    <p className="pall">Login</p>
                </div>
                <div className="col-md-3">
                    <p><b>Resource</b></p>
                    <p className="pall">Workout Plans</p>
                    <p className="pall">Exercises Database</p>
                    <p className="pall">Help Center</p>
                </div>
                <div className="col-md-3">
                    <p><b>Legal Press
</b></p>
                    <p className="pall">Privacy Policy</p>
                    <p className="pall">Terms of Use</p>
                    <p className="pall">IP / DMCA Notices</p>
                    <p className="pall">Press & Media</p>
                </div>
                <div className="col-md-3">
                    <p><b>Follow US</b></p>
                    <p className="pall">Blog</p>
                    <p className="pall">Facebook</p>
                    <p className="pall">Twitter</p>
                    <p className="pall">Instagram</p>
                </div>
                </div>
                <br />
                <br />
                <div style={{ textAlign: 'center' }}>
                <p className="pall">Copyright © 2010 - 2022 Jefit, Inc.</p>
                <p className="pall">All Rights Reserved.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer