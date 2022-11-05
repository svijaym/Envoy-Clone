import { Button, Flex, Heading, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import Navabar from './Navabar'
import banner from './mid.jpeg';
import mobbnr from './mobbnr.jpeg';
import vidbnr from './vidbnr.jpg';
import Workplace from './Workplace.png';
import enterprise from './enterprise.png';
import hybrd from './hybrd.png';
import redt from './redt.jpeg';
import homelogos from './homelogos.svg';
const Home = () => {
  return (
    <div>
        <Navabar/><br />
        <div style={{backgroundImage: `url(${banner})`,width:"100%",height:"600px"}}>
          <div style={{width:"28%",marginLeft:"250px",textAlign:"left",lineHeight:"100px"}}>
            <Heading as='h1' size='xl'color="#3f4450" >
             Welcome to the flexible workplace platform
            </Heading>
            <Heading as='h5' size='sm' color="#868d9d">
            Join thousands of companies that rely on Envoy to manage safe hybrid workplaces, so everyone inside can connect, collaborate, and thrive.
            </Heading>
            <input type="email" placeholder='Enter your email'/>
            <Button colorScheme='red' borderRadius="none">Get started</Button>
            <Heading as='h6' size='xs' color="#8b92a1">
            Talk to our sales team. <span style={{color:"red"}}>Contact us</span>
            </Heading>
          </div>
        </div>
        <Spacer/>
        <div style={{backgroundColor:"#b5e0ec",width:"100%",height:"500px",display:"flex"}}>
          <div style={{width:"50%",margin:"auto",textAlign:"left",gap:"10px"}}>
            <Heading as='h2' size='2xl' color="#4141a2">
              Let's go to work
            </Heading>
            <Heading as='h5' size='sm' color="#4141a2">
              Don’t let hybrid work get in the way of working together. Give employees an easy way to manage their hybrid schedule, invite co-workers onsite, and book a nearby desk.
            </Heading>
            <button style={{backgroundColor:"#4141a2",borderRadius:"5px",padding:"10px 20px 10px 20px",color:"white"}}>Learn more</button>
          </div>
          <div>
            <img src={mobbnr} alt="mobbnr" />
          </div>
        </div>
        <Spacer/>
        <div style={{display:"grid",width:"80%",gridTemplateColumns:"1fr 1fr 1fr",margin:"auto",gap:"20px",marginTop:"50px"}}>
          <div style={{textAlign:"left",lineHeight:"30px"}}>
            <Flex style={{gap:"1rem"}}>
              <img style={{width:"48px"}} src="https://envoy.com/images/icons/products/protect-app.png" alt="a" />
              <Heading as='h3' size='lg'>Protect</Heading>
            </Flex>
            <Text>Manage hybrid schedules and keep employees safe.</Text>
            <Flex style={{gap:"1rem"}}>
              <Text style={{color:"red"}}>Learn more</Text>
              <Text style={{color:"red"}}>Watch the video</Text>
            </Flex>
          </div>
          <div style={{textAlign:"left",lineHeight:"30px"}}>
            <Flex style={{gap:"1rem"}}>
              <img style={{width:"48px"}} src="https://envoy.com/images/icons/products/visitors-app.png" alt="b" />
              <Heading as='h3' size='lg'>Visitors</Heading>
            </Flex>
            <Text>Welcome guests while keeping people, property, and ideas safe.</Text>
            <Flex style={{gap:"1rem"}}>
              <Text style={{color:"red"}}>Learn more</Text>
              <Text style={{color:"red"}}>Watch the video</Text>
            </Flex>
          </div>
          <div style={{textAlign:"left",lineHeight:"30px"}}>
            <Flex style={{gap:"1rem"}}>
              <img style={{width:"48px"}} src="https://envoy.com/images/icons/products/desks-app.png" alt="c" />
              <Heading as='h3' size='lg'>Desks</Heading>
            </Flex>
            <Text>Empower employees to reserve a desk in the workplace.</Text>
            <Flex style={{gap:"1rem"}}>
              <Text style={{color:"red"}}>Learn more</Text>
              <Text style={{color:"red"}}>Watch the video</Text>
            </Flex>
          </div>
          <div style={{textAlign:"left",lineHeight:"30px"}}>
            <Flex style={{gap:"1rem"}}>
              <img style={{width:"48px"}} src="https://envoy.com/images/icons/products/rooms-app.png" alt="d" />
              <Heading as='h3' size='lg'>Rooms</Heading>
            </Flex>
            <Text>Easily book rooms for collaboration and free up unused space.</Text>
            <Flex style={{gap:"1rem"}}>
              <Text style={{color:"red"}}>Learn more</Text>
              <Text style={{color:"red"}}>Watch the video</Text>
            </Flex>
          </div>
          <div style={{textAlign:"left",lineHeight:"30px"}}>
            <Flex style={{gap:"1rem"}}>
              <img style={{width:"48px"}} src="https://envoy.com/images/icons/products/deliveries-app.png" alt="e" />
              <Heading as='h3' size='lg'>Deliveries</Heading>
            </Flex>
            <Text>Declutter the mailroom by prompting package pickup.</Text>
            <Flex style={{gap:"1rem"}}>
              <Text style={{color:"red"}}>Learn more</Text>
              <Text style={{color:"red"}}>Watch the video</Text>
            </Flex>
          </div>
          <div style={{textAlign:"left"}}>
            <Heading>Envoy's workplace platform</Heading>
          </div>
        </div>
        <Spacer/>
        <div style={{backgroundImage: `url(${vidbnr})`,width:"100%",height:"450px"}}>
          <div style={{textAlign:"center",width:"60%",margin:"auto",marginTop:"100px"}}>
          <Heading as='h3' size='xl' color="white">
              How Lionsgate is setting up their flexible workplace with Envoy Desks
          </Heading>
          <img style={{margin:"auto"}} src="https://envoy.com/images/icons/play-icon-freckle.svg" alt="vd" />
          </div>
        </div>
        <Spacer/>
        <br />
        <br />
        <br />
        <div style={{width:"50%",margin:"auto",textAlign:"center",gap:"10px"}}>
          <Heading as='h2' size='2xl' color="#4141a2">
          The enterprise-grade workplace platform
          </Heading>
          <br />
          <Heading as='h5' size='sm' color="#c7cad2" lineHeight="20px">Solve workplace challenges faster with the platform that keeps employees and visitors safe, while ensuring your business stays compliant and secure.</Heading>
          <br />
          <button style={{backgroundColor:"#4141a2",borderRadius:"5px",padding:"10px 20px 10px 20px",color:"white"}}>Learn more</button>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div style={{textAlign:"left",width:"95%",margin:"auto",paddingBottom:"50px"}}>
          <Heading as='h5' size='sm' color="#c7cad2">THE ENVOY BLOG</Heading>
          <br />
          <div style={{width:"600px"}}>
          <Heading as='h2' size='2xl' color="#3f4450">Best practices for productive workplaces</Heading>
          </div>
          <br />
          <Flex style={{gap:"15px"}}>
            <div>
              <img src={Workplace} alt="Workplace" />
              <br />
              <Heading as='h3' size='lg' color="#3f4450">What is workplace experience and why is it important?</Heading>
              <br />
              <Heading as='h5' size='sm' color="#c7cad2">Learn how to create a great workplace experience that makes your employees happy and drives better business outcomes.</Heading>
            </div>
            <div>
              <img src={enterprise} alt="enterprise" />
              <br />
              <Heading as='h3' size='lg' color="#3f4450">What is workplace experience and why is it important?</Heading>
              <br />
              <Heading as='h5' size='sm' color="#c7cad2">Learn how to create a great workplace experience that makes your employees happy and drives better business outcomes.</Heading>
            </div>
            <div>
              <img src={hybrd} alt="hybrd" />
              <br />
              <Heading as='h3' size='lg' color="#3f4450">What is workplace experience and why is it important?</Heading>
              <br />
              <Heading as='h5' size='sm' color="#c7cad2">Learn how to create a great workplace experience that makes your employees happy and drives better business outcomes.</Heading>
            </div>
          </Flex>
        </div>
        <div style={{backgroundColor:"#fa4338",width:"100%",height:"800px"}}>
          <Flex>
            <div style={{width:"32%",margin:"auto",textAlign:"left",gap:"10px"}}>
              <Heading as='h2' size='2xl' color="#c7cad2">
              Great minds think differently.
              </Heading>
              <br />
              <Heading as='h5' size='sm' color="#c7cad2" lineHeight="20px">Companies of every size, industry, and address rely on Envoy to transform their workplaces.</Heading>
              <br />
              <br />
              <button style={{backgroundColor:"#4141a2",borderRadius:"5px",padding:"10px 35px 10px 35px",color:"white"}}>Read all the stories</button>
           </div>
           <div>
            <img src={redt} alt="redt" />
           </div>
          </Flex>
          <br />
          <br />
          <hr />
          <br />
          <img src={homelogos} alt="" />
        </div>
        <br />
        <br />
        <div style={{width:"35%",margin:"auto",textAlign:"center",gap:"10px",lineHeight:"15px"}}>
          <Heading as='h2' size='xl' color="#3f4450">
          Meet the technology powering the workplace—wherever that may be
          </Heading>
          <br />
          <Text as='h5' size='sm' >Envoy’s platform and partners help get people back to the workplace faster and safer. Connect with out-of-the-box integrations for your every need—or use our simple API for everything else.</Text>
          <br />
          <Button colorScheme='red' borderRadius="none">Explore integratinos</Button>
          <Button colorScheme='none' color="red" borderRadius="none">Build your own</Button>
        </div>
        <br />
        <br />
        <Spacer/>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",width:"90%",margin:"auto",textAlign:"left",gridGap:"75px"}}>
          <div>
            <img src="https://envoy.com/images/integrations/slack.svg" alt="sl" />
            <br />
            <Heading as='h5' size='sm'>Slack</Heading>
            <br />
            <Heading as='h5' size='sm' color="#9c9499">Instantly notify employees of every Envoy update directly or in specific channels on Slack.</Heading>
          </div>
          <div>
            <img src="https://envoy.com/images/integrations/aruba.svg" alt="sl" />
            <br />
            <Heading as='h5' size='sm'>Aruba Clearpass</Heading>
            <br />
            <Heading as='h5' size='sm' color="#9c9499">Provision unique Wi-Fi network and password details for each Envoy visitor.</Heading>
          </div>
          <div>
            <img style={{width:"40px"}} src="https://envoy.com/images/integrations/okta.png" alt="sl" />
            <br />
            <Heading as='h5' size='sm'>Okta</Heading>
            <br />
            <Heading as='h5' size='sm' color="#9c9499">Easily sync employee details from Okta to the Envoy employee directory.</Heading>
          </div>
          <div>
            <img src="https://envoy.com/images/integrations/microsoft-teams.svg" alt="sl" />
            <br />
            <Heading as='h5' size='sm'>Microsoft Teams</Heading>
            <br />
            <Heading as='h5' size='sm' color="#9c9499">Automatically notify employees through a private message for every Envoy update.</Heading>
          </div>
          <div>
            <img src="https://envoy.com/images/integrations/docusign-square.svg" alt="sl" />
            <br />
            <Heading as='h5' size='sm'>Docusign</Heading>
            <br />
            <Heading as='h5' size='sm'color="#9c9499" >Automatically send visitors documents to sign via DocuSign.</Heading>
          </div>
          <div>
            <img  style={{width:"40px"}} src="https://envoy.com/images/integrations/eventbrite.png" alt="sl" />
            <br />
            <Heading as='h5' size='sm'>Eventbrite</Heading>
            <br />
            <Heading as='h5' size='sm' color="#9c9499">Simplify event sign-in by importing Eventbrite attendees into Envoy.</Heading>
          </div>
          <div>
            <img style={{width:"40px"}} src="https://envoy.com/images/integrations/g-suite.png" alt="sl" />
            <br />
            <Heading as='h5' size='sm'>Google Drive</Heading>
            <br />
            <Heading as='h5' size='sm' color="#9c9499">Connect any Google Drive account to easily store signed legal documents.</Heading>
          </div>
          <div>
            <img src="https://envoy.com/images/integrations/openpath-o.svg" alt="sl" />
            <br />
            <Heading as='h5' size='sm'>Openpath</Heading>
            <br />
            <Heading as='h5' size='sm' color="#9c9499">Manage building access for employees and visitors from anywhere.</Heading>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div style={{width:"90%",display:"flex",margin:"auto"}}>
          <div style={{width:"50%",textAlign:"left"}}>
          <Heading as='h2' size='2xl' color="tomato">
              Try Envoy for free
            </Heading>
            <br />
            <Heading as='h4' size='sm' color="#9c9499">
              Transforming your workplace is easier than you think. Get started in minutes.
            </Heading>
            <br />
          </div>
          <Spacer/>
          <div>
            <input type="email" placeholder='Enter your email'/>
            <Button colorScheme='red' borderRadius="none">Get started</Button>
          </div>
        </div>
        <div style={{textAlign:"left",width:"90%",margin:"auto"}}>Contact our sales team today at <span style={{color:"red"}}>(877) 652-2808</span></div>
        <Spacer/>
        <div style={{width:"90%",textAlign:"left",margin:"auto",display:'flex',gap:"6rem",fontSize:"16px"}}>
            <div>
                <Heading fontSize='16px' color="#101834">Products</Heading>
                <p style={{color:"#868d9d"}}>Protect</p>
                <p style={{color:"#868d9d"}}>Desks</p>
                <p style={{color:"#868d9d"}}>Visitors</p>
                <p style={{color:"#868d9d"}}>Rooms</p>
                <p style={{color:"#868d9d"}}>Deliveries</p> 
                <p style={{color:"#868d9d"}}>Mobile</p>
                <p style={{color:"#868d9d"}}>Integrations</p>
                <p style={{color:"#868d9d"}}>Parterships</p>
                <p style={{color:"#868d9d"}}>Pricing</p>
                <p style={{color:"#868d9d"}}>Get a quoate</p>
            </div>
            <div>
                <Heading fontSize='16px' color="#101834">Solutions</Heading>
                <p style={{color:"#868d9d"}}>Hybrid work</p>
                <p style={{color:"#868d9d"}}>Enterprise</p>
                <p style={{color:"#868d9d"}}>Security</p>
                <p style={{color:"#868d9d"}}>Space managment</p>
                <p style={{color:"#868d9d"}}>Health and safety</p> 
                <p style={{color:"#868d9d"}}>Workplace experience</p>
                <p style={{color:"#868d9d"}}>Compliance</p>
                <p style={{color:"#868d9d"}}>Touchless sign-in</p>
                <p style={{color:"#868d9d"}}>Access control</p>
                <p style={{color:"#868d9d"}}>Efficiency</p>
                <p style={{color:"#868d9d"}}>Experience</p>
            </div>
            <div>
                <Heading fontSize='16px' color="#101834">Resources</Heading>
                <p style={{color:"#868d9d"}}>Hybrid work resource hub</p>
                <p style={{color:"#868d9d"}}>Help center</p>
                <p style={{color:"#868d9d"}}>Return to index</p>
                <p style={{color:"#868d9d"}}>Envoy store</p>
                <p style={{color:"#868d9d"}}>Customer stories</p>
                <p style={{color:"#868d9d"}}>Demo</p>
                <p style={{color:"#868d9d"}}>Complaience tips</p>
                <p style={{color:"#868d9d"}}>Developers</p>
                <p style={{color:"#868d9d"}}>Glossary</p>
            </div>
            <div>
                <Heading fontSize='16px' color="#101834">Company</Heading>
                <p style={{color:"#868d9d"}}>About Envoy</p>
                <p style={{color:"#868d9d"}}>Vision</p>
                <p style={{color:"#868d9d"}}>Jobs</p>
                <p style={{color:"#868d9d"}}>Blog</p>
                <p style={{color:"#868d9d"}}>Data security</p>
                <p style={{color:"#868d9d"}}>Press</p>
                <p style={{color:"#868d9d"}}>Partner</p>
            </div>
            <Spacer/>
        </div>
        <div style={{display:"flex",gap:"1.5rem"}}>
          <p style={{color:"#868d9d"}}>Contact</p>
          <p style={{color:"#868d9d"}}>Status</p>
          <p style={{color:"#868d9d"}}>Terms of Service</p>
          <p style={{color:"#868d9d"}}>Privacy Policy</p>
          <Spacer/>
        </div>
    </div>
  )
}

export default Home