import React from "react";
import { Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      bg={"hsl(233deg 27% 24%);"}
      widht={"100%"}
      height={"50px"}
      marginTop={"20%"}
      marginBottom={"0px"}
      alignItems={"baseline"}
      position={"sticky"}
      top={"90%"}
    ></Flex>
  );
};

export default Footer;
