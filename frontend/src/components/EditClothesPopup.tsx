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
  Box,
} from "@chakra-ui/react";
import { BiEditAlt } from "react-icons/bi";
import { useRef, useState } from "react";
import { useColorModeValue } from "./ui/color-mode";
import { BASE_URL } from "@/App";

const EditClothesPopup = ({ clothes, setUsers }) => {
  const { open, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);

  // Styles adaptés au mode clair/sombre
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.300", "gray.600");
  const inputBg = useColorModeValue("white", "gray.700");
  const inputTextColor = useColorModeValue("black", "white");
  const focusBorderColor = "teal.400";

  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState({
    name: clothes.name,
    description: clothes.description,
    price: clothes.price,
    size: clothes.size,
  });

  const handleEditClothing = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/clothing/${clothes.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error);
      }

      setUsers((prevUsers) =>
        prevUsers.map((c) => (c.id === clothes.id ? data : c))
      );
      onClose(); // ✅ Ferme la popup après succès
    } catch (error) {
      console.error(error);
      alert(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

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

          <form onSubmit={handleEditClothing}>
            <DialogBody>
              <Stack gap={4}>
                <Box>
                  <label htmlFor="name">Name</label> {/* ✅ Label ajouté */}
                  <Input
                    id="name"
                    value={inputs.name}
                    onChange={(e) =>
                      setInputs((prev) => ({ ...prev, name: e.target.value }))
                    }
                    ref={initialRef}
                    borderColor={borderColor}
                    bg={inputBg}
                    color={inputTextColor}
                    _focus={{
                      borderColor: focusBorderColor,
                      boxShadow: `0 0 0 1px ${focusBorderColor}`,
                    }}
                  />
                </Box>

                <Box>
                  <label htmlFor="description">Description</label> {/* ✅ Label ajouté */}
                  <Input
                    id="description"
                    value={inputs.description}
                    onChange={(e) =>
                      setInputs((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                    borderColor={borderColor}
                    bg={inputBg}
                    color={inputTextColor}
                    _focus={{
                      borderColor: focusBorderColor,
                      boxShadow: `0 0 0 1px ${focusBorderColor}`,
                    }}
                  />
                </Box>

                <Flex gap={4}>
                  <Box flex={1}>
                    <label htmlFor="price">Price (€)</label> {/* ✅ Label ajouté */}
                    <Input
                      id="price"
                      value={inputs.price}
                      onChange={(e) =>
                        setInputs((prev) => ({
                          ...prev,
                          price: Number(e.target.value),
                        }))
                      }
                      type="number"
                      borderColor={borderColor}
                      bg={inputBg}
                      color={inputTextColor}
                      _focus={{
                        borderColor: focusBorderColor,
                        boxShadow: `0 0 0 1px ${focusBorderColor}`,
                      }}
                    />
                  </Box>

                  <Box flex={1}>
                    <label htmlFor="size">Size</label> {/* ✅ Label ajouté */}
                    <Input
                      id="size"
                      value={inputs.size}
                      onChange={(e) =>
                        setInputs((prev) => ({ ...prev, size: e.target.value }))
                      }
                      borderColor={borderColor}
                      bg={inputBg}
                      color={inputTextColor}
                      _focus={{
                        borderColor: focusBorderColor,
                        boxShadow: `0 0 0 1px ${focusBorderColor}`,
                      }}
                    />
                  </Box>
                </Flex>
              </Stack>
            </DialogBody>

            <DialogFooter justifyContent="flex-end" mt={4}>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="teal" type="submit" isLoading={isLoading}>
                Save
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      )}
    </DialogRoot>
  );
};

export default EditClothesPopup;
