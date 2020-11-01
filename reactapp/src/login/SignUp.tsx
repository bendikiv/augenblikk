import React, { useState, ChangeEvent } from "react";
import { Flex, Input, Button, Text } from "@chakra-ui/core";
import { handleSignUp } from "../authentication";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Flex flexDirection="column" ml="1rem" mt="1rem">
      <Input
        placeholder="Enter email"
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setEmail(event.target.value)
        }
        backgroundColor="niceGray"
        mb="1rem"
      />
      <Input
        placeholder="Enter password"
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setPassword(event.target.value)
        }
        backgroundColor="niceGray"
        mb="1rem"
      />
      <Button
        aria-label="Sign up button"
        onClick={() => handleSignUp(email, password)}
        backgroundColor="green"
        mb="2rem"
      >
        Sign up
      </Button>
      <Text color="white" m="auto">
        Or
      </Text>
      <Button
        aria-label="Sign up with google button"
        backgroundColor="turquoise"
      >
        Sign up with Google
      </Button>
      <Text color="white" m="auto">
        Already have an account?{" "}
        <Link to="/" className="signup-link">
          Sign in here
        </Link>
      </Text>
    </Flex>
  );
};
