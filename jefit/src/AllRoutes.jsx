
import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/SignUp';

import Back from './exercisepage/1top/LeftSection/back/Back'

import Legs from './exercisepage/1top/LeftSection/lowerLegs/Legs'
import Triceps from './exercisepage/1top/LeftSection/triceps/Triceps'

import Chest from './exercisepage/1top/RightSection/chest/Chest'

import Shoulder from './exercisepage/1top/RightSection/shoulder/Shoulder'
import Upperlegs from './exercisepage/1top/RightSection/upperlegs/Upperlegs'
import Exercise from './exercisepage/Exercise'


const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path='/exercise' element={<Exercise/>}/>
           
           <Route path='/triceps' element={<Triceps/>}/>
         
           <Route path='/back' element={<Back/>}/>
          
           <Route path='/lowerleg' element={<Legs/>}/>
           <Route path='/shoulder' element={<Shoulder/>}/>
           <Route path='/chest' element={<Chest/>}/>
          
           
           <Route path='/upperleg' element={<Upperlegs/>}/>
           
            </Routes>
        </div>
    )
}

export default AllRoutes









