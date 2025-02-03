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
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BiAddToQueue } from "react-icons/bi";
import { useColorModeValue } from "./ui/color-mode";
import { BASE_URL } from "@/App";

const CreateClothing = ({ setUsers }) => {
  const { open, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    price: 0,
    size: "",
  });

  const handleCreateClothing = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch(BASE_URL + "/clothing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "An error occurred");
      }

      onClose(); // Ferme le formulaire après succès
      setInputs({
        name: "",
        description: "",
        price: 0,
        size: "",
      });

      setUsers((prevUsers) => [...prevUsers, data]);
    } catch (error) {
      console.error(error);
      alert(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.300", "gray.600");
  const inputBg = useColorModeValue("white", "gray.700");
  const inputTextColor = useColorModeValue("black", "white");
  const focusBorderColor = "teal.400";

  return (
    <>
      <Button onClick={onOpen} colorScheme="teal" size="lg">
        <BiAddToQueue size={30} />
      </Button>

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
                <Box>
                  <label htmlFor="name">Name</label> {/* Label ajouté */}
                  <Input
                    id="name"
                    ref={initialRef}
                    placeholder="Name of the clothing"
                    borderColor={borderColor}
                    bg={inputBg}
                    color={inputTextColor}
                    _focus={{
                      borderColor: focusBorderColor,
                      boxShadow: `0 0 0 1px ${focusBorderColor}`,
                    }}
                    value={inputs.name}
                    onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
                  />
                </Box>

                <Box>
                  <label htmlFor="description">Description</label> {/* Label ajouté */}
                  <Input
                    id="description"
                    placeholder="Description"
                    borderColor={borderColor}
                    bg={inputBg}
                    color={inputTextColor}
                    _focus={{
                      borderColor: focusBorderColor,
                      boxShadow: `0 0 0 1px ${focusBorderColor}`,
                    }}
                    value={inputs.description}
                    onChange={(e) => setInputs({ ...inputs, description: e.target.value })}
                  />
                </Box>

                <Flex gap={4}>
                  <Box flex={1}>
                    <label htmlFor="price">Price</label> {/* Label ajouté */}
                    <Input
                      id="price"
                      placeholder="Price"
                      type="number"
                      borderColor={borderColor}
                      bg={inputBg}
                      color={inputTextColor}
                      _focus={{
                        borderColor: focusBorderColor,
                        boxShadow: `0 0 0 1px ${focusBorderColor}`,
                      }}
                      value={inputs.price}
                      onChange={(e) => setInputs({ ...inputs, price: Number(e.target.value) })}
                    />
                  </Box>

                  <Box flex={1}>
                    <label htmlFor="size">Size</label> {/* Label ajouté */}
                    <Input
                      id="size"
                      placeholder="Size"
                      borderColor={borderColor}
                      bg={inputBg}
                      color={inputTextColor}
                      _focus={{
                        borderColor: focusBorderColor,
                        boxShadow: `0 0 0 1px ${focusBorderColor}`,
                      }}
                      value={inputs.size}
                      onChange={(e) => setInputs({ ...inputs, size: e.target.value })}
                    />
                  </Box>
                </Flex>
              </Stack>
            </DialogBody>

            <DialogFooter justifyContent="flex-end" mt={4}>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="teal"
                onClick={handleCreateClothing}
                isLoading={isLoading}
              >
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
