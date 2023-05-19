import { Button, Input, Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../component/css/Reset.css";
const Reset = () => {
  const [email, setEmail] = useState("");
  const handelchange = () => {
    fetch(`${process.env.REACT_APP_API}/reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          toast.error(data.error);
        } else {
          toast.success(data.message);
        }
      });
  };

  return (
    <Box
      width={{ base: "100vw", md: "240px", lg: "30vw" }}
      height={{ base: "100%", md: "240px", lg: "50vh" }}
      margin="0 auto"
      padding="0 15px"
      textAlign="center"
      display="flex"
      alignItems="center"
      justifyContent="center"
      marginTop={{ base: "30px", md: "0" }}
      flexDirection="column"
      gap="12px"
      background="#fff"
      borderRadius="20px"
      boxShadow={{
        base: "0px",
        lg: "0px 187px 75px rgba(0, 0, 0, 0.01), 0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09), 0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)",
      }}
      p={{ base: "30px", md: "0" }}
    >
      <Text
        fontSize={{ base: "20px", md: "23px", lg: "4xl" }}
        fontWeight="900"
        color={"hsl(233deg 27% 24%)"}
      >
        Reset your password
      </Text>
      <Box display="flex" flexDirection="column" gap="10px" width="80%">
        <Input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          placeholder="Enter your Email Adress"
          outline="0"
          marginTop={"5vh"}
          background="rgb(255, 255, 255)"
          boxShadow="transparent 0px 0px 0px 1px inset"
          padding="0.6em"
          borderRadius="0px"
          border="1px solid #333"
          color="black"
          fontSize={{ base: "14px", md: "16px" }}
        />
        <Button
          border="0"
          background={"hsl(233deg 27% 24%)"}
          color="#fff"
          padding={{ base: "0.5em 1em", md: "0.68em" }}
          borderRadius="5px"
          fontWeight="bold"
          fontSize={{ base: "14px", md: "16px" }}
          _hover={{ opacity: 0.8 }}
          marginTop={"5vh"}
          onClick={handelchange}
        >
          Reset
        </Button>
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default Reset;
