import { Button, FormLabel, FormControl,Input,Heading, Select, Spacer } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { ArrowForwardIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom';
import Homelogo from './logo-kit.jpg';
import slacki from './slacki.jpeg';
import { AuthContext } from './Context/AuthContext';
const Signup2 = () => {
  const navigate = useNavigate();
  const {toggleauth} = useContext(AuthContext)
  const handleSignup2 =()=>{
    navigate("/dashboard");
    toggleauth();
  };
  const handleSignup1 =()=>{
    navigate("/signup");
  };
  const home=()=>{
    navigate("/");
};
  return (
    <div>
      <div onClick={home}>
            <img style={{width:"200px", height:"100px"}} src={Homelogo} alt="logo"/>
        </div>
      <div  style={{display:"flex",width:"85%",margin:"auto"}}>
        <div style={{width:"85%",textAlign:"left"}}>            
            <form style={{display:"flex",flexDirection:"column",margin:"auto",maxWidth:"300px",gap:"10px"}}>
            <Heading as='h4' size='md' >
            Tell us a bit about your company
            </Heading>
            <FormControl isRequired>
              <FormLabel>Company address</FormLabel>
              <Input placeholder='123 Main St' type="adress" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Company name </FormLabel>
              <Input placeholder='' type="name" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Company name </FormLabel>
              <Select placeholder='Please select...'>
                <option value='option1'>1-49 employees</option>
                <option value='option2'> 50-250 employees</option>
                <option value='option3'>251-1500 employees</option>
                <option value='option3'>1501-5000 employees</option>
                <option value='option3'>5001+ employees</option>
            </Select> 
            </FormControl>
            <br />
            <br />
            <br />
            <div style={{width:"80%",display:"flex"}}>
            <Button onClick={handleSignup1}  leftIcon={<ChevronLeftIcon/>}>Back</Button>
            <Spacer/>
            <Button onClick={handleSignup2} rightIcon={<ArrowForwardIcon />} colorScheme='red' variant='solid'>Let's go</Button>
            </div>
            </form> 
            
        </div>
        <div style={{width:"40%",textAlign:"left"}}>
          <div >
              <Heading><span style={{color:"red"}}>Over 10,000</span> companies trust Envoy to welcome employees and guests to their workplaces</Heading>
          </div>
          <div>
              <img src={slacki} alt="slacki" />
          </div>
        </div>
    </div>
    </div>
  )
}

export default Signup2;