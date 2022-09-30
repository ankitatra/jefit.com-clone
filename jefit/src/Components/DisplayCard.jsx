import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faChevronDown ,faCoffee,faFacebook} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram ,faTwitter} from '@fortawesome/free-brands-svg-icons'

const DisplayCard = () => {
    return (
        <div>
            <div className="container-fluid" style={{ backgroundColor: '#0274be', padding:"40px" ,}}>
                <div className="container">
                <div className="row" style={{display:"flex"}}>
                    <div className="col-md-6"  style={{ width:"70%",gap:"30px" ,width:"60%"}}>
                        <br />
                        <h3 className='disph1'><span className='span' style={{marginLeft:"40px"}}> MANAGE & TRACK</span><span className='span' style={{marginLeft:"40px"}}>ALL YOUR WORKOUTS</span><span className='span' style={{marginLeft:"40px"}} >IN ONE PLACE</span></h3>
                        <br />
                        <h5 className="disph5" style={{fontSize:"40px",marginTop:"-10px"}}>#1 Popular Workout Tracking Platform<span className='span' style={{marginLeft:"40px"}}>Stay Strong Together</span></h5>
                            <div>
                                <div className="row" style={{display:"flex",gap:"20px"}}>
                                    <div className="col-md-6">
                                        <br />
                                        <img src="https://www.jefit.com/wp/wp-content/uploads/2021/11/googleplay.png" alt="" />
                                        <br/>
                                        <br />
                                        <img src="https://www.jefit.com/wp/wp-content/uploads/2021/11/appstore.png" alt="" />
                                    </div>
                                    <div className="col-md-6">
                                        <img src="https://www.jefit.com/wp/wp-content/uploads/2021/11/qrcode_white.png" alt="" />
                                    </div>
                                </div>
                            <div className='fonticon'>
                                <div style={{display:"flex",width:"50%",marginLeft:"350px",gap:"20px"}}>
                                    <div>
                                        <FontAwesomeIcon icon={faTwitter}  style={{color:"white"}}/>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon icon={faFacebook}  style={{color:"white"}} /> 
                                    </div>
                                    <div>
                                        <FontAwesomeIcon icon={faInstagram}   style={{color:"white"}}/>
                                    </div>
                                 </div>
                              
                            
                            
                            </div>
                            </div>
                    
                    </div>
                    <div className="col-md-6" >
                        <div className="container" style={{width:"100%"}}>
                            <img className='img-fluid' src="https://www.jefit.com/wp/wp-content/uploads/2022/03/website_hero_watch-2048x1707.png" alt="" style={{height:"500px",width:"600px",marginTop:"100px",position:"absolute",left:"745px"}}/>
                        </div>
                    </div>
                </div>
                </div>
               
            </div>
        </div>
    )
}

export default DisplayCard