import { Box,Button, Flex ,Image ,Spacer,Text } from '@chakra-ui/react'
import React from 'react'
import data from './lowerLegsData'
import styles from './lower.module.css'
import Footer from '../../../../Components/footer'
const Legs = () => {
  return (
    <Box>
        <Box w="80%"  m="auto">
            <br />
        <Text className={styles.heading}>Triceps Exercise Database</Text>
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
                            <Text className={styles.title}>{e.info.Title}</Text>
                            <br />
                            <Text className={styles.info}>{e.info.group}</Text>
                            
                            <Text className={styles.info}>{e.info.type}</Text>
                            
                            <Text className={styles.info}>{e.info.equip}</Text>
                        </Box>
                        <Spacer/>
                        <Box >
                            <Button bgColor={"#2f9dd8"} className={styles.button}>{e.button}</Button>
                        </Box>
                    </Flex>
                ))
            }
        </Box>
        <Footer/>
    </Box>
  )
}

export default Legs