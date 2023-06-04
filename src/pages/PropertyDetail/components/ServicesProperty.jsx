import React from 'react'
import { Text, Image, Grid, GridItem, } from '@chakra-ui/react'



export default function ServicesProperty({ services }) {



  return (
    <>
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(2, 1fr)" }}
        gap={6}
        paddingY={6}
      >
        {services.map((service, idx) => (
          <GridItem
            width={{ base: "120px", md: "250px" }}
            key={idx}
            padding={5}
            placeItems="center"
            gap={4}
            borderRadius={"lg"}
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            border={"1px solid #ccc"}
          >
            <Image
              boxSize={{ base: "30px", md: "40px" }}
              src={service?.image}
            />
            <Text fontSize={{ base: "16px", md: "18px" }} color={"black.300"} textAlign={"center"} fontWeight={600}>
              {service?.title}
            </Text>
          </GridItem>
        ))}
      </Grid>
    </>
  )
}
