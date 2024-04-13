import {
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import navIcon from "../asset/navIcon.png";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box bg={"#142653;"} color={"white"}>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          fontSize={"12px"}
          fontWeight={"500"}
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr " }}
          spacing={8}
        >
          <Stack w="80%">
            <Box>
              <Image src={navIcon} h="80%" />
            </Box>
            <Text fontSize={"10px"}>
              © 2022 Chakra Templates. All rights reservedLet us do the NDIS
              Provider search for you, connecting you with verified local
              providers to choose from
            </Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader fontSize={"24px"} fontWeight={"700"}>
              Quick Link
            </ListHeader>
            <Box as="a" href={"#"}>
              {">>"} Home
            </Box>
            <Box as="a" href={"#"}>
              {">>"}About us
            </Box>
            <Box as="a" href={"#"}>
              {">>"} Our Services
            </Box>
            <Box as="a" href={"#"}>
              {">>"} Contact us
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader fontSize={"24px"} fontWeight={"700"}>
              Services
            </ListHeader>
            <Box as="a" href={"#"}>
              {">>"}Find Providers
            </Box>
            <Box as="a" href={"#"}>
              {">>"} Social Workers
            </Box>
            <Box as="a" href={"#"}>
              {">>"} For Providers
            </Box>
            <Box as="a" href={"#"}>
              {">>"} Find Insurance
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader fontSize={"24px"} fontWeight={"700"}>
              Contact Information
            </ListHeader>
            <Box as="a" href={"#"}>
              +8801879782939
            </Box>
            <Box as="a" href={"#"}>
              Info@sanbarisol.com
            </Box>
            <Box as="a" href={"#"}>
              2464 Royal Ln. Mesa, New Jersey 45463
            </Box>
          </Stack>
        </SimpleGrid>
        <Flex gap={"6"}>
          <FaFacebook />
          <FaXTwitter />
          <FaInstagram />
          <FaYoutube />
        </Flex>
        <Flex fontSize={"12px"} justifyContent={"space-between"}>
          {" "}
          <Text>@NDIS Provider All rights reserved.</Text>
          <Text>Term of Use Privacy Policy</Text>
        </Flex>
        <Divider colorScheme={"red"} />
        <Text fontSize={"12px"}>
          We acknowledge the Traditional Owners of the land on which we live and
          work, we pay our respects to Elders past, present and emerging, and we
          celebrate the continuation of cultural, spiritual and educational
          practices of Aboriginal and Torres Strait Islander peoples.
        </Text>
      </Container>
    </Box>
  );
}
