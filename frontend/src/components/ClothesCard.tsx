import { Box, Card, DialogBody, DialogRoot, Flex, Heading, IconButton, Text } from "@chakra-ui/react"
import { Avatar } from "./ui/avatar"
import { BiTrash } from "react-icons/bi"
import EditClothesPopup from "./EditClothesPopup"

const ClothesCard = ({clothes}) => {
  return (
    <>
    <Card.Root>
      <Card.Header>
        <Flex gap={4}>
          <Flex flex={1} gap={4} alignItems={"center"}>
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXqUCZKvwI0mWTC032Pf5vX-0-caDS1hlDhA&s" />
            <Box>
              <Heading size="md">{clothes.name}</Heading>
              <Text>{clothes.size}</Text>
            </Box>
          </Flex>
          <Flex>
            <DialogRoot>
              <DialogBody>
                <EditClothesPopup clothes={clothes} />
              </DialogBody>
            </DialogRoot>
            <IconButton
              variant="ghost"
              colorScheme="red"
              size="md"
              aria-label="Delete"
              marginTop={"7px"}
            >
              <BiTrash />
            </IconButton>
          </Flex>
        </Flex>
      </Card.Header>
      <Card.Body>
        <Text>
          {clothes.description}
        </Text>
      </Card.Body>
    </Card.Root>
    </>
  )
}

export default ClothesCard