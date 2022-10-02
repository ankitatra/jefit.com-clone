import { Box } from '@chakra-ui/react'
import React from 'react'
import MuscelGroup from './1top/MuscelGroup'
import New from './2middle/New'
import Footer from '../Components/footer'
const Exercise = () => {
  return (
    <Box>
      <MuscelGroup/>
        <New/>
        <Footer />
    </Box>
  )
}

export default Exercise