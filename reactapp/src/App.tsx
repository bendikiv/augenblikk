import React from "react";
import "./App.css";
import { ChakraProvider, Heading, IconButton } from "@chakra-ui/core";
import { Slideshow } from "./Slideshow";
import { ImageStoreProvider } from "./ImageStore";
import { AddIcon } from "@chakra-ui/icons";
import { AddImage } from "./AddImage";

export interface Image {
  id?: string;
  url: string;
  description: string;
  date?: Date;
}

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
