import React, { useContext } from "react";
import "./App.css";
import { Heading } from "@chakra-ui/core";
import { UserContext } from "./login/UserProvider";
import { LoginContainer } from "./login/Login";
import { SlideshowContainer } from "./slideshow/SlideshowContainer";

export function App() {
  const user = useContext(UserContext);

  return (
    <div className="app-container">
      <Heading position="absolute" zIndex="900" right="0" top="0" p="1rem">
        Augenblikk
      </Heading>
      {user ? <SlideshowContainer /> : <LoginContainer />}
    </div>
  );
}

export default App;
