import {
  Button,
  DialogRoot,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogBody,
  DialogFooter,
  Input,
  IconButton,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { BiEditAlt } from "react-icons/bi";
import { useRef } from "react";

const EditClothesPopup = () => {
  const { open, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);

  return (
    <DialogRoot open={open} onClose={onClose} initialFocusRef={initialRef}>
      <DialogTrigger asChild>
        <IconButton
          variant="ghost"
          colorScheme="teal"
          size="sm"
          aria-label="Modifier"
          onClick={onOpen}
        >
          <BiEditAlt />
        </IconButton>
      </DialogTrigger>

      {open && (
        <DialogContent
          position="fixed"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          bg="white"
          _dark={{ bg: "gray.800" }}
          boxShadow="xl"
          borderRadius="md"
          p={6}
          zIndex={20}
        >
          <DialogHeader>
            <DialogTitle>Modifier l'article</DialogTitle>
          </DialogHeader>

          <DialogBody>
            <Stack gap={4}>
              <Input
                placeholder="Nom du vêtement"
                ref={initialRef}
                variant="outline"
                borderColor="gray.300"
                _dark={{ borderColor: "gray.600", bg: "gray.700", color: "white" }}
                _focus={{
                  borderColor: "teal.400",
                  boxShadow: "0 0 0 1px teal",
                  _dark: { borderColor: "teal.300", boxShadow: "0 0 0 1px teal" },
                }}
              />
              <Input
                placeholder="Prix"
                type="number"
                variant="outline"
                borderColor="gray.300"
                _dark={{ borderColor: "gray.600", bg: "gray.700", color: "white" }}
                _focus={{
                  borderColor: "teal.400",
                  boxShadow: "0 0 0 1px teal",
                  _dark: { borderColor: "teal.300", boxShadow: "0 0 0 1px teal" },
                }}
              />
              <Input
                placeholder="Catégorie"
                variant="outline"
                borderColor="gray.300"
                _dark={{ borderColor: "gray.600", bg: "gray.700", color: "white" }}
                _focus={{
                  borderColor: "teal.400",
                  boxShadow: "0 0 0 1px teal",
                  _dark: { borderColor: "teal.300", boxShadow: "0 0 0 1px teal" },
                }}
              />
            </Stack>
          </DialogBody>

          <DialogFooter justifyContent="flex-end" mt={4}>
            <Button variant="outline" mr={3} onClick={onClose}>
              Annuler
            </Button>
            <Button colorScheme="teal" onClick={onClose}>
              Enregistrer
            </Button>
          </DialogFooter>
        </DialogContent>
      )}
    </DialogRoot>
  );
};

export default EditClothesPopup;
