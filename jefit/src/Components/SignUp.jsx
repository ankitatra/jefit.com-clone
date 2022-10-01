import {
    Box,
    Button,
     Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    VStack,
    Text,
    Image
    
  } from "@chakra-ui/react";
  
  import { Link } from "react-router-dom";
  export default function Signup() {
  
    const handleSubmit=(e)=>{
        alert("SIGN UP SUCCESSFULL")
    }
    
    return (
      <Box
        bgColor="#dbe8f4"
        bgPos="center"
        bgRepeat="no-repeat"
        bgSize="100%"
        Size="100%"
      >
        <Box align="center"
          color="white"
          fontFamily="Montserrat - 700"
          fontSize="36px"
          fontWeight="700"
          fontStyle="normal"
          h={50}
          display="block">
          <img
                style={{  height: "95px" }}
                src="https://www.jefit.com/wp/wp-content/uploads/2021/12/jefit_logo_website_header-3.png"
                alt=""
              />
        </Box>
        <Flex align="center" w="40%" justify="center" m={"auto"}   h="100vh">
          <Box bg="#ebf7ff" p={39} rounded="md" textAlign={"center"}>
            <Heading variant={"solid"}>CREATE ACCOUNT</Heading>
              <Text variant={"ghost"}>Continue with</Text>
              <br />
              <Box>
              <Flex gap={5} justifyContent="center">
                <Box >
                  <Image w={50} borderRadius="10px" src="https://www.jefit.com/images/rg_google.svg"></Image>
                </Box>
                <Box>
                  <Image w={50} borderRadius="10px"  src="https://www.jefit.com/images/rg_fb.svg"></Image>
                </Box>
                <Box>
                  <Image w={50} borderRadius="10px"  src="https://www.jefit.com/images/rg_apple.svg"></Image>
                </Box>
              </Flex>
              <br />
              <Text variant={"ghost"}>Or</Text>
              </Box>
  
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
              <FormControl>
                  <FormLabel htmlFor="username" variant={"smooth"}>Username</FormLabel>
                  <Input
                    id="username"
                    name="username"
                    type="username"
                    placeholder="Enter a username"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="email" variant={"smooth"}>Email</FormLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="password" variant={"smooth"}>Password</FormLabel>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                </FormControl>
                <Button bg="#50b6ff" width="full">
                <Link to="/login">CREATE ACCOUNT</Link>
                </Button>
                <Box alignSelf="center">
                  <Text fontSize='lg'>Already a member? <Link to="/login">Sign in</Link></Text>
                </Box>
                <Box alignSelf="center">
                  <Text variant={"outline"}>By signing up, you agree to the JEFIT Terms of Use and Privacy Policy. We respect and protect your information and privacy.</Text>
                </Box>
                <br />
              
              </VStack>
            </form>
          </Box>
        </Flex>
      </Box>
    );
  }
  
  

// import React from 'react'
// import { Link } from 'react-router-dom'

// const Signup = () => {
//     return (
//         <div style={{ backgroundColor: '#DBE8F4' }}>
//             <br />
//             <br />
//             <div style={{ display: 'flex', justifyContent: 'center' }} >
//                 <img style={{ width: "140px" }} src="https://www.jefit.com/images/jefit_logo_website_signuplogin.svg" alt="" />
//             </div>
//             <div className="loginbox">
//                 <div className="center">
//                     <div className="title">create account</div>
//                     <div className="title2">continue with</div>
//                     <div className='icondiv'>
//                         <img src="https://www.jefit.com/images/rg_google.svg" alt="" className="icon" />
//                         <img src="https://www.jefit.com/images/rg_fb.svg" alt="" className="icon" />
//                         <img src="https://www.jefit.com/images/rg_apple.svg" alt="" className="icon" />
//                     </div>
//                     <div className="title2">Or</div>
//                     <div className='container'>
//                         <div className="mb-3">
//                             <label className="form-label">Username</label>
//                             <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter a username" />
//                         </div>
//                         <div className="mb-3">
//                             <label className="form-label">Email Address</label>
//                             <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter your email" />
//                         </div>
//                         <div className="mb-3">
//                             <label className="form-label">Password</label>
//                             <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Password" />
//                         </div>
//                         <div className="mb-3">
//                             <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Confirm password" />
//                         </div>
//                         <button style={{textAlign:"center", marginLeft:"86px"}} className="btnall">Create account</button>
                        
//                     </div>
//                     <br />
//                     <div style={{ textAlign: 'center' }}>
//                     <p style={{display: 'flex', justifyContent: 'center'}} > <b>Already a member ? </b><Link to="/login"><p> Sign-in </p></Link>  </p>
//                     </div>
                    
//                 </div>
//             </div>
//             <br />
//         </div>
//     )
// }

// export default Signup