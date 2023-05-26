import React from "react";
import { Box } from "@chakra-ui/react";
import "../component/css/Loader.css";
const Loader = () => {
  return (
    <Box
      height="50vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box className="spinner"></Box>
    </Box>
  );
};

export default Loader;
