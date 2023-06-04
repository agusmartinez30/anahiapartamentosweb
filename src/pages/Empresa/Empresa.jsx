import React from 'react';
import { Text, Box, Image } from '@chakra-ui/react'
import { empresa } from '../../data/Home/Home'


const Empresa = () => {
	return <>
		<Box id="empresa" as="section" paddingTop={12} paddingX={6}>
			<Box maxW="1440px"
				margin="0 auto"
				textAlign={{ base: "left", md: "center" }}
				paddingY={12}
			>

				{
					empresa.map((items) => (
						<Box>
							<Text fontSize={"32px"} color={"green.900"} fontFamily="Domine" fontWeight={600}>
								{items.title}
							</Text>
							<Box display={"flex"} flexDirection={{ base: "column", lg: "row" }} padding={6} gap={4} alignItems={"center"}>
								<Text fontSize={"22px"}>{items.description}
								</Text>
								<Image borderRadius={"sm"} width={{ base: "100%", md: "450px" }} height={{ base: "250px", md: "450px" }} objectFit={"cover"} src={items.image} />
							</Box>

						</Box>
					))
				}

			</Box>
		</Box>
	</>;
};

export default Empresa;
