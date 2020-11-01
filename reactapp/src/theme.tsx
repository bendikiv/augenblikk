import * as React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/core";
import { App } from "./App";

const colors = {
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  turquoise: "#00adb5",
  gray: {
    50: "#f7fafc",
    100: "#EDF2F7",
    300: "#CBD5E0",
    500: "#718096",
    900: "#1a202c",
  },
  almostBlack: "#273036",
  darkBlue: "#14213d",
  orange: "#fca311",
  niceGray: "#e5e5e5",
  green: "#87bba2",
};

const customTheme = extendTheme({ colors });

export const ThemedApp = () => {
  return (
    <ChakraProvider theme={customTheme} resetCSS>
      <App />
    </ChakraProvider>
  );
};
