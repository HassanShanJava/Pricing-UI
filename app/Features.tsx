import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";

import Star from "../public/Star.svg";
import Fee from "../public/Fee.svg";
import Reload from "../public/Reload.svg";
import Image from "next/image";

const Features = () => {
  return (
    <Box  mx="auto" my="50px">
      <Flex direction={["column", "column", "row"]} justifyContent={"space-between"} alignItems={["flex-start","flex-start","center"]} maxW="900px" mx={[10,20,"auto"]}>
        <HStack my={[2,2,]}  >
          <Image src={Star} alt="/" />
          <Text fontWeight={"bold"} px="20px">30 days money back Guarantee</Text>
        </HStack>

        <HStack  my={[2,2,]}>
          <Image src={Fee} alt="/" />
          <Text fontWeight={"bold"} px="20px">No setup fees 100% hassle-free</Text>
        </HStack>

        <HStack  my={[2,2,]}>
          <Image src={Reload} alt="/" />
          <Text fontWeight={"bold"} px="20px">No monthly subscription Pay once and for all</Text>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Features;
