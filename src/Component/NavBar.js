import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, IconButton, Image, Input, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../asset/navIcon.png"
import { MdMenu } from "react-icons/md";
const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  // const btnRef = React.useRef()

  return (
    <div>
      <Flex justifyContent={"space-between"} p ={"20px 5%"} alignItems={"center"}>
        <Box>
          <Image src={Logo} w={"60%"}/>
        </Box>
        <Flex gap={"15px"}   boxShadow={"xl"}  borderRadius={"18px"} p={"15px 25px"} display={["none","none","none","flex"]} >
          <Link>Home</Link>
          <Link>About Us</Link>
          <Link>Our Service</Link>
          <Link>Find Provider</Link>
          <Link>Social Workers</Link>
          <Link>Contact Us</Link>
        </Flex>
        <Flex gap={"13px"} display={["none","none","none","flex"]} >
      <Link to="/">    <Button borderRadius={"19px"}>Login</Button></Link>
          <Link to="/Register">  <Button bg={" #142653;"} borderRadius={"19px"} color={"white"}>Register</Button>
          </Link>
        </Flex>
        <Box display={["block","block","block","none"]}>
          <IconButton  onClick={onOpen} icon={<MdMenu />}/>
        <Drawer 
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        
        
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody px="40px" >
          <Flex  gap={4}flexDirection={"column"}> 
          <Link to="/">Home</Link>
          <Link>About Us</Link>
          <Link>Our Service</Link>
          <Link>Find Provider</Link>
          <Link>Social Workers</Link>
          <Link>Contact Us</Link>
         <Link to="/Register"> <Button  bg={" #142653;"} borderRadius={"19px"} color={"white"}>Register</Button></Link>
      <Link to="/">  <Button borderRadius={"19px"}>Login</Button></Link>
          </Flex>
          
          </DrawerBody>
        </DrawerContent>
      </Drawer>

        </Box>
      </Flex>
    </div>
  );
};

export default NavBar;
