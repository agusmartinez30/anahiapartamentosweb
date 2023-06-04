import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import store from "./app/store";

const colors = {
  green: {
    300: "#48BB78",
    600: "#E6FFDA",
    900: "#162C26",
  },
  white: {
    300: "#FFFFFF",
    600: "#F3F3F3",
    900: "#D9D9D9",
  },
  black: {
    300: "#413F42",
    600: "#303841",
    900: "#000000",
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
