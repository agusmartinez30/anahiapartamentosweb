import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box
        position={"relative"}
        top="0"
        left="0"
        width="100%"
        bgColor="#162C26"
        zIndex="10"
      >
        <Box
          position="relative"
          bottom="0"
          left="0"
          as="footer"
          maxWidth="1440px"
          margin="0 auto"
          display={'grid'}
          color="white"
          justifyContent="center"
          gap={6}
          padding={6}
        >
          <Box>
            <Text fontSize={{base:"22px" , md: "32px"}}>Seguinos en nuestras redes!</Text>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="10px"
            padding={2}
          >
            <Button
             width={{base: '65px', md: "85px"}}
             height={{base: '65px', md: "85px"}}
              _hover={{ backgroundColor: "#48BB78" }}
              backgroundColor="transparent"
              border="1px solid #fff"
              borderRadius="full"
              transition="all .3s ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-instagram"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="4" y="4" width="16" height="16" rx="4" />
                <circle cx="12" cy="12" r="3" />
                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
              </svg>
            </Button>
            <Button
              width={{base: '65px', md: "85px"}}
              height={{base: '65px', md: "85px"}}
              _hover={{ backgroundColor: "#48BB78",  }}
              backgroundColor="transparent"
              border="1px solid #fff"
              borderRadius="full"
              transition="all .3s ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-facebook"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
              </svg>
            </Button>
          </Box>
          
        </Box>
      </Box>
    </>
  );
};

export default Footer;
