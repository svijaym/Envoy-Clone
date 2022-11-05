import { Button, Heading, Menu, MenuButton, MenuItem, MenuList, Spacer, Text } from '@chakra-ui/react'

import React from 'react'

const Billing = () => {
  return (
    <div>
        <div>
            <div>
                <img src="https://dashboard.envoy.com/assets/images/logo-small-red-29747f5d18c38b072069367be9afc3ba.svg" alt="" /><br />
                <Heading>Ncn HQ</Heading>
            </div>
            <div>
                <Heading>Home</Heading>
                <Heading>Protect</Heading>
                <Heading>Visitors</Heading>
                <Heading>Deliveries</Heading>
                <Heading>Desks</Heading>
                <Heading>Rooms</Heading>
                <Heading>Employee directory</Heading>
                <Heading>Apps</Heading>
                <Spacer/>
                <Heading>Help center</Heading>
                <Heading>Status page</Heading>
                <Heading>Billing</Heading>
                <Heading>Buy devices and badges</Heading>
                <Menu>
                    <MenuButton as={Button} colorScheme='pink'>
                        User
                    </MenuButton>
                    <MenuList>                       
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>Send feedback</MenuItem>
                        <MenuItem>Logout </MenuItem>
                    </MenuList>
                </Menu>
            </div>
        </div>
        \<div>
            <Heading>Billing</Heading>
            <Heading>Products</Heading>
            <div>
                <div>
                    <div>
                        <img src="https://dashboard.envoy.com/assets/images/app-icons/visitors-3829c4a4fc5b8d98ef3d3f539cf394ea.svg" alt="" />
                    </div>
                    <div>
                        <Text>Visitors (includes Protect)</Text>
                        <Text>The easiest way to sign in visitors.</Text>
                    </div>
                </div>
                <div>
                <Button colorScheme='red' size='lg' borderRadius="5px">Learn more</Button>
                </div>
                <div>
                <div>
                    <div>
                        <img src="https://dashboard.envoy.com/assets/images/app-icons/deliveries-a7230719cbd206d4de5fae26eec430ba.svg" alt="" />
                    </div>
                    <div>
                        <Text>Deliveries</Text>
                        <Text>The simple solution for office deliveries.</Text>
                    </div>
                </div>
                <div>
                <Button colorScheme='red' size='lg' borderRadius="5px">Learn more</Button>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <img src="https://dashboard.envoy.com/assets/images/app-icons/rooms-eb37606ccbb74a5eb978024562782961.svg" alt="" />
                    </div>
                    <div>
                        <Text>Rooms</Text>
                        <Text>Making the most of your space.</Text>
                    </div>
                </div>
                <div>
                <Button colorScheme='red' size='lg' borderRadius="5px">Learn more</Button>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <img src="https://dashboard.envoy.com/assets/images/app-icons/desks-701b2d3088b014381a32d059fff32e45.svg" alt="" />
                    </div>
                    <div>
                        <Text>Desks</Text>
                        <Text>Ensure your employees can work at a safe distance.</Text>
                    </div>
                </div>
                <div>
                <Button colorScheme='red' size='lg' borderRadius="5px">Learn more</Button>
                </div>
            </div>
            </div>
        </div>
        <Heading>Payment method</Heading>
        <div>
            <div>
                <Heading>No card on file</Heading>
                <Text>Add a credit card to continue using Envoy.</Text>
            </div>
            <div><Button colorScheme='red' size='lg' borderRadius="5px">Add</Button></div>
        </div>
        <Heading>No card on file</Heading>
        <div>
            <Text>DATE</Text>
            <Spacer/>
            <Text>SUBSCRIPTION</Text>
            <Text>AMOUNT</Text>
            <Text>RECEIPT</Text>
            <Text>STATUS</Text>
        </div>
        <p>Questions about your bill? Contact us.</p>
        <p>↓ Download Envoy's W-9</p>
    </div>
  )
}

export default Billing