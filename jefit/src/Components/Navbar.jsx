import React from 'react'
import { Link } from 'react-router-dom'
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
// import {faCoffee} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#257cff", padding:"20px",height:"40px"}}>
                <div className="container"style={{display:"flex", gap:"50px", marginLeft:"80px",color:"white",fontSize:"larger"}} >
                    <div>
                    <a className="navbar-brand" href="#">
                    <img src="https://www.jefit.com/wp/wp-content/uploads/2017/07/cropped-logo_155_40_white-150x40.webp" alt="" style={{maxWidth:"120px"}} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    </div>
                    <div>
                    <div className="nav-item-dropdown-navbar-nav">
                                <a className="nav-link-dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"white"}}>
                                    Get Jefit App
                                    {/* <i class='fas fa-angle-down'></i> */}
                                    {/* <FontAwesomeIcon icon="faCoffee" /> */}
                                   < FontAwesomeIcon icon={faChevronDown}/>
                                    </a>

                                <ul className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Workout App(iOS)</a>
                                    <a className="dropdown-item" href="#">Workout App(Android)</a>
                                </ul>
                            </div> 
                            
                    </div>
                    <div>
                    <div className="nav-item-dropdown-navbar-nav">
                                <a className="nav-link-dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"white"}}>
                                    Workout Plans
                                    < FontAwesomeIcon icon={faChevronDown}/>  </a>
                                <ul className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Pro-designed Plans</a>
                                    <a className="dropdown-item" href="#">Create My Plans</a>
                                </ul>
                            </div> 
                            
                    </div>
                    <div className="small-div">
                        <p className="nav-item navbar-nav">Excercise Guide</p>
                    </div>
                    <div  className="small-div">
                        <p className="nav-item navbar-nav">Blog</p>
                    </div>
                    <div  className="small-div">
                        <p className="nav-item navbar-nav">Coach</p>
                    </div>
                    <div  className="small-div">
                        <p className="nav-item navbar-nav">Elite</p>
                    </div>
                    <div  className="small-div">
                        <Link to="" style={{color: 'white', textDecoration: 'none'}} >
                        <p className="nav-item navbar-nav">Login</p>
                        </Link>
                        
                    </div>
                    <div>
                        <Link to="">
                        <button className='btn' style={{borderRadius:"5px",width:"120px",height:"35px",color:"#257cff", backgroundColor:"white", marginBottom:"5px"}}>Signup</button>
                        </Link>
                        
                        
                    </div>
                   
                </div>
            </nav>
        </div>
    )
}

export default Navbar