import React from "react";
import "./App.css";
import { ChakraProvider, Heading } from "@chakra-ui/core";
import { Slideshow } from "./Slideshow";

function App() {
  return (
    <div className="example-container">
      <ChakraProvider>
        <Heading position="absolute" zIndex="900" right="0" top="0" p="1rem">
          Augenblikk
        </Heading>
        <Slideshow />
      </ChakraProvider>
    </div>
  );
}

export default App;
