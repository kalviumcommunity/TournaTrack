import React from 'react';
import {Box,Heading,OrderedList,ListItem, Button,Text,Stack} from '@chakra-ui/react'
import Card from './PaymentForm';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
  
const Premium = () => {

const checkoutHandler = async () =>{
    // const {data:{key}} = await axios.get(`${process.env.REACT_APP_API}/api/getkey`)
    // const{data:{order}}= await axios.post(`${process.env.REACT_APP_API}/api/payment` ,{
    //     amount
    // })
    const options = {
        key:process.env.REACT_APP_RAZORPAY_KEY_ID,
        key_secret: process.env.REACT_APP_SECREAT_KEY, 
        amount: "2000",
        currency: "INR",
        name: "TournaTrack",
        description: "Premium of Tournatrack",
        image: "https://example.com/your_logo",
        handler: function (response) {
        toast.success("Congratulation");
          },
        // order_id: order.id, 
        // callback_url: `${process.env.REACT_APP_API}/api/paymentverification`,
        prefill: {
            "name": "Subham kunmar",
            "email": "tournatrcak.plattform@gmail.com",
            "contact": "9000090000"
        },
        notes: {
            "address": "Razorpay Corporate Office"
        },
        theme: {
            "color": "#3399cc"
        }
    };
      const razor = new window.Razorpay(options);
       razor.open();
    
}

  return (
    <Box>
        <Heading>Premium Features</Heading>
        <OrderedList>
  <ListItem>You will able to see the details of other team </ListItem>
  <ListItem>you can see the results of other team and points table as well</ListItem>
  <ListItem>You will get some other features as well like dark mode of the website</ListItem>
  <ListItem>You will get notifiactions of your match on the phone as well</ListItem>
  </OrderedList>
       <Text color={'green'}>You can get these all features in  Rs. 20 per month</Text>
      
       <Button onClick={checkoutHandler}>Get preminum</Button>
      <ToastContainer/>
    </Box>
  );
}

export default Premium;
