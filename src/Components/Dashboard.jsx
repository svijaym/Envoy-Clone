import { Button, Flex, Heading, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const handleLogout = ()=>{
        navigate("/")
    }
    const handleBilling = ()=>{
        navigate("/billing")
    }
    const handleBuy = ()=>{
        navigate("/store")
    } 
    const handleHome = ()=>{
        navigate("/")
    }
    
  return (
    <div style={{display:"flex",width:"100%"}}>
        <div style={{width:"20%"}}>
            <div>
                <img onClick={handleHome} src="https://dashboard.envoy.com/assets/images/logo-small-red-29747f5d18c38b072069367be9afc3ba.svg" alt="" /><br />
                <Heading>Ncn HQ</Heading>
            </div>
            <div>
                <Heading as='h5' size='sm'>Home</Heading>
                <Heading as='h5' size='sm'>Protect</Heading>
                <Heading as='h5' size='sm'>Visitors</Heading>
                <Heading as='h5' size='sm'>Deliveries</Heading>
                <Heading as='h5' size='sm'>Desks</Heading>
                <Heading as='h5' size='sm'>Rooms</Heading>
                <Heading as='h5' size='sm'>Employee directory</Heading>
                <Heading as='h5' size='sm'>Apps</Heading>
                <br />
                <Heading as='h5' size='sm' color="#9c9499">Help center</Heading>
                <Heading as='h5' size='sm' color="#9c9499">Status page</Heading>
                <Heading as='h5' size='sm' color="#9c9499" onClick={handleBilling}>Billing</Heading>
                <Heading as='h5' size='sm' color="#9c9499" onClick={handleBuy}>Buy devices and badges</Heading>
                <Menu>
                    <MenuButton as={Button} colorScheme='pink'>
                        User
                    </MenuButton>
                    <MenuList>                       
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>Send feedback</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout </MenuItem>
                    </MenuList>
                </Menu>
            </div>
        </div>
        <div style={{width:"80%"}}>
            <div style={{textAlign:"left"}}>
                <Heading>Ncn Hq</Heading>
                <Flex style={{textAlign:"left"}}>
                    <div>
                        <Heading as='h5' size='sm'>Visitors</Heading>
                        <p>Welcome guests with a sign-in that makes a great impression and keeps your workplace safe.</p>
                        <p style={{color:"blue"}}>Get started</p>
                    </div>
                    <div>
                        <Heading as='h5' size='sm'>Deliveries</Heading>
                        <p>Save time and avoid package pile up by automating how you manage incoming packages at your workplace.</p>
                        <p style={{color:"blue"}}>Get started</p>
                    </div>
                    <div>
                        <Heading as='h5' size='sm'>Rooms</Heading>
                        <p>Easily find and secure the perfect room for your meeting. Maximize your space with valuable insights about meetings and room usage.</p>
                        <p style={{color:"blue"}}>Get started</p>
                    </div>
                </Flex>
            </div>
            <div style={{textAlign:"left"}}>
            <Heading>Setup guide</Heading>
            <Flex>
                <div>
                    <img src="https://dashboard.envoy.com/assets/images/dashboard/product-desk-a0cff2dfe1ed9e9cd388dd42e8e6a08b.svg" alt="" />
                </div>
                <div>
                    <div>
                        <Text>Finish setting up your workplace</Text>
                        <Text>Add a logo, sync your employee directory and customize your workplace settings.</Text>
                    </div>
                    <div>
                        <Text>Upload your logo. Start →</Text>
                        <Text>Set up your employee directory. Start →</Text>
                    </div>
                </div>
            </Flex>
        </div>
        </div>
        
    </div>
  )
}

export default Dashboard