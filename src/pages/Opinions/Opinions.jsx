import React from 'react';
import {
  Box, Text, Grid, GridItem,
} from "@chakra-ui/react";

import { opinions } from '../../data/Home/Home';

const Opinions = () => {
  return <>
    <Box
      height={{ base: "100%", xl: "100vh" }}
      display={'grid'} placeContent={'center'}
      paddingY={8}
      paddingX={6}
      id="reseñas"
      bgColor={"green.600"}

    >
      <Box
        position={'relative'}
        top='4rem'
        left={0}
        maxW="1440px"
        margin="0 auto"
        textAlign={{ base: "left", md: "center" }}
        paddingY={12}

      >
        <Text
          color="green.900"
          fontFamily="Domine" fontWeight={600}
          fontSize={{ base: "26px", md: "32px" }}
        >
          ¡Nuestra experiencia con clientes!
        </Text>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
            xl: "repeat(3, 1fr)",
          }}
          gap={6}
          paddingY={12}
        >
          {opinions.map((op, idx) => (
            <GridItem
              key={idx}
              padding={2}
              display="grid"
              placeItems="center"
              gap={4}

            >
              <Box
                width={{ base: "100%", sm: "350px", md: "380px" }}
                height={{ base: "100%", md: "330px" }}
                bgColor={"#fff"}
                display="grid"
                placeItems="center"
                gap={2}
                borderRadius="3xl"
                padding={"56px"}
                textAlign="center"
                key={idx}
              >
                <Text fontSize={{ base: "26px", md: "32px" }} fontWeight={'500'} textTransform={'capitalize'}>
                  {op.author}
                </Text>
                <Text fontSize={{ base: "18px", md: "20px" }}>{op.date}</Text>
                <Text fontSize={{ base: "20px", md: "24px" }}>
                  {op.comment}
                </Text>
              </Box>
            </GridItem>
          ))}
        </Grid>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection={{ base: "column", md: "row" }}
          gap={4}
          padding={4}
          paddingY={8}
        ></Box>
      </Box>
    </Box>
  </>;
};

export default Opinions;
