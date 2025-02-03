import { Box, Button, Container, Flex, Text } from "@chakra-ui/react"
import { IoMoon } from "react-icons/io5"
import { LuSun } from "react-icons/lu"
import { useColorMode, useColorModeValue } from "./ui/color-mode";
import CreateClothing from "./CreateClothing";

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"900px"}>
        <Box px={4} my={4} borderRadius={5} bg={useColorModeValue("gray.200", "gray.700")}>
            <Flex h="16"
                alignItems={"center"}
                justifyContent={"space-between"}
            >
                {/* Left side */}
                <Flex 
                    alignItems={"center"}
                    justifyContent={"center"}
                    gap={3}
                    display={{base:"none", sm:"flex"}}
                >
                    <img src="/vet1.png" alt="vet1 logo" width={50} height={50} />
                    <Text fontSize={"40px"}>+</Text>
                    <img src="/vet2.png" alt="vet2 logo" width={50} height={50} />
                    <Text fontSize={"40px"}>=</Text>
                    <img src="/vet3.png" alt="vet3 logo" width={50} height={50} />

                </Flex>
                {/* Right side */}
                <Flex gap={3} alignItems={"center"}>
                    <Text fontSize={"lg"} fontWeight={500} display={{ base: "none", md: "block"}}>
                        Get nice clothes !
                    </Text>

                    <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? <IoMoon/> : <LuSun size={20} />}
                    </Button>
                    <CreateClothing/>
                </Flex>
            </Flex>
        </Box>
    </Container>
  )
}

export default Navbar