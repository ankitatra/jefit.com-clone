import {Box,Button,Image, Flex, Heading , Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'
import img from "./img/jefit_Muscle_Img.png"

const MuscleGroup = () => {
  return (
    <Box display="block">
        <Box>
            <br />
        <Heading variant="solid">EXERCISES BY MUSCLE GROUP</Heading>
        <Text variant={"solid"}>Find exercises that work out the muscle groups you're targeting.</Text>
        </Box>
         <Box>
            <Flex justifyContent="center" >
                <Box >
                    <br />
                    <br />
                 <Link to="/triceps"><Button variant={"outline"} ml={8}>Triceps</Button></Link>   
                    <br />
                    <br />
                    <br />
                <Link to="/biceps"><Button variant="outline" ml={9}>Biceps</Button></Link>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                <Link to="/back"><Button variant="outline" ml={10}>Back</Button></Link>
                    
                    <br />
                    <br />
                <Link to="/glutes"><Button variant="outline" ml={9}>Glutes</Button></Link>
                    <br />
                    <br />
                    <br />
                <Link to="/lowerLeg"><Button variant="outline">Lower Legs</Button></Link>
                </Box>
                <Box >
                    <Image w={400} src={img}/>
                    <br />
                    <br />
                    <Link to="/"></Link><Button variant="outline" ml="149">Cardio</Button>
                </Box>
                <Box>
                     <br />
                     <br />
             <Link to="/shoulder"><Button variant="outline">Shoulders</Button></Link>
                    <br />
                    <br />
                    <br />
                    <Link to="/chest"><Button variant="outline">Chest</Button></Link>
                    <br />
                    <br />
                    <br />
                    <Link to="/forearms"><Button variant="outline">Forearms</Button></Link>
                    <br />
                    <br />
                    <br />
                    <Link to="/abs"><Button variant="outline">Abs</Button></Link>
                    <br />
                    <br />
                    <br />
                    <Link to="/upperleg"><Button variant="outline">Upper Legs</Button></Link>
                </Box>
            </Flex>
        </Box>

    </Box>
  )
}

export default MuscleGroup



