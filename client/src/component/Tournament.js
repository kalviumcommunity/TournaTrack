import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
const Tournament = () => {
  return (
    <Box>
      <Flex justifyContent={"space-around"} marginTop={"5"}>
        <Link to="/tournamentparticipated">
          <Flex fontSize={"xx-large"}>Participated Tournament</Flex>
        </Link>
        <Link to="/tournamentcreated">
          <Flex fontSize={"xx-large"}>Created Tournament</Flex>
        </Link>
      </Flex>
    </Box>
  );
};

export default Tournament;
