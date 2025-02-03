import { Box, Card, DialogBody, DialogRoot, Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import { Avatar } from "./ui/avatar";
import { BiTrash } from "react-icons/bi";
import EditClothesPopup from "./EditClothesPopup";
import { BASE_URL } from "@/App";

const ClothesCard = ({ clothes, setUsers }) => {

  const handleDeleteClothing = async () => {
    try {
      const res = await fetch(BASE_URL + "/clothing/" + clothes.id, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error);
      }
      setUsers((prevUsers) => prevUsers.filter((c) => c.id !== clothes.id));
    } catch (error) {
      console.error(error);
      alert(`Error: ${error.message}`); // Affiche une alerte en cas d'erreur
    }
  };

  return (
    <Card.Root>
      <Card.Header>
        <Flex gap={4}>
          <Flex flex={1} gap={4} alignItems={"center"}>
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXqUCZKvwI0mWTC032Pf5vX-0-caDS1hlDhA&s" />
            <Box>
              <Heading size="md">{clothes.name}</Heading>
              <Text>Size: {clothes.size}</Text> 
              <Text fontWeight="bold" color="teal.500"> {/* ✅ Ajout du prix ici */}
                {clothes.price} €
              </Text>
            </Box>
          </Flex>
          <Flex>
            <DialogRoot>
              <DialogBody>
                <EditClothesPopup clothes={clothes} setUsers={setUsers} />
              </DialogBody>
            </DialogRoot>
            <IconButton
              variant="ghost"
              colorScheme="red"
              size="md"
              aria-label="Delete"
              marginTop={"7px"}
              onClick={handleDeleteClothing}
            >
              <BiTrash />
            </IconButton>
          </Flex>
        </Flex>
      </Card.Header>
      <Card.Body>
        <Text>{clothes.description}</Text>
      </Card.Body>
    </Card.Root>
  );
};

export default ClothesCard;
