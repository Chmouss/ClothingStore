import { Container, Stack, Text } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import UserGrid from "./components/UserGrid"

function App() {

  return (
    <>
      <Stack minH={"100vh"}>
        <Navbar/>
        <Container maxW={"1200px"} my={4}>
          <Text
            fontSize={{ base: "3xl", md: "50" }}
            fontWeight={"bold"}
            letterSpacing={"2px"}
            textTransform={"uppercase"}
            textAlign={"center"}
            mb={8}
          >
            {/* fix code here and replace the text component below with this one
            <Text as={"span"} bgGradient="linear(cyan.400, blue.500)" bgClip={"text"}> 
              placeholder title 
            </Text>
            */}
            <Text as={"span"}> 
              placeholder title 
            </Text>
            🎃
          </Text>
          <UserGrid />
        </Container>
      </Stack>
    </>
  )
}

export default App
