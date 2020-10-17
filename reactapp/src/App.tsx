import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/core";
import { Slideshow } from "./Slideshow";

function App() {
  return (
    <div className="app-container">
      <ChakraProvider>
        <Slideshow />
      </ChakraProvider>
    </div>
  );
}

export default App;
