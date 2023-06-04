import {
  Box,
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Select
} from "@chakra-ui/react";

const Search = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box >
        <Button
          width={{ base: "300px", md: "560px", lg: "850px" }}
          height={{ base: "55px", md: "66px", lg: "80px" }}
          borderRadius="full"
          padding={6}
          bgColor={"white.300"}
          onClick={onOpen}
        >
          <Box width="100%" display="flex" gap={6}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-search"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#000"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="10" cy="10" r="7" />
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
            <Text fontSize={{base:"18px", sm: "22px" }} fontWeight={300}>
              {" "}
              ¿A donde vas?
            </Text>
          </Box>
        </Button>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size={"xl"} bgColor="red.300">
        <ModalOverlay />
        <ModalContent width={"980px"} bgColor="white.600">
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box display={"grid"} gap={8}>
              <FormControl>
                <FormLabel fontSize={22}>Ubicación</FormLabel>
                <Select fontSize={18} placeholder='Selecciona la ubicación'>
                  <option>Carlos Paz</option>
                  <option>Córdoba</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel fontSize={22}>Tipo de operación</FormLabel>
                <Select fontSize={18}  placeholder='Selecciona la operación'>
                  <option>Alquiler temporal</option>
                  <option>Alquiler anual</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel fontSize={22}>Tipo de propiedad</FormLabel>
                <Select  fontSize={18} placeholder='Selecciona la propiedad'>
                  <option>Deparamento</option>
                  <option>Casa</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel fontSize={22}>Numero de referencia</FormLabel>
                <Input type='number' />

              </FormControl>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button bgColor="green.300" _hover={{bgColor: "green.600"}} size={"lg"} color="white.300" mr={3}>
              Buscar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Search;
