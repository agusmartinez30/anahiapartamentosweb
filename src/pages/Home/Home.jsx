import { Box, Text } from "@chakra-ui/react";
import './Home.css'

// components
import WhatsApp from "../../components/WhatsApp/WhatsApp";
import { FAQ, Services, Plans, Propiedades, Contact, Empresa, Opinions } from "../index";
import { Navbar } from "../../components/Navbar";



const Home = () => {
  return (
    <>
      <main className="zoom-bg">
        <Box
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          right={0}
          bgColor={"rgba(0,0,0,0.6)"}
          display={"grid"}
          placeItems={"center"}
          margin={'0 auto'}
        >
          <Box width={'100%'}
            maxWidth={'1440px'}>
            <Text
              fontWeight={300}
              fontSize={{ base: "26px", md: "42px" }}
              color={"white.300"}
              textAlign={"center"}
              fontFamily="Poppins"
            >
              Descubre el paraíso en nuestros departamentos en el corazón de la naturaleza
            </Text>
          </Box>

        </Box>
      </main>
      <Propiedades />
      <Plans />
      <Empresa />
      <Services />
      <Opinions />
      <FAQ />
      <Contact />
      <WhatsApp />
    </>
  );
};

export default Home;
