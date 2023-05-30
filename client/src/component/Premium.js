import React from "react";
import {
  Box,
  Heading,
  OrderedList,
  ListItem,
  Button,
  Text,
  Stack,
  Card,
} from "@chakra-ui/react";
import { FaLockOpen } from "react-icons/fa";

import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Premium = () => {
  const checkoutHandler = async () => {
    // const {data:{key}} = await axios.get(`${process.env.REACT_APP_API}/api/getkey`)
    // const{data:{order}}= await axios.post(`${process.env.REACT_APP_API}/api/payment` ,{
    //     amount
    // })
    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
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
        name: "Subham kunmar",
        email: "tournatrcak.plattform@gmail.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <Box
      p={8}
      marginLeft={"40vh"}
      marginRight={"40vh"}
      marginTop={"10vh"}
      bg="white"
      borderRadius="lg"
      boxShadow="0px 4px 15px rgba(0, 0, 0, 0.1)"
      transition="box-shadow 0.3s ease"
      _hover={{ boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.2)" }}
    >
      <Heading
        mb={4}
        fontSize="2xl"
        fontWeight="bold"
        textAlign="center"
        color="purple.800"
      >
        Premium Features
      </Heading>
      <Card
        mt={4}
        ml={8}
        spacing={2}
        listStyleType="none"
        fontSize="lg"
        textAlign={"right"}
        display={"flex"}
        alignItems={"flex-start"}
      >
        <Text>View details of other teams</Text>
        <Text>View results of other teams and points tables</Text>
        <Text>Enable dark mode for the website</Text>
        <Text>Get match notifications on your phone</Text>

        <Text
          fontSize="lg"
          fontWeight="bold"
          textAlign="center"
          color="green.600"
        >
          Get all these features for only Rs. 20 per month!
        </Text>
        <Text
          fontSize="lg"
          fontWeight="bold"
          textAlign="center"
          color="hsl(233deg 27% 24%)"
        >
          But all these things are in development phase for now, So don't pay
          now{" "}
        </Text>
      </Card>
      <Button
        marginTop="3rem"
        px="1.1em"
        py="0.6em"
        fontWeight="md"
        borderRadius="10px"
        textShadow="2px 2px 3px rgb(136 0 136 / 50%)"
        background="hsl(233deg 27% 24%)"
        bgPosition="left center"
        transition="background .3s ease"
        color="white"
        _hover={{
          bgSize: "320%",
          bgPosition: "right center",
          svg: { fill: "white" },
        }}
        onClick={checkoutHandler}
      >
        <FaLockOpen size={23} color="#f09f33" />
        <span ml="0.4rem">Unlock Premium</span>
      </Button>

      <ToastContainer />
    </Box>
  );
};

export default Premium;
