import { Heading ,Spacer,Text} from '@chakra-ui/react'
import {FaTwitter} from "react-icons/fa"

import React from 'react'
import { useNavigate } from 'react-router-dom'
const data = [
    {
        id:1,
        avt:"https://cdn.shopify.com/s/files/1/0086/0402/4911/products/windfall-portrait_360x.jpg?v=1597361230",
        name:"Windfall (portrait) for 10. iPad",
        price:"$139.00"
    },
    {
        id:2,
        avt:"https://cdn.shopify.com/s/files/1/0086/0402/4911/products/expiring-badges_360x.gif?v=1598544555",
        name:"Expiring white badges",
        price:"$275.00"
    },
    {
        id:3,
        avt:"https://cdn.shopify.com/s/files/1/0086/0402/4911/products/Rest-Hero-Render-2_360x.jpg?v=1597360680",
        name:"@Rest universal tablet stand",
        price:"$45.00"
    },
    {
        id:4,
        avt:"https://cdn.shopify.com/s/files/1/0086/0402/4911/products/custom-color-badges_360x.jpg?v=1597360891",
        name:"Custom color badges",
        price:"$30.00"
    },
    {
        id:5,
        avt:"https://cdn.shopify.com/s/files/1/0086/0402/4911/products/label-frame_360x.jpg?v=1597361060",
        name:"Label frame for badge printer",
        price:"$3.00"
    },
    {
        id:6,
        avt:"https://cdn.shopify.com/s/files/1/0086/0402/4911/products/blank-badges_360x.jpg?v=1597360821",
        name:"Blank badges",
        price:"$20.00"
    },
    {
        id:7,
        avt:"https://cdn.shopify.com/s/files/1/0086/0402/4911/products/ipad-space-gray_cf3039b7-7909-4e3a-bffe-90a3d7410065_360x.jpg?v=1643225240",
        name:"iPad (9th Gen)",
        price:"$329.00"
    },
]
const Store = () => {
    const navigate = useNavigate();
    const handleHome = ()=>{
        navigate("/")
    }
  return (
    <div style={{width:"90%"}}>
        <div style={{display:"flex",gap:"6rem"}}>
            <img onClick={handleHome} src="https://envoy.com/images/logo-new.svg" alt="logo" />
            <Text>Store</Text>
            <Spacer/>
            <Text>Cart()</Text>
        </div>
        <div style={{display:"flex",width:"100%"}}>
            <div style={{width:"20%"}}>
                <Heading as='h5' size='sm' >Products</Heading>
                <Text style={{color:"red"}} >All Products</Text>
                <Text>iPads</Text>
                <Text>iPad Stands</Text>
                <Text>Badge Printers</Text>
                <Text>Badges</Text>
                <br/>
                <Heading as='h5' size='sm'>Bundles</Heading>
                <Text>Envoy in a Box</Text>
            </div>
            <div style={{width:"80%",textAlign:"left"}}>
                <Heading>Products</Heading>
                <Text>Get up and running quickly with our Envoy-approved hardware. iPads, iPad stands, badge printers, and visitor badges—all compatible with Envoy products so setup is a breeze.</Text>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr"}}>
                    {data?.map((item)=>(<div style={{width:"300px",textAlign:"left"}} key={item.id}>{<img src={item.avt} alt={item.name}/>} <br />{<Heading as='h5' size='md'>{item.name}</Heading>} <br />{item.price}</div>))}
                </div>
            </div>
        </div>
        <div style={{display:"flex",gap:"1rem"}}>
            <Text>Store FAQs</Text>
            <Text>Contact us</Text>
            <Text>Purchase and return policy</Text>
            <Text>Envoy dashboard</Text>
            <Spacer/>
            <FaTwitter />
        </div>
    </div>
  )
}

export default Store