import React from 'react';
import { Text, Box, Tooltip } from "@chakra-ui/react";

const WhatsApp = () => {
	return <>

		<Box zIndex={"100"}>
			<a href="https://api.whatsapp.com/send?phone=3516538808&text=Hola!%20estoy%20interesado%20en%20hacer%20una%20reserva" target='_blank'>
				<Tooltip hasArrow label='Consultanos por disponibilidad!' position={"relative"} top={0} left={-2} padding={2} fontSize={'18px'} color={'#000'} bg='white.600'>
					<Box
						position={"fixed"}
						bottom={5}
						right={5}
						padding={4}
						display={"grid"}
						placeContent={"center"}
						borderRadius={"full"}
						bgColor={"whatsapp.300"}
						zIndex={"100"}
						cursor={"pointer"}
					>
						<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
							<path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
						</svg>
					</Box>
				</Tooltip>
			</a>
		</Box>




	</>;
};

export default WhatsApp;
