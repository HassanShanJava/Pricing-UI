import { Box, Button, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

import Tick from "../public/Tick.svg"

const PricingCard = () => {
  return (
    <Box px={[4,4,0]} maxW="950px" mx={"auto"} w="full" mt="-190px" >
      <Flex  direction={["column-reverse","column-reverse" ,"column-reverse", "row"]} rounded={"2xl"} boxShadow='lg' overflow="hidden" >
        
        <Box pt="50px" px="50px" bg="white">
          <Text mb="25px">Access these features when you get this pricing package for your business.</Text>
          {/* Horizontally Stack */}
          <HStack mb="16px">
              <Image src={Tick}  alt='/'/>
              <Text>International calling and messaging API</Text>
          </HStack>
          
          <HStack mb="16px">
              <Image src={Tick}  alt='/'/>
              <Text>Additional phone numbers</Text>
          </HStack>
          <HStack mb="16px">
              <Image src={Tick}  alt='/'/>
              <Text>Automated messages via Zapier</Text>
          </HStack>
          <HStack mb="16px">
              <Image src={Tick}  alt='/'/>
              <Text>24/7 support and consulting</Text>
          </HStack>

        </Box>

        <Box bg={"#f0eafb"} p={["60px"]} w="full" maxW={"400px"} textAlign={"center"} >
          <Text fontWeight={"bold"} fontSize={"24px"}>
            Premium PRO
          </Text>
          <Heading fontSize={"60px"}>$329</Heading>
          <Text>billed just once</Text>
          <Button mt={"25px"} maxW={"300px"} w="full" _hover={{bg:"#6842be"}} bg={"#805AD5"} color={"white"}>Get Started</Button>
        </Box>
        
      </Flex>
    </Box>
  );
};

export default PricingCard;
