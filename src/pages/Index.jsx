import { Box, Container, Flex, Heading, HStack, Link, Stack, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box as="nav" bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Heading as="h1" size="lg">Financial Times</Heading>
          <HStack spacing={8}>
            <Link href="#" color="white">Home</Link>
            <Link href="#" color="white">World</Link>
            <Link href="#" color="white">Business</Link>
            <Link href="#" color="white">Tech</Link>
            <Link href="#" color="white">Markets</Link>
            <Link href="#" color="white">Opinion</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Headline Section */}
      <Box as="section" bg="gray.100" py={16}>
        <Container maxW="container.lg">
          <Heading as="h2" size="2xl" mb={4}>Main Headline: Breaking News</Heading>
          <Text fontSize="xl">This is the main headline section where the most important news will be displayed.</Text>
        </Container>
      </Box>

      {/* Featured Articles Section */}
      <Box as="section" py={16}>
        <Container maxW="container.lg">
          <Heading as="h3" size="xl" mb={8}>Featured Articles</Heading>
          <Stack spacing={8}>
            <Box>
              <Heading as="h4" size="lg">Article 1</Heading>
              <Text mt={2}>Summary of the first featured article. This is a brief description to entice readers to click and read more.</Text>
            </Box>
            <Box>
              <Heading as="h4" size="lg">Article 2</Heading>
              <Text mt={2}>Summary of the second featured article. This is a brief description to entice readers to click and read more.</Text>
            </Box>
            <Box>
              <Heading as="h4" size="lg">Article 3</Heading>
              <Text mt={2}>Summary of the third featured article. This is a brief description to entice readers to click and read more.</Text>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={8}>
        <Container maxW="container.lg">
          <VStack spacing={4}>
            <Text>Contact us: contact@financialtimes.com</Text>
            <HStack spacing={8}>
              <Link href="#" color="white">Privacy Policy</Link>
              <Link href="#" color="white">Terms of Service</Link>
              <Link href="#" color="white">Advertise</Link>
            </HStack>
          </VStack>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;