import {
    AbsoluteCenter,
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import bgimage from "../asset/navbg.jpg";
const BgComponent = ({ children, opacity = 0.7 }) => {
  // console.log(image,"tt")

  return (
    <Box bgImage={bgimage} bgPosition={"center"} bgSize={"100% 150%"}  h="400" position={"relative" } zIndex={"-1"}>
    <Box bgColor={"black"}   h="100%" w={"100%"} opacity={"0.4"} position={"absolute"} zIndex={"-1"}></Box>

 <Flex   h="100%"    justifyContent={"center"} zIndex={"0"}  align={"center"} flexDirection={"column"}>
        <Heading textColor={"white"}>Log In your Account</Heading>
        <Text textColor={"white"} >
          At Providers for NDIS, we offer flexible plans tailored to meet the
          diverse needs of our users.
        </Text>
      </Flex>
    </Box>
  );
};

export default BgComponent;
