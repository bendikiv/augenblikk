import React from "react";
import { Box, Image } from "@chakra-ui/core";
import { BrowserRouter, Route } from "react-router-dom";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

export const LoginContainer = () => {
  return (
    <Box width="50%">
      <BrowserRouter>
        <Route path="/">
          <Image
            position="absolute"
            left="0"
            top="0"
            src="https://images.unsplash.com/photo-1427348693976-99e4aca06bb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            width="100%"
          />
        </Route>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
      </BrowserRouter>
    </Box>
  );
};
