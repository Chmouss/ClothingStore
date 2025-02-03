import { Box, Button, Container, Flex, Text,  } from "@chakra-ui/react";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import {  } from "@chakra-ui/react";  // Utilisation de useColorMode pour gérer le mode
import CreateClothing from "./CreateClothing";
import { useColorMode, useColorModeValue } from "./ui/color-mode";

const Navbar = ({setUsers}) => {
  const { colorMode, toggleColorMode } = useColorMode();

  // Utilisation de useColorModeValue pour ajuster les styles en fonction du mode
  const backgroundColor = useColorModeValue("gray.200", "gray.700");  // Différent en fonction du mode
  const textColor = useColorModeValue("gray.800", "white"); // Couleur du texte pour le contraste

  return (
    <Container maxW={"900px"}>
      <Box px={4} my={4} borderRadius={5} bg={backgroundColor}>
        <Flex h="16" alignItems={"center"} justifyContent={"space-between"}>
          {/* Left side */}
          <Flex 
            alignItems={"center"}
            justifyContent={"center"}
            gap={3}
            display={{base:"none", sm:"flex"}}
          >
            <img src="/vet1.png" alt="vet1 logo" width={50} height={50} />
            <Text fontSize={"40px"} color={textColor}>+</Text>
            <img src="/vet2.png" alt="vet2 logo" width={50} height={50} />
            <Text fontSize={"40px"} color={textColor}>=</Text>
            <img src="/vet3.png" alt="vet3 logo" width={50} height={50} />
          </Flex>

          {/* Right side */}
          <Flex gap={3} alignItems={"center"}>
            <Text fontSize={"lg"} fontWeight={500} display={{ base: "none", md: "block"}} color={textColor}>
              Get nice clothes !
            </Text>

            {/* Dark/Light Mode Toggle */}
            <Button onClick={toggleColorMode} colorScheme={colorMode === "light" ? "teal" : "purple"}>
              {colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
            </Button>

            {/* Add clothing button */}
            <CreateClothing setUsers={setUsers} />
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
}

export default Navbar;
