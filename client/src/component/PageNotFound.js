import React from "react";
import { Button, Flex, Heading, Text, Box } from "@chakra-ui/react";
const PageNotFound = () => {
  return (
    <Flex
      id="error-page"
      alignItems="center"
      justifyContent="center"
      bgGradient="repeating-linear(-45deg, #71b7e6, #69a6ce, #b98acc, #ee8176, #b98acc, #69a6ce, #9b59b6)"
    >
      <Flex
        display={"flex"}
        flexDirection={"column"}
        className="content"
        maxW="600px"
        textAlign="center"
        bg="#fff"
        boxShadow="0px 5px 10px rgba(0,0,0,0.1)"
        p={8}
        margin={"5%"}
      >
        <Heading
          as="h2"
          className="header"
          fontSize="18vw"
          lineHeight="1em"
          pos="relative"
        >
          404
          <Box
            pos="absolute"
            top={0}
            left={0}
            right={0}
            bgGradient="repeating-linear(-45deg, #71b7e6, #69a6ce, #b98acc, #ee8176, #b98acc, #69a6ce, #9b59b6)"
            bgClip="text"
            color="transparent"
            textShadow="1px 1px 2px rgba(255,255,255,0.25)"
            style={{
              animation: "animate 10s ease-in-out infinite",
              position: "absolute",
              content: "'404'",
            }}
          />
        </Heading>
        <Heading
          as="h4"
          fontSize="2em"
          mb={4}
          textTransform="uppercase"
          color="#000"
          maxW="600px"
          pos="relative"
        >
          Opps! Page not found
          <Box
            pos="absolute"
            top={0}
            left={0}
            right={0}
            textShadow="1px 1px 2px rgba(255,255,255,0.4)"
            bgClip="text"
            color="transparent"
          />
        </Heading>
        <Text fontSize="1.2em" color="#0d0d0d">
          Sorry, the page you're looking for doesn't exist.
        </Text>
        <Flex className="btns" mt={6} justifyContent={"center"}>
          <Button colorScheme="teal" variant="outline">
            Return home
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PageNotFound;
