import { Flex, Box, Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between">
      <Box>
        <Link href="#home" p={2}>
          Home
        </Link>
      </Box>
      <Box>
        <Link href="#publications" p={2}>
          Publications
        </Link>
      </Box>
      <Box>
        <Link href="#projects" p={2}>
          Projects
        </Link>
      </Box>
      <Box>
        <Link href="#contact" p={2}>
          Contact
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
