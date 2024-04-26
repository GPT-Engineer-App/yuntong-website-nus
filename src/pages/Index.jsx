// Complete the Index page component for Yuntong Zhang's personal website
import { Box, Container, Heading, Text, Link, SimpleGrid, Image, VStack, HStack, Icon } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" id="home">
      <Navbar />
      <VStack spacing={10} py={10}>
        {/* Header Section */}
        <Box textAlign="center">
          <Heading as="h1" size="2xl">
            Yuntong Zhang
          </Heading>
          <Text fontSize="xl" mt={2}>
            PhD Candidate at National University of Singapore (NUS)
          </Text>
          <Image borderRadius="full" boxSize="150px" src="https://i.imgur.com/NKA0rd2.png" alt="Yuntong Zhang" mt={4} />
        </Box>

        {/* Bio Section */}
        <Box>
          <Heading as="h2" size="lg">
            About Me
          </Heading>
          <Text mt={2}>I am a dedicated researcher in the field of Computer Science with a focus on artificial intelligence and machine learning. My work aims to develop innovative solutions that can be applied to real-world problems. I am passionate about using technology to improve lives and am constantly seeking new challenges and opportunities to learn.</Text>
        </Box>

        {/* Academic Publications Section */}
        <Box id="publications">
          <Heading as="h2" size="lg">
            Academic Publications
          </Heading>
          <Text mt={2}>Here are some of my recent publications:</Text>
          <VStack align="start" spacing={2} mt={2}>
            <Link href="#" isExternal>
              Efficient Algorithms for Deep Learning - 2023
            </Link>
            <Link href="#" isExternal>
              Advances in Quantum Computing - 2022
            </Link>
            <Link href="#" isExternal>
              Neural Networks for Beginners - 2021
            </Link>
            <Link href="https://github.com/nus-apr/auto-code-rover" isExternal>
              Auto Code Rover Project - 2024
            </Link>
          </VStack>
        </Box>

        {/* Projects Gallery */}
        <Box id="projects">
          <Heading as="h2" size="lg">
            Projects and Achievements
          </Heading>
          <SimpleGrid columns={3} spacing={4} mt={4}>
            <Image src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMHByb2plY3R8ZW58MHx8fHwxNzE0MTIzNTc2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="AI Project" />
            <Image src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxRdWFudHVtJTIwY29tcHV0aW5nJTIwcHJvamVjdHxlbnwwfHx8fDE3MTQxMjM1Nzd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Quantum Computing Project" />
            <Image src="https://images.unsplash.com/photo-1630983358494-96012d838b84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxNYWNoaW5lJTIwbGVhcm5pbmclMjBwcm9qZWN0fGVufDB8fHx8MTcxNDEyMzU3N3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Machine Learning Project" />
          </SimpleGrid>
        </Box>

        {/* Contact Information */}
        <Box id="contact">
          <Heading as="h2" size="lg">
            Contact Me
          </Heading>
          <HStack spacing={4} mt={2}>
            <Link href="mailto:yuntongzhang@nus.edu.sg" isExternal>
              <Icon as={FaEnvelope} boxSize={6} />
            </Link>
            <Link href="https://twitter.com/yuntongzhang" isExternal>
              <Icon as={FaTwitter} boxSize={6} />
            </Link>
            <Link href="https://linkedin.com/in/yuntongzhang" isExternal>
              <Icon as={FaLinkedin} boxSize={6} />
            </Link>
            <Link href="https://github.com/yuntongzhang" isExternal>
              <Icon as={FaGithub} boxSize={6} />
            </Link>
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
