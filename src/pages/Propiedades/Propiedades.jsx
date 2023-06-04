import React from 'react';
import { Grid, Stack, Heading, Box, Card, CardHeader, CardBody, CardFooter, Image, Text, Divider, Button, ButtonGroup, GridItem } from '@chakra-ui/react'
import data from '../../data/db.json'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { updateState } from '../../features/properties/propertySlices';


const Propiedades = () => {


	const dispatch = useDispatch()
	const propertyState = useSelector((state) => state.property)

	const [property, setProperty] = useState([])

	
	const DEPTOS = [
		{
			image: "https://images.unsplash.com/photo-1596313127813-b9f7c7a3b466?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
			title: "La Soñada",
			descripton: "Apta para 2/4 personas",
			surface: "50m2"
		},
		{
			image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			title: "Algarrobo",
			descripton: "Apta para 2/4 personas",
			surface: "50m2"
		},
		{
			image: "https://images.unsplash.com/photo-1497870556705-2ee687d37bba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
			title: "Algarrobo",
			descripton: "Apta para 2/4 personas",
			surface: "50m2"
		}
	]
	const { properties } = data


	useEffect(() => {
		fetch('http://localhost:3000/property')
			.then(res => res.json())
			.then(data => {
				setProperty(data)
				dispatch(updateState(data))
			})
	}, [])

	return <>
		<Box id="propiedades" as="section" position={'relative'} top={0} left={0} height={"100%"} minHeight={"100vh"} paddingY={4} display={'grid'} placeContent={'center'}>
			<Box maxW="1440px"
				margin="0 auto"
				textAlign={{ base: "left", md: "center" }}
			>
				<Box as="main" >
					<Heading padding={12} fontSize={{ base: "26px", md: "32px" }} color="green.900" fontFamily="Domine" fontWeight={600}>
						¡Tenemos la propiedad perfecta para tu descanso!
					</Heading>

					<Grid display={"grid"} templateColumns={{ base: "repeat(1, 1fr)", sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} justifyContent={"space-between"} gap={6} paddingY={12} padding={6} >

						{
							property.map((dpto) => (
								<Card width={{ base: "100%", sm: "100%", lg: "100%" }} padding={4}>
									<Box>
										<Image width={"100%"} objectFit={"cover"} height={"250px"} borderRadius={'2xl'} src="" alt={dpto?.property_name} />
									</Box>
									<Box paddingY={0} display={"grid"} >
										<Box display={"grid"} gap={2} paddingY={6}>
											<Text fontSize="24px" textTransform={'capitalize'} fontWeight={600} fontFamily="Poppins" textAlign={"left"}>{dpto?.property_name}</Text>
											<Text fontSize="16px" textTransform={'capitalize'} fontWeight={300} fontFamily="Poppins" textAlign={"left"} color={"gray.500"}>{dpto?.property_type.property_type_name}</Text>
											<Box display={"flex"} gap={8} >
												<Box display={"flex"} gap={2}>
													<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#597e8d" fill="none" stroke-linecap="round" stroke-linejoin="round">
														<path stroke="none" d="M0 0h24v24H0z" fill="none" />
														<circle cx="12" cy="11" r="3" />
														<path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
													</svg>
													<Text fontSize="18px" fontFamily="Poppins">{dpto?.town}</Text>
												</Box>
											</Box>
										</Box>
										<Box>
											<Link to={`departamento/${dpto?.reference_number}`}>
												<Button width={'full'} bgColor="green.300" color="white">VER MAS</Button>
											</Link>
										</Box>
									</Box>

								</Card>
							))
						}
					</Grid>
				</Box >
			</Box>

		</Box>

	</>;
};

export default Propiedades;
