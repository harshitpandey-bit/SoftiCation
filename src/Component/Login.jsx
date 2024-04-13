
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Divider,
  Image,
} from '@chakra-ui/react'
import { FcGoogle } from "react-icons/fc";

import { Link } from 'react-router-dom'
import navIcon from "../asset/navIcon.png"
const Login=()=> {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')} mb="30px">
      <Stack spacing={8} mx={'auto'}  mt="20px"w="500px" py={10} px={6}   bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'} >
          <Image src={navIcon} w="200px"  mx={8}/>
        <Box
          rounded={'lg'}
        
          p={8 } >
            <Stack >
          <Heading  color="#142653"fontSize={'2xl'}>Log in your account</Heading>
         
        </Stack>
          <Stack spacing={4} mt ="10px">
            
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email"border={"1px solid #FFA32B"} p={"25px"} borderRadius={"28px"} placeholder='Email'/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password"p={"25px"} border={"1px solid #FFA32B"}borderRadius={"28px"} placeholder='Password' />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
              </Stack>
              <Flex gap={"1px"} alignItems={"center"}>
                <Divider border={"1px solid #FFA32B"} />
              <Text color  ={"#FFA32B"}>or</Text>
              <Divider border={"1px solid #FFA32B"}/>
              </Flex>
              <Button gap={"5px"}bg={"none"} p={"25px"}border={"1px solid #FFA32B"} borderRadius={"28px"}justifyContent={"flex-start"}> <FcGoogle size={"25px"}/> Continue with Google</Button>
              <Button
                bg={'#FFA32B'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }} p={"25px"}borderRadius={"28px"} >
                Sign in
              </Button>
             <Stack gap={4} textAlign={"center"}> <Text>Reset password</Text>
              <Text>Don't have account?</Text>
              <Link to="/Register"><Text color={"#FFA32B"}>Register</Text></Link>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default Login