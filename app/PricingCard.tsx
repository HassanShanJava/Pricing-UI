import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const PricingCard = () => {
  return (
    <Box >
      <Flex >
        <Box bg={"#f0eafb"} p={"60px"}  textAlign={"center"}>
          <Text fontWeight={"bold"} fontSize={"24px"}>
            Premium PRO
          </Text>
          <Heading fontSize={"60px"}>$329</Heading>
          <Text>billed just once</Text>
          <Button mt={"20px"} w={"300px"} bg={"#805AD5"} color={"white"}>Get Started</Button>
        </Box>
        <Box>b2</Box>
      </Flex>
    </Box>
  );
};

export default PricingCard;
