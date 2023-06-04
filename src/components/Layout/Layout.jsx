import React from "react";
import { Text, Box } from "@chakra-ui/react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box width="100%" height="100%" bgColor={"transparent"}>
     <Navbar />
      <Box
        // maxWidth="1440px"
        height="100%"
        minHeight="100vh"
        padding={{ base: "0", md: "0"}}
        margin="0 auto"
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
