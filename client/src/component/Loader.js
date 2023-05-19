import React from "react";
import { Box } from "@chakra-ui/react";
import "../component/css/Loader.css";
const Loader = () => {
  return (
    <Box
      width="100vw"
      height="50vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      position={"fixed"}
    >
      <Box className="spinner"></Box>
    </Box>
  );
};

export default Loader;
