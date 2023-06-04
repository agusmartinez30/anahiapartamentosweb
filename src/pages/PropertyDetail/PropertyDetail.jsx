import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Text, Box, Button } from '@chakra-ui/react'
// files
import data from '../../data/db.json'
import { services } from '../../data/Home/Home';
// components
import Carrousel from './components/Carrousel';
import ServicesProperty from './components/ServicesProperty';
import SimpleSlider from './components/CarrouselDev';
import { useSelector } from 'react-redux'


const PropertyDetail = () => {

	const { key } = useParams();
	
	const [property, setProperty] = useState([])



	const oneProperty = property.find(
		(property) => property.reference_number == String(`${key}`)
	);

	const [images, setImages] = useState([])
	const container = useRef(null)

	const IDproperty = `*REF*:${oneProperty?.reference_number}`
	const LinkWSP = `https://api.whatsapp.com/send?phone=3516538808&text=Hola!%20estoy%20interesado%20en%20la%20propiedad%20${IDproperty}%20para%20hacer%20una%20reserva`


	useEffect(() => {
		window.scrollTo(0, 0);

		fetch('http://localhost:3000/property')
			.then(res => res.json())
			.then(data => {
				setProperty(data)
			})

	
	}, [key])



	return <>
		<Box height="100%" minHeight={"100vh"} position={'relative'} top={'80px'} left={0}>
			<Box
				maxW="1440px"
				margin="0 auto"
				textAlign={{ base: "left", md: "center" }}
				paddingY={8}
				
			>
				<Box
					width={"100%"}
					display={"flex"}
					flexDirection={{ base: "column", md: "row-reverse" }}
					justifyContent={"space-around"}
					overflow={"hidden"}
					padding={2}
				>
					<Box as='section' display={"flex"} flexDirection={"column"} gap={6} padding={{ base: 0, sm: 6 }}  >
						<Carrousel images={images}  />
						<Box as='footer' >
							<Box display={"flex"} alignItems={"center"} justifyContent={"center"} gap={6} padding={4}>
								<Box display={"grid"} placeItems={"center"} >
									<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ruler" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#597e8d" fill="none" stroke-linecap="round" stroke-linejoin="round">
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<path d="M5 4h14a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-7a1 1 0 0 0 -1 1v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1" />
										<line x1="4" y1="8" x2="6" y2="8" />
										<line x1="4" y1="12" x2="7" y2="12" />
										<line x1="4" y1="16" x2="6" y2="16" />
										<line x1="8" y1="4" x2="8" y2="6" />
										<polyline points="12 4 12 7 " />
										<polyline points="16 4 16 6 " />
									</svg>
									<Text>
									{oneProperty?.square_meter}m2
									</Text>
								</Box>
								<Box display={"grid"} placeItems={"center"} >
									<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-users" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#597e8d" fill="none" stroke-linecap="round" stroke-linejoin="round">
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<circle cx="9" cy="7" r="4" />
										<path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
										<path d="M16 3.13a4 4 0 0 1 0 7.75" />
										<path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
									</svg>
									<Text>
									3
									</Text>
								</Box>
							</Box>

							{/* CONTAINER BUTTON WHATSAPP */}
							<Box as='section' width={"100%"} paddingY={2} >

								<a href={LinkWSP}>
									<Button width={"80%"} colorScheme='green' display={'flex'} gap={6} margin={'0 auto'} paddingY={6} _hover={{ bgColor: 'green.900' }}>
										<WhatsAppBtn />
										<Text fontSize={'18px'} fontWeight={300}>Consultar disponibilidad</Text>
									</Button>
								</a>

							</Box>
						</Box>
					</Box>

					<Box as='section' width={{ base: "100%", sm: "80%" }} padding={6} >
						<Text width={"100%"} fontSize={"4xl"} color={"green.900"}>{oneProperty?.property_name}
						</Text>

						<Text textAlign={"left"} paddingY={6} fontSize={"2xl"}>
							Níspero cuenta con un amplio espacio de cocina para preparar las delicias que quieras (además de heladera y cafetera para cápsulas) y un living con suntuosos sillones para relajarse en cualquier momento. Las habitaciones se encuentran en el piso superior, con una amplitud que brinda la comodidad deseada para descansar en la estadía. Además de WiFi y televisión por cable, se puede disfrutar de amenities premium con vista a las sierras y desayuno incluido para saborear las delicias serranas
						</Text>
						<Text fontSize={"26px"} textAlign={"left"} color={"green.300"}>Servicios</Text>
						{/* CONTAINER GRID SERVICES */}
						<ServicesProperty services={services} />
					</Box>
				</Box >;
			</Box>
		</Box>
	</>
};


const WhatsAppBtn = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
			<path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
		</svg>
	)
}

export default PropertyDetail;
