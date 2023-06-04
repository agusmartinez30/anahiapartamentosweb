import React from 'react';
import { Box, Text, Image, } from "@chakra-ui/react";


const Plans = () => {


	const PlansArray = [
		{
			"title": "Alquileres por temporada",
			"text": "Desde Diciembre hasta Marzo",
			"image": "https://images.unsplash.com/photo-1642489216436-4c5075b34d53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=419&q=80"
		},
		{
			"title": "Alquileres Mensual",
			"text": "Consultar por disponibilidad",
			"image": "https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80"

		},
		{
			"title": "Alquileres Anual",
			"text": "Consultar por disponibilidad",
			"image": "https://images.unsplash.com/photo-1611302457661-d24c21494f2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=653&q=80"
			
		},
	]

	return <>
		<Box
			backgroundAttachment="fixed"
			bgImage="url('https://images.unsplash.com/photo-1658143289468-6c5ecd2c39e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')"
			bgSize="cover"
			bgRepeat="no-repeat"
			height="100%"
			paddingY={32}
		>
			<Box
				maxW="1440px"
				margin="0 auto"
				textAlign={{ base: "left", md: "center" }}
				paddingY={12}
				paddingX={2}
			>

				<Box width="100%" margin={"0 auto"} borderRadius="9px" bgColor={"rgba(255, 255, 255, 0.8 )"} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"space-around"} paddingY={8} >
					{
						PlansArray.map((plan, idx) => (
							<Box key={idx} width={"80%"} display={"flex"} flexDirection={{ base: "column-reverse", md: "row-reverse" }} alignItems={"center"} justifyContent={"space-between"} padding={6} gap={4} borderBottom={"1px solid #BDCDD6"}>
								<Image width={"120px"} height={'80px'} objectFit={'cover'} borderRadius={"md"} src={plan.image} />
								<Box textAlign={"left"}>
									<Text fontSize={{ base: "20px", md: "32px" }} fontFamily={"Poppins"} fontWeight={600} textAlign={{ base: "center", md: "left" }} color={"black"}>{plan.title}</Text>
									<Text fontSize={{ base: "18px", md: "22px" }} fontFamily={"Poppins"} color={"gray"} textAlign={{ base: "center", md: "left" }}   > {plan.text}</Text>
								</Box>
							</Box>
						))
					}
				</Box>
			</Box>
		</Box>
	</>;
};

export default Plans;
