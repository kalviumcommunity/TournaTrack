import React, { useState } from "react";
import { Box, Input, Button, Text, FormControl } from "@chakra-ui/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import "../component/css/Reset.css";
const Newpassword = () => {
  const [password, setPassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const { id, token } = useParams();
  const PostData = async (e) => {
    if (password !== cpassword) {
      toast.error("both password should match");
      return;
    }
    const res = await fetch(
      `${process.env.REACT_APP_API}/newpassword/${id}/${token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password,
          cpassword,
        }),
      }
    );
    const data = await res.json();
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
    }
  };
  return (
    <>
      <Box
        width={{ base: "100vw", md: "240px", lg: "30vw" }}
        height={{ base: "50vh", md: "240px", lg: "50vh" }}
        margin={{ base: "0", md: "0 auto", lg: "0 auto" }}
        padding="0 15px"
        textAlign="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginTop={{ base: "0", md: "0", lg: "10vh" }}
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
          text-alig="center"
          fontSize={{ base: "20px", md: "23px", lg: "4xl" }}
          fontWeight="900"
          color={"hsl(233deg 27% 24%)"}
          marginBottom={"2vh"}
        >
          Change Password
        </Text>
        <FormControl
          direction="column"
          spacing={10}
          pl="2em"
          pr="2em"
          pb="0.4em"
          bg="white"
          borderRadius="20px"
          display="flex"
          flexDirection="column"
          gap="10px"
          width="80%"
        >
          <Input
            outline="0"
            marginTop={{ base: "20px", md: "0" }}
            background="rgb(255, 255, 255)"
            boxShadow="transparent 0px 0px 0px 1px inset"
            padding="0.6em"
            borderRadius="0px"
            border="1px solid #333"
            color="black"
            fontSize={{ base: "14px", md: "16px" }}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter new password"
          />
          <Input
            outline="0"
            marginTop={{ base: "1vh", md: "1vh", lg: "5vh" }}
            background="rgb(255, 255, 255)"
            boxShadow="transparent 0px 0px 0px 1px inset"
            padding="0.6em"
            borderRadius="0px"
            border="1px solid #333"
            color="black"
            fontSize={{ base: "14px", md: "16px" }}
            type="password"
            onChange={(e) => setcpassword(e.target.value)}
            placeholder="Confirm password"
          />
          <Button
            border="0"
            background={"hsl(233deg 27% 24%)"}
            color="#fff"
            padding={{ base: "0.5em 1em", md: "0.68em" }}
            borderRadius="0px"
            fontWeight="bold"
            fontSize={{ base: "14px", md: "16px" }}
            _hover={{ opacity: 0.8 }}
            marginTop={{ base: "1vh", md: "1vh", lg: "5vh" }}
            onClick={PostData}
          >
            Submit
          </Button>
          <ToastContainer />
        </FormControl>
      </Box>
    </>
  );
};

export default Newpassword;
