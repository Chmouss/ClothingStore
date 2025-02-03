import {
  Button,
  DialogRoot,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogBody,
  DialogFooter,
  Input,
  Stack,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { BiAddToQueue } from "react-icons/bi";
import { useColorModeValue } from "./ui/color-mode";

const CreateClothing = () => {
  const { open, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);

  // Utilisation de useColorModeValue pour ajuster les couleurs en fonction du mode
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.300", "gray.600");
  const inputBg = useColorModeValue("white", "gray.700");
  const inputTextColor = useColorModeValue("black", "white");
  const focusBorderColor = "teal.400";

  return (
    <>
      {/* Bouton avec l'icône "+" pour ouvrir le formulaire */}
      <Button onClick={onOpen} colorScheme="teal" size="lg">
        {/* Pas de texte ici, juste l'icône */}
        <BiAddToQueue size={30} />
      </Button>

      {/* Afficher le formulaire si open est vrai */}
      <DialogRoot open={open} onClose={onClose} initialFocusRef={initialRef}>
        {open && (
          <DialogContent
            position="fixed"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            bg={bgColor}
            boxShadow="xl"
            borderRadius="md"
            p={6}
            zIndex={20}
          >
            <DialogHeader>
              <DialogTitle>Add a new piece of clothing</DialogTitle>
            </DialogHeader>

            <DialogBody>
              <Stack gap={4}>
                <Input
                  ref={initialRef}
                  placeholder="Name of the clothing"
                  borderColor={borderColor}
                  bg={inputBg}
                  color={inputTextColor}
                  _focus={{
                    borderColor: focusBorderColor,
                    boxShadow: `0 0 0 1px ${focusBorderColor}`,
                  }}
                />
                <Input
                  placeholder="Description"
                  borderColor={borderColor}
                  bg={inputBg}
                  color={inputTextColor}
                  _focus={{
                    borderColor: focusBorderColor,
                    boxShadow: `0 0 0 1px ${focusBorderColor}`,
                  }}
                />
                <Flex gap={4}>
                  <Input
                    placeholder="Price"
                    type="number"
                    borderColor={borderColor}
                    bg={inputBg}
                    color={inputTextColor}
                    _focus={{
                      borderColor: focusBorderColor,
                      boxShadow: `0 0 0 1px ${focusBorderColor}`,
                    }}
                  />
                  <Input
                    placeholder="Size"
                    borderColor={borderColor}
                    bg={inputBg}
                    color={inputTextColor}
                    _focus={{
                      borderColor: focusBorderColor,
                      boxShadow: `0 0 0 1px ${focusBorderColor}`,
                    }}
                  />
                </Flex>
                
              </Stack>
            </DialogBody>

            <DialogFooter justifyContent="flex-end" mt={4}>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="teal" onClick={onClose}>
                Add
              </Button>
            </DialogFooter>
          </DialogContent>
        )}
      </DialogRoot>
    </>
  );
};

export default CreateClothing;
