import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/core";
import { Slideshow } from "./Slideshow";
import { ImageStoreProvider } from "./ImageStore";

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
        <ImageStoreProvider>
          <Slideshow />
        </ImageStoreProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
