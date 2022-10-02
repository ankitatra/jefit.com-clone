import { Box,Button, Flex ,Image ,Spacer,Text } from '@chakra-ui/react'
import React from 'react'
import data from './shoulderdata'
import '../styles.css'
import Footer from '../../../../Components/footer'
const Shoulder = () => {
  return (
    <Box>
        <Box w="80%"  m="auto">
            <br />
        <Text className="heading">Shoulders Exercise Database</Text>
        <hr />
            {
                data.map((e)=>(
                    <Flex gap="2rem" justifyContent="center" align="center" bgColor={e.bg} key={e.url1}>
                        <Box>
                            <Image p={3} w={200} src={e.url1}/>
                        </Box>
                        <Box>
                            <Image p={3} w={200} src={e.url2}/>
                        </Box>
                        <Box>
                            <Text className="title">{e.info.Title}</Text>
                            <br />
                            <Text className="info">{e.info.group}</Text>
                            
                            <Text className="info">{e.info.type}</Text>
                            
                            <Text className="info">{e.info.equip}</Text>
                        </Box>
                        <Spacer/>
                        <Box >
                            <Button bgColor={"#2f9dd8"} className="button">{e.button}</Button>
                        </Box>
                    </Flex>
                ))
            }
        </Box>
        <Footer/>
    </Box>
  )
}

export default Shoulder