import { Flex, Heading, Spacer } from '@chakra-ui/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Homelogo from './logo-kit.jpg';
import { AuthContext } from './Context/AuthContext';
import { useContext } from 'react'
const Login2 = () => {
  const {toggleauth} = useContext(AuthContext)
  const navigate = useNavigate();
  const handleLogin =()=>{
    navigate("/dashboard");
    toggleauth();
  };
  return (
    <div style={{width:"30%",margin:"auto",textAlign:"center"}}>
        <img style={{width:"200px", height:"100px"}} src={Homelogo} alt="logo"/>
        <br />
        <br />
        <Heading as='h4' size='md' >Log in to the Envoy dashboard</Heading>
        <br />
        <label fontSize='16px' color="#101834" >Password</label><br />
        <input style={{ border: "2px solid #ccc"}} type="Password"/><br />
        <button onClick={handleLogin} style={{backgroundColor:"red",borderRadius:"5px",padding:"10px 80px 10px 80px",color:"white"}}>Next</button>
        <Flex>
        <p style={{fontSize:'12px',color:"rgba(16, 24, 52, 0.75)"}}>Forgot your password?</p>
        <Spacer/>
        <p style={{fontSize:'12px',color:"rgba(16, 24, 52, 0.75)"}}>Change email</p>
        </Flex>
    </div>
  )
}

export default Login2;