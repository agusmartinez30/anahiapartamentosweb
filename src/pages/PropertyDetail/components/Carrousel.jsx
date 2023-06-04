import React from 'react'
import { Text, Box, Button, Image, Grid, GridItem, } from '@chakra-ui/react'
import { useState } from 'react'

export default function Carrousel({  images }) {

  const [selectedIndex, setSelectedIdex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(images[0])

  const selectNewImage = (index, img, next = true) => {
    const condition = next ? selectedIndex < img.length - 1 : selectedIndex > 0;
    const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : img.length - 1;
    setSelectedImage(img[nextIndex])
    setSelectedIdex(nextIndex)
  }

  const nextImage = () => {
    selectNewImage(selectedIndex, images, false)

  }
  const backImage = () => {
    selectNewImage(selectedIndex, images,)
  }

  return (
    <>
      <Box as='header' position={"relative"}>
        <Box>
          <Image width={{ base: "450px", sm: "850px" }} height={{ base: "250px", sm: "400px" }} objectFit={"cover"} src={selectedImage} />
        </Box>
        <Box width={"100%"} height={"100%"} display={'flex'} alignItems={'center'} alignSelf={'center'}>
          <Box
            position={'absolute'}
            top={0}
            left={0}
            height={'100%'}
            display={'grid'}
            placeContent={'center'}
            padding={2}
          >
            <Button
              width={"55px"}
              height={"55px"}
              borderRadius={"full"}
              outline={"none"}
              bg={"rgba(0,0,0,0.2)"}
              _focus={{ bgColor: 'green.300' }}
              border={"1px solid #000"}
              onClick={backImage}
            >

              <ArrowLeft />
            </Button>
          </Box>
          <Box
            position={'absolute'}
            top={0}
            right={0}
            height={'100%'}
            display={'grid'}
            placeContent={'center'}
            padding={2}
          >
            <Button
              width={"55px"}
              height={"55px"}
              borderRadius={"full"}
              outline={"none"}
              bg={"rgba(0,0,0,0.2)"}
              border={"1px solid #000"}
              _focus={{ bgColor: 'green.300' }}
              onClick={nextImage}
            >
              <ArrowRight />
            </Button>
          </Box>
        </Box>
      </Box>

    </>
  )
}
const ArrowRight = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right" width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <line x1="5" y1="12" x2="19" y2="12" />
      <line x1="15" y1="16" x2="19" y2="12" />
      <line x1="15" y1="8" x2="19" y2="12" />
    </svg>
  )
}
const ArrowLeft = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-left" width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <line x1="5" y1="12" x2="19" y2="12" />
      <line x1="5" y1="12" x2="11" y2="18" />
      <line x1="5" y1="12" x2="11" y2="6" />
    </svg>
  )
}
