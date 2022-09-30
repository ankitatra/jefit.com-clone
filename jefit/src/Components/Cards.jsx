import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faChevronDown ,faCoffee,faFacebook} from '@fortawesome/free-solid-svg-icons'
import { faStar ,faCertificate,faCrown} from '@fortawesome/free-solid-svg-icons'
const Cards = () => {
    return (
        <div >
            
            <FontAwesomeIcon icon={faCertificate}/>
            <FontAwesomeIcon icon={faCrown}/>
            <br />
            <br />
            <br />
            <br />
            <h1 style={{ textAlign: 'center' }}><b>PLANS THAT SUIT YOU BEST</b></h1>
            <br />
            <br />
            <div className="card-group" style={{marginLeft:"20px"}}>
               <div className="container">
                <div className="container">
                <div className="row" style={{display:"flex", marginLeft:"50px", marginRight:"80px"}}>
                    <div className="col-md-4" style={{paddingTop:"60px",backgroundColor: '#54595F', color: 'white', padding:"20px", width:"30%", borderRadius:"10px", paddingBottom:"30px"}}>
                    <img style={{width:"200px"}} src="star.svg" alt="" />
                   
                    <div className="card" style={{backgroundColor: '#54595F', color: 'white', border:"none", paddingLeft:"60px"}}>
                    <div className='iconCard' style={{backgroundColor:"white", height:"40px",width:"40px",borderRadius:"100%"}}>
                        <FontAwesomeIcon icon={faStar} style={{color:"black",marginTop:"10px"}}/>        
                    </div>
                    <h1 className='cardsData' style={{fontSize:"50px"}}>Free </h1>
                    <p className='cardsData'>Basic</p>
                    <p className='cardsData'>Ads supported </p>
                    <p className='cardsData'>Flexible workout planner </p>
                    <p className='cardsData'>Top-notch log tracker </p>
                    <p className='cardsData'>1400+ exercises library </p>
                    <p className='cardsData'>Body stats tracking tools </p>
                    <p className='cardsData'>Support interval training </p>
                    
                </div>
                <button className="btnall" style={{border:"2px solid white" ,fontSize:"14px",backgroundColor:"#54595F"}}>FREE DOWNLOAD</button>
                    </div>
                    <div className="col-md-4" style={{paddingTop:"60px",backgroundColor: '#54595F', color: 'white', padding:"20px", width:"30%", marginLeft:"30px", borderRadius:"10px"}}>
                    <img style={{width:"200px"}} src="certfct.svg" alt="" />
                    <div className="card" style={{backgroundColor: '#54595F', color: 'white', border:"none", paddingLeft:"60px"}}>
                    <div className='iconCard' style={{backgroundColor:"white", height:"40px",width:"40px",borderRadius:"100%"}}>
                        <FontAwesomeIcon icon={faCertificate} style={{color:"black",marginTop:"10px"}}/>        
                    </div>
                    <h1 className='cardsData' style={{fontSize:"50px"}}>Elitly   Monthly </h1>
                  
                    <p className='cardsData'>$12.99/monthly</p>
                    <p className='cardsData'>All BASIC plan features</p>
                    <p className='cardsData'>No ads</p>
                    <p className='cardsData'>Comprehensive training reports </p>
                    <p className='cardsData'>Advance Tracking</p>
                    <p className='cardsData'>Features </p>
                    <p className='cardsData'>Compare Records with </p>
                    <p className='cardsData'>friends</p>
                    <p className='cardsData'>Excersise tips from JEFIT </p>
                    <p className='cardsData'>experts </p>
                    <p className='cardsData'>Premium workout plans </p>
                    <p className='cardsData'>More... </p>
   

                    
                </div>
                <button className="btnall" style={{ fontSize:"14px"}}>FREE DOWNLOAD</button>
                    </div>
                    <div className="col-md-4" style={{paddingTop:"60px",backgroundColor: '#54595F', color: 'white', padding:"20px" , width:"30%", marginLeft:"30px", borderRadius:"10px"}}>
                    <img style={{width:"200px"}} src="crown.svg" alt="" />
                    <div className="card" style={{backgroundColor: '#54595F', color: 'white', border:"none", paddingLeft:"60px"}}>
                    <div className='iconCard' style={{backgroundColor:"white", height:"40px",width:"40px",borderRadius:"100%"}}>
                        <FontAwesomeIcon icon={faCrown} style={{color:"black",marginTop:"10px"}}/>        
                    </div>
                    <h1 className='cardsData' style={{fontSize:"55px"}}>Elitly     Yearly </h1>
                    <p className='cardsData'>$5.83/monthly</p>
                    <p className='cardsData'>All BASIC plan features</p>
                    <p className='cardsData'>No ads</p>
                    <p className='cardsData'>Comprehensive training reports </p>
                    <p className='cardsData'>Advance Tracking</p>
                    <p className='cardsData'>Features </p>
                    <p className='cardsData'>Compare Records with </p>
                    <p className='cardsData'>friends</p>
                    <p className='cardsData'>Excersise tips from JEFIT </p>
                    <p className='cardsData'>experts </p>
                    <p className='cardsData'>Premium workout plans </p>
                    <p className='cardsData'>More... </p>
                </div>
                <button className="btnall" style={{ fontSize:"14px"}}>FREE DOWNLOAD</button>
                    </div>
                </div>
                </div>
               </div>
                
            </div>
        </div>
    )
}

export default Cards