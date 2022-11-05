import { Button, Heading, Input } from '@chakra-ui/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import {
  FormControl,
  FormLabel,
} from '@chakra-ui/react'
import Homelogo from './logo-kit.jpg';
const Signup = () => {
  const navigate = useNavigate();
//   const handleLogin =()=>{
//     navigate("/mypresentation");
//   };
  const handleSignup =()=>{
    navigate("/Signup2");
  };
  const home=()=>{
    navigate("/");
};
  return (
    <div>
      <div onClick={home}>
            <img style={{width:"200px", height:"100px"}} src={Homelogo} alt="logo"/>
        </div>
      <div style={{display:"flex",width:"85%",margin:"auto"}}>
        <div style={{width:"85%",textAlign:"left"}}>            
            <form style={{display:"flex",flexDirection:"column",margin:"auto",maxWidth:"300px",gap:"10px"}}>
            <Heading as='h4' size='md' >
            Create your Envoy account
            </Heading>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input placeholder='' />
            </FormControl>
            <div style={{display:"flex"}}>
                <div>
                    <FormControl isRequired>
                      <FormLabel>First name</FormLabel>
                      <Input placeholder='' />
                    </FormControl>
                </div>
                <div>
                    <FormControl isRequired>
                      <FormLabel>Last name</FormLabel>
                      <Input placeholder='' />
                    </FormControl>
                </div>           
            </div>
              <FormControl>
                <FormLabel>Mobile number</FormLabel>
                <Input placeholder=''type="number" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Create password</FormLabel>
                <Input placeholder=''type="password" />
              </FormControl>
            <p style={{fontSize:'12px',color:"rgba(16, 24, 52, 0.75)"}}  >Password must be at least 8 characters and contain at least one capital letter, one lower case letter, and one number</p><br />                         
            <p style={{fontSize:'12px',color:"rgba(16, 24, 52, 0.75)"}}>By clicking "Next" you agree to our Terms of Service, Privacy Policy, and to receive marketing communications from Envoy.</p><br />
            <Button onClick={handleSignup} colorScheme='red' variant='solid'>Next</Button>
            </form> 
        </div>
        <div style={{width:"20%",textAlign:"left",marginTop:"150px",marginBottom:"150px"}}>
            <Heading as='h3' size='lg' color="#3f4450">Envoy saves administrators an average of <span style={{color:"red"}}>100 hours</span>
            per year</Heading>
        </div>
    </div>
    </div>
  )
}

export default Signup;