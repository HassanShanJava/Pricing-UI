import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'



const Header = () => {
  return (
    <Box px={[10,10,]} textAlign={["left","left" ,"center"]} bg={"#6B46C1"} pt={"70px"} pb="250px" color="white"> 
        <Heading >Simple pricing for your business</Heading>
        <Text pt="10px">Plans that are carefully crafted to suit your business.</Text>
    </Box>
   )
}

export default Header