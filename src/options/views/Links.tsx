import { Box, Button, Divider, Flex, Heading, HStack, Input, Select } from "@chakra-ui/react";
import DeleteConfirmModal from "../components/DeleteConfirmModal";

const Links = () => {
  return (
    <Box w="full">
      <Heading fontSize="xl">Links</Heading>
      <Divider orientation="horizontal" my="4" />
      <Box w="full">
        <Heading fontSize="md">Add new link</Heading>
        <HStack w="full" mt="2">
          <Input placeholder="Basic usage" />
          <Select placeholder="Select option">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </HStack>
        <HStack mt="2">
          <Input placeholder="Basic usage" />
          <Button colorScheme="blue">Add</Button>
        </HStack>
      </Box>
      <Box mt="8">
        <Heading fontSize="md">All Links</Heading>
      </Box>
    </Box>
  )
}
export default Links;
