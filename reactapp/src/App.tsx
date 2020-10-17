import React from "react";
import "./App.css";
import { ChakraProvider, Heading } from "@chakra-ui/core";
import { Slideshow } from "./Slideshow";
import { ImageStoreProvider } from "./ImageStore";
import { AddImage } from "./AddImage";

function App() {
  return (
    <div className="app-container">
      <ChakraProvider>
        <Heading position="absolute" zIndex="900" right="0" top="0" p="1rem">
          Augenblikk
        </Heading>
        <ImageStoreProvider>
          <Slideshow />
          <AddImage />
        </ImageStoreProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
