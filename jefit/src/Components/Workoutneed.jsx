import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const Workoutneed = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <br />
            <br />
            <br />
            <div className="container">
                <div className="container"  >

                    <h1>JEFIT COVERS ALL OF YOUR WORKOUT NEEDS</h1>
                    <br />
                    <br />
                    <br />
                    <div className="container">
                        <div className="row" style={{display:"flex",width:"100%",}}>
                            <div className="col-md-6" style={{width:"50%"}}>
                                <div className="container">
                                    <img className="img-fluid" src="https://www.jefit.com/wp/wp-content/uploads/2022/08/web1.png" alt=""  style={{width:"80%"}}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h6 className='workout' style={{fontSize:"20px"}}>WORKOUT TRACKING</h6>
                                <h2 className='workout' style={{fontSize:"30px"}}>PERSONALIZE YOUR WORKOUT PLANS</h2>
                                <ul style={{ listStyle: "none", verticalAlign: "baseline", textAlign: "justify", fontSize: "25px" }}>
                                    <br />
                                    <br />
                                    {/* <FontAwesomeIcon icon={faCoffee} /> */}
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: "5%", color:"blue" }}>
                                        <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z" />
                                    </svg>
                                    <li >1400+ exercises with instructions</li>
                                    </span>
                                    <br />
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: "5%", color:"#0091ff" }}>
                                        <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z" />
                                    </svg>
                                    <li>Pro-designed workout plans</li>
                                    </span>
                                    <br />
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: "5%", color:"#0091ff" }}>
                                        <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z" />
                                    </svg>
                                    <li>Support custom exercises</li>
                                    </span>
                                    <br />
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: "5%", color:"#0091ff" }}>
                                        <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z" />
                                    </svg>
                                    <li>Flexible workout planning tool</li>
                                    </span>
                                </ul>
                                <button className="btnall" style={{ display: "flex", justifyContent: "start" }}>JOIN NOW</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Workoutneed