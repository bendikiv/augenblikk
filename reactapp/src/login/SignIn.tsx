import React, { useState, ChangeEvent } from "react";
import { Flex, Input, Button, Text } from "@chakra-ui/core";
import { handleSignIn } from "../authentication";
import { Link } from "react-router-dom";
import { signInWithGoogle } from "../firebase";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const onChangeHandler = (event: any) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };

  return (
    <Flex flexDirection="column" ml="1rem" mt="1rem">
      <Input
        placeholder="Enter email"
        name="userEmail"
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          onChangeHandler(event)
        }
        backgroundColor="niceGray"
        mb="1rem"
      />
      <Input
        placeholder="Enter password"
        name="userPassword"
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          onChangeHandler(event)
        }
        backgroundColor="niceGray"
        mb="1rem"
      />
      <Button
        aria-label="Sign up button"
        onClick={() => handleSignIn(email, password)}
        backgroundColor="green"
        mb="2rem"
      >
        Sign in
      </Button>
      <Text m="auto" color="white" zIndex="900">
        Or
      </Text>
      <Button
        aria-label="Sign up with google button"
        backgroundColor="turquoise"
        onClick={() => signInWithGoogle()}
      >
        Sign in with Google
      </Button>
      <Text m="auto" color="white" zIndex="900">
        Don't have an account?{" "}
        <Link to="/signup" className="signup-link">
          Sign up here
        </Link>
      </Text>
      <Text color="white" m="auto" zIndex="900">
        <Link to="/passwordReset" className="signup-link">
          Forgot password?
        </Link>
      </Text>
    </Flex>
  );
};
