import { Button, Box, useDisclosure } from "@chakra-ui/react";
import { BiAddToQueue } from "react-icons/bi";

const CreateClothing = () => {
  const { open, onOpen, onClose } = useDisclosure(); // Utiliser `open` au lieu de `isOpen`

  return (
    <>
      {/* Bouton pour ouvrir le formulaire */}
      <Button onClick={onOpen} colorScheme="teal" size="lg">
        <BiAddToQueue size={30} />
      </Button>

      {/* Afficher un Box (formulaire) si open est vrai */}
      {open && (
        <Box
          p={4}
          mt={4}
          bg="gray.100"
          rounded="md"
          shadow="md"
          border="1px solid"
          borderColor="gray.200"
        >
          <Button colorScheme="red" onClick={onClose}>
            Fermer
          </Button>
          <Box mt={4}>C'est un formulaire simple (placeholder).</Box>
        </Box>
      )}
    </>
  );
};

export default CreateClothing;
