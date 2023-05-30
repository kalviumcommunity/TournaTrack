import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Tournament from "./Tournament";
import { Link } from "react-router-dom";

const Participated = () => {
  return (
    <Box width="100vw" height="100vh">
      <Tournament />
    </Box>
  );
};

export default Participated;
