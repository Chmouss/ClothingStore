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
  Flex,
} from "@chakra-ui/react";
import { BiEditAlt } from "react-icons/bi";
import { useRef } from "react";
import { useColorModeValue } from "./ui/color-mode";

const EditClothesPopup = ( {clothes} ) => {
  const { open, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);

  // Utilisation de useColorModeValue pour ajuster les couleurs en fonction du mode
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.300", "gray.600");
  const inputBg = useColorModeValue("white", "gray.700");
  const inputTextColor = useColorModeValue("black", "white");
  const focusBorderColor = "teal.400";

  return (
    <DialogRoot open={open} onClose={onClose} initialFocusRef={initialRef}>
      <DialogTrigger asChild>
        <IconButton
          variant="ghost"
          colorScheme="teal"
          size="md"
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
          bg={bgColor}
          boxShadow="xl"
          borderRadius="md"
          p={6}
          zIndex={20}
        >
          <DialogHeader>
            <DialogTitle>Update the clothing</DialogTitle>
          </DialogHeader>

          <DialogBody>
            <Stack gap={4}>
              <Input
                ref={initialRef}
                placeholder={clothes.name}
                borderColor={borderColor}
                bg={inputBg}
                color={inputTextColor}
                _focus={{
                  borderColor: focusBorderColor,
                  boxShadow: `0 0 0 1px ${focusBorderColor}`,
                }}
              />
              <Input
                placeholder={clothes.description}
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
                  placeholder={clothes.price}
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
                  placeholder={clothes.size}
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
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      )}
    </DialogRoot>
  );
};

export default EditClothesPopup;
