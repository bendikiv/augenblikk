import React from "react";
import { Button } from "@chakra-ui/core";
import firebase from "firebase";

export const SignOut = () => {
  return (
    <Button
      position="absolute"
      top="0"
      left="0"
      zIndex="900"
      ml="1rem"
      mt="1rem"
      onClick={() => firebase.auth().signOut()}
    >
      Sign out
    </Button>
  );
};
