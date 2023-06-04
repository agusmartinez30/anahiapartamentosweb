import React from 'react';
import {
	Text, Box, Image, FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input,
	Textarea,
	Button
} from '@chakra-ui/react'
import { useState } from 'react';
import { FAQ } from '../FAQ/index'

const Contact = () => {
	const [input, setInput] = useState('')

	const handleInputChange = (e) => setInput(e.target.value)

	const isError = input === ''
	return <>
		<Box id="ubicacion" as="section" height={'100%'} minHeight={"100vh"}  paddingTop={12}  paddingX={6}>
			<Box
			
				maxW="1440px"
				margin="0 auto"
				textAlign={{ base: "left", md: "center" }}
				paddingY={12}
			

			>
				<Text fontSize={{ base: "26px", md: "32px" }} color={"green.900"} fontFamily="Domine" fontWeight={600} paddingY={6}>
					¿Donde estamos?
				</Text>
				<Box display={"flex"} flexDirection={{ base: "column", md: "row" }} justifyContent={"space-between"} gap={8} paddingY={8}>
					<Box width={{ base: "100%", md: "550px" }}>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15523.317739046415!2d-64.50036277800207!3d-31.335313054285365!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d6511e23407fd%3A0x7e1211f3be694ed6!2sCaba%C3%B1as%20De%20Troncos%20%22Puente%20De%20Luz%22!5e0!3m2!1ses!2sar!4v1680543975944!5m2!1ses!2sar" width="100%" height="550"
							allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
					</Box>


					<Box width={{ base: "100%", md: "650px" }} display={"flex"} flexDirection={"column"} justifyContent={"space-around"} gap={6}>
						<Box>
							<Text fontSize={"26px"} paddingY={6}>¿Como Llegar?</Text>
							<Text fontSize={"20px"}>
								Si estás planeando un viaje a Villa Parque Siquiman y necesitas saber cómo llegar, te recomendamos tomar la Ruta Nacional 38 hacia el norte desde la ciudad de Córdoba. Luego, desvíate a la derecha en la Ruta Provincial E-55 y continúa por esta carretera hasta llegar a tu destino. Si te encuentras en otra ubicación, utiliza un mapa o una aplicación de GPS para encontrar la ruta más adecuada. Además, no dudes en buscar información adicional en línea o en alguna oficina de turismo en la zona. ¡Te esperamos!
							</Text>
						</Box>
						<Box>
							<Text fontSize={"26px"} paddingY={6}>Mas info y reservas</Text>
							<Text fontSize={"22px"}>
								+54 9 3541 127523 <br /> anahiapartamentos@gmail.com
							</Text>
						</Box>


					</Box>

				</Box>
			</Box>
		</Box>



	</>;
};

export default Contact;
