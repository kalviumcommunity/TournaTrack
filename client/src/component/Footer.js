import React from "react";
import { Flex, Text, Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      bg={"hsl(233deg 27% 24%);"}
      widht={"100%"}
      height={"20vh"}
      marginTop={"20%"}
      marginBottom={"0px"}
      alignItems={"baseline"}
      position={"sticky"}
      top={"90%"}
    >
      {" "}
      <Flex flexDirection={"column"}>
        <Text
          textColor={"white"}
          textAlign={"center"}
          fontSize={{ base: "20px", md: "23px", lg: "xl" }}
          marginTop={"3vh"}
        >
          © 2023 Tournatrack. All rights reserved.
        </Text>
        <Flex
          marginTop={"3vh"}
          marginLeft={"20vw"}
          marginRight={"20vw"}
          justifyContent="space-around"
        >
          <Text
            textColor={"white"}
            fontSize={{ base: "20px", md: "23px", lg: "xl" }}
            marginLeft={"7vw"}
          >
            AboutUs
          </Text>
          <Text
            textColor={"white"}
            fontSize={{ base: "20px", md: "23px", lg: "xl" }}
          >
            tournatrack.platform@gmail.com
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
