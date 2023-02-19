// pages/_app.js

"use client";
import { ChakraProvider, Heading } from "@chakra-ui/react";
import Header from "./Header";
// import Practice from "./Practice";


export default function Home() {
  return (
    <ChakraProvider>
      {/* <Practice/> */}
      <Header />
    </ChakraProvider>
  );
}
