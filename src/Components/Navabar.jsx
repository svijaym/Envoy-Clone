import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Flex, Spacer,Menu,
  MenuButton,
  MenuList,
  MenuItem, 
  Image,
  Text} from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Homelogo from './logo-kit.jpg';
// import {Link } from "react-router-dom";
const Navabar = () => {
    const navigate = useNavigate();
  const handleLogin =()=>{
    navigate("/login");
  };
  const handleSignup =()=>{
    navigate("/signup");
  };
    const home=()=>{
        navigate("/");
    };
  return (
    <div style={{width:"98%",height:"100px",textAlign:"center"}}>
        {/* <Link to="/">Home</Link> */}
        <Flex>
        <div onClick={home}>
            <img style={{width:"200px", height:"100px",marginTop:"-15px"}} src={Homelogo} alt="logo"/>
        </div>
        <Spacer/>
        <div style={{marginTop:"10px"}}>
          <Button>We're hirirng!</Button> 
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Products
            </MenuButton>
            <MenuList>
              <div style={{display:"flex",gap:"2rem"}}>
              <div style={{textAlign:"left"}}>PRODUCTS
              <MenuItem minH='64px'>
              <div style={{display:"flex",gap:"1rem"}}>
                    <div>
                        <Image boxSize="3rem" src="https://envoy.com/images/icons/products/visitors-app.png" alt="a" />
                    </div>
                    <div>
                        <Text>Visitors</Text>
                        <Text>Visitor managment solutions for any front desk</Text>
                    </div>
                </div>
              </MenuItem>
              <MenuItem minH='64px'>
              <div style={{display:"flex",gap:"1rem"}}>
                    <div>
                        <Image boxSize="3rem" src="https://envoy.com/images/icons/products/protect-app.png" alt="b" />
                    </div>
                    <div>
                        <Text>Protect</Text>
                        <Text>Manage hybrid schedules and keep employees safe</Text>
                    </div>
                </div>
              </MenuItem>
              <MenuItem minH='64px'>
              <div style={{display:"flex",gap:"1rem"}}>
                    <div>
                        <Image boxSize="3rem" src="https://envoy.com/images/icons/products/desks-app.png" alt="c" />
                    </div>
                    <div>
                        <Text>Desks</Text>
                        <Text>Easy desk booking for aflexible workplace</Text>
                    </div>
                </div>
              </MenuItem>
              <MenuItem minH='64px'>
              <div style={{display:"flex",gap:"1rem"}}>
                    <div>
                        <Image boxSize="3rem" src="https://envoy.com/images/icons/products/rooms-app.png" alt="d" />
                    </div>
                    <div>
                        <Text>Roooms</Text>
                        <Text>Room booking made easy for your team</Text>
                    </div>
                </div>
              </MenuItem>
              <MenuItem minH='64px'>
              <div style={{display:"flex",gap:"1rem"}}>
                    <div>
                        <Image boxSize="3rem" src="https://envoy.com/images/icons/products/deliveries-app.png" alt="e" />
                    </div>
                    <div>
                        <Text>Deliveries</Text>
                        <Text>A new way to organise incoming office deliveries</Text>
                    </div>
                </div>
              </MenuItem>
              </div>
              <div style={{textAlign:"left"}}>PLATFORM
              <MenuItem minH='40px'>
                <Image
                  boxSize='2rem'
                  borderRadius='full'
                  src='https://envoy.com/images/icons/24px/red/iphone.svg'
                  alt='Simon the pensive'
                  mr='12px'
                />
                <span>Mobile</span>
              </MenuItem>
              <MenuItem minH='40px'>
                <Image
                  boxSize='2rem'
                  borderRadius='full'
                  src='https://envoy.com/images/icons/24px/red/integrations.svg'
                  alt='Simon the pensive'
                  mr='12px'
                />
                <span>Integrations</span>
              </MenuItem>
              <MenuItem minH='40px'>
                <Image
                  boxSize='2rem'
                  borderRadius='full'
                  src='https://envoy.com/images/icons/24px/red/developer.svg'
                  alt='Simon the pensive'
                  mr='12px'
                />
                <span>Developers</span>
              </MenuItem>
              </div>
              </div>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Solutions
            </MenuButton>
            <MenuList>
              <MenuItem minH='48px'>
                <Image
                  boxSize='2rem'
                  borderRadius='full'
                  src='https://envoy.com/images/icons/24px/red/globe.svg'
                  alt='Fluffybuns the destroyer'
                  mr='12px'
                />
                <span>Hybrid work</span>
              </MenuItem>
              <MenuItem minH='40px'>
                <Image
                  boxSize='2rem'
                  borderRadius='full'
                  src='https://envoy.com/images/icons/24px/red/office.svg'
                  alt='Simon the pensive'
                  mr='12px'
                />
                <span>Support enterprise needs</span>
              </MenuItem>
              <MenuItem minH='40px'>
                <Image
                  boxSize='2rem'
                  borderRadius='full'
                  src='https://envoy.com/images/icons/24px/red/shield.svg'
                  alt='Simon the pensive'
                  mr='12px'
                />
                <span>Enhance security</span>
              </MenuItem>
              <MenuItem minH='40px'>
                <Image
                  boxSize='2rem'
                  borderRadius='full'
                  src='https://envoy.com/images/icons/24px/red/rooms.svg'
                  alt='Simon the pensive'
                  mr='12px'
                />
                <span>Space managment</span>
              </MenuItem>
              <MenuItem minH='40px'>
                <Image
                  boxSize='2rem'
                  borderRadius='full'
                  src='https://envoy.com/images/icons/24px/red/pulse.svg'
                  alt='Simon the pensive'
                  mr='12px'
                />
                <span>Workplace health and safety</span>
              </MenuItem>
              <MenuItem minH='40px'>
                <Image
                  boxSize='2rem'
                  borderRadius='full'
                  src='https://envoy.com/images/icons/16px/red/sparkles.svg'
                  alt='Simon the pensive'
                  mr='12px'
                />
                <span>Workplace experience</span>
              </MenuItem>
              <MenuItem minH='40px'>
                <Image
                  boxSize='2rem'
                  borderRadius='full'
                  src='https://envoy.com/images/icons/24px/red/document.svg'
                  alt='Simon the pensive'
                  mr='12px'
                />
                <span>Meet complience requirments</span>
              </MenuItem>
            </MenuList>
          </Menu> 
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Resources
            </MenuButton>
            <MenuList>
              <MenuItem minH='48px'>
                <Image
                  boxSize='2rem'
                  borderRadius='full'
                  src='https://envoy.com/images/icons/24px/red/office.svg'
                  alt='Fluffybuns the destroyer'
                  mr='12px'
                />
                <span>Workplace trends report</span>
              </MenuItem>
              <MenuItem minH='40px'>
                <Image
                  boxSize='2rem'
                  borderRadius='full'
                  src='https://envoy.com/images/icons/24px/red/pen-nib.svg'
                  alt='Simon the pensive'
                  mr='12px'
                />
                <span>Blog</span>
              </MenuItem>
              <MenuItem minH='40px'>
                <Image
                  boxSize='2rem'
                  borderRadius='full'
                  src='https://envoy.com/images/icons/24px/red/book.svg'
                  alt='Simon the pensive'
                  mr='12px'
                />
                <span>E books</span>
              </MenuItem>
              <MenuItem minH='40px'>
                <Image
                  boxSize='2rem'
                  borderRadius='full'
                  src='https://envoy.com/images/icons/24px/red/webinar.svg'
                  alt='Simon the pensive'
                  mr='12px'
                />
                <span>Webinars</span>
              </MenuItem>
              <MenuItem minH='40px'>
                <Image
                  boxSize='2rem'
                  borderRadius='full'
                  src='https://envoy.com/images/icons/24px/red/announcements.svg'
                  alt='Simon the pensive'
                  mr='12px'
                />
                <span>Case studies</span>
              </MenuItem>
              <MenuItem minH='40px'>
                <Image
                  boxSize='2rem'
                  borderRadius='full'
                  src='https://envoy.com/images/icons/16px/red/sparkles.svg'
                  alt='Simon the pensive'
                  mr='12px'
                />
                <span>Data insigths</span>
              </MenuItem>
              <MenuItem minH='40px'>
                <Image
                  boxSize='2rem'
                  borderRadius='full'
                  src='https://envoy.com/images/icons/24px/red/data.svg'
                  alt='Simon the pensive'
                  mr='12px'
                />
                <span>Return to workplace index</span>
              </MenuItem>
              <MenuItem minH='40px'>
                <Image
                  boxSize='2rem'
                  borderRadius='full'
                  src='https://envoy.com/images/icons/24px/red/megaphone.svg'
                  alt='Simon the pensive'
                  mr='12px'
                />
                <span>Product news</span>
              </MenuItem>
              <MenuItem minH='40px'>
                <Image
                  boxSize='2rem'
                  borderRadius='full'
                  src='https://envoy.com/images/icons/24px/red/globe.svg'
                  alt='Simon the pensive'
                  mr='12px'
                />
                <span>Hybrid work resource hub</span>
              </MenuItem>
            </MenuList>
          </Menu> 
          <Button>Demo</Button> 
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Pricing
            </MenuButton>
            <MenuList>
            <MenuItem minH='40px'>
                <Image
                  boxSize='2rem'
                  borderRadius='full'
                  src='https://envoy.com/images/icons/24px/red/tag.svg'
                  alt='Simon the pensive'
                  mr='12px'
                />
                <span>Plans and pricing</span>
              </MenuItem>
              <MenuItem minH='40px'>
                <Image
                  boxSize='2rem'
                  borderRadius='full'
                  src='https://envoy.com/images/icons/24px/red/calculator.svg'
                  alt='Simon the pensive'
                  mr='12px'
                />
                <span>Get a quote</span>
              </MenuItem>
              <MenuItem minH='40px'>
                <Image
                  boxSize='2rem'
                  borderRadius='full'
                  src='https://envoy.com/images/icons/24px/red/phone.svg'
                  alt='Simon the pensive'
                  mr='12px'
                />
                <span>Call sales:(877)652-2808</span>
              </MenuItem>
              <MenuItem minH='40px'>
                <Image
                  boxSize='2rem'
                  borderRadius='full'
                  src='https://envoy.com/images/icons/24px/red/envelope.svg'
                  alt='Simon the pensive'
                  mr='12px'
                />
                <span>Contact us</span>
              </MenuItem>
            </MenuList>
          </Menu> 
          <Button onClick={handleLogin}>Log in</Button>
          <Button onClick={handleSignup} colorScheme='red' borderRadius="5px">Get started</Button>
        </div>
        </Flex>
    </div>
  )
}

export default Navabar