import {
	Box, Text, Grid, GridItem, Image,
} from "@chakra-ui/react";
import { services } from "../../data/Home/Home";

const Services = () => {
	return <>
		<Box display={'grid'} placeContent={'center'} id="servicios" as="section" height="100%" minHeight={"100vh"} paddingX={6}>
			<Box
				maxW="1440px"
				margin="0 auto"
				textAlign={{ base: "left", md: "center" }}
				paddingY={8}
			>
				<Text
					color="green.900"
					fontFamily="Domine"
					fontWeight={600}
					fontSize={{ base: "26px", md: "32px" }}
				>
					Servicios
				</Text>
				<Grid
					templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
					gap={6}
					paddingY={6}
				>
					{services.map((service, idx) => (
						<GridItem
							key={idx}
							padding={5}
							display="grid"
							placeItems="center"
							gap={4}
							border={"1px solid #000"}
							borderRadius={"lg"}
						>
							<Image
								boxSize={{ base: "50px", md: "80px" }}
								src={service.image}
							/>
							<Text fontSize={{ base: "16px", md: "24px" }} color={"black.300"} fontWeight={600}>
								{service.title}
							</Text>
						</GridItem>
					))}
				</Grid>
			</Box>
		</Box>

	</>;
};

export default Services;
