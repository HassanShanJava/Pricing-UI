// pages/_app.js

"use client";
import { ChakraProvider, Heading } from "@chakra-ui/react";
import Features from "./Features";
import Header from "./Header";
import PricingCard from "./PricingCard";
// import Practice from "./Practice";


export default function Home() {
  return (
    <ChakraProvider>
      {/* <Practice/> */}
      <Header />
      <PricingCard/>
      <Features/>
    </ChakraProvider>
  );
}
