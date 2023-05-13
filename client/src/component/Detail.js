import React, { useEffect, useState } from "react";
// import data from '../Data';
import {
  Box,
  Button,
  Card,
  Center,
  Flex,
  UnorderedList,
  ListItem,
  Icon,
} from "@chakra-ui/react";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
function Detail() {
  const [details, setDetails] = useState(null);
  const location = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const playerRegister = () => {
    const name = sessionStorage.getItem("name");
    if (name) {
      navigate(`/playerregister/${id}`);
    } else {
      navigate("/signin");
    }
  };
  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch(`${process.env.REACT_APP_API}/home/${id}`);
      const result = await response.json();
      setDetails(result.post);
    };

    fetchDetails();
  }, []);
  console.log(details);

  return (
    <Box textAlign={"center"}>
      {details === null ? (
        <div>Loading</div>
      ) : (
        <Box
          // // backgroundImage={{ base: "", md: details.image, lg: details.image }}
          // height={"100vh"}
          // backgroundSize={"100vw 100vh"}
          // backgroundRepeat={"no-repeat"}
          width={{ base: "100%", md: "100vh", lg: "100vh" }}
          height={{ base: "100%", md: "80vh", lg: "80vh" }}
          marginTop={{ base: "5%", md: "5vh", lg: "5vh" }}
          marginBottom={{ base: "5%", md: "10vh", lg: "10vh" }}
          marginLeft={{ base: "2%", md: "25vw", lg: "25vw" }}
          marginRight={{ base: "5%", md: "25vw", lg: "25vw" }}
          background="hsl(233deg 27% 65%)"
          transition="1s ease-in-out"
          clipPath="polygon(30px 0%, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0% 30px)"
          borderTopRightRadius="20px"
          borderBottomLeftRadius="20px"
          display="flex"
          flexDirection="column"
          _hover={{
            transform: "translateY(-1.5rem)",
            border: "#f2295bf0 0.2em solid",
            borderRadius: "2.5rem 0 2.5rem 0",
          }}
        >
          <Flex
            textAlign={"center"}
            justifyContent={"center"}
            p={{ base: "5rem", md: "5rem", lg: "5rem" }}
            height={{ base: "100%", md: "80vh", lg: "80vh" }}
          >
            <Card
              width={{ base: "100vw", md: "50vw", lg: "70vw" }}
              height={{ base: "100vh", md: "full", lg: "full" }}
              pl={"2rem"}
              backgroundColor={"hsl(233deg 27% 24%);"}
            >
              <Flex
                fontSize={"xxx-large"}
                fontweight={"700"}
                color={"White"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                {" "}
                {details.tournament_name.toUpperCase()}
              </Flex>
              <Flex
                flexDirection={"row"}
                justifyContent={"space-between"}
                mr={"5vw"}
              >
                <Flex
                  color={"white"}
                  fontWeight={"600"}
                  opacity={"0.7"}
                  fontSize={{ base: "small", md: "medium", lg: "large" }}
                >
                  {" "}
                  Start date:
                </Flex>
                <Flex
                  fontWeight={"600"}
                  color={"white"}
                  opacity={"1"}
                  fontSize={{ base: "small", md: "medium", lg: "large" }}
                >
                  {details.start_date}
                </Flex>
              </Flex>
              <Flex
                flexDirection={"row"}
                justifyContent={"space-between"}
                mr={"5vw"}
              >
                <Flex
                  fontWeight={"600"}
                  color={"white"}
                  opacity={"0.7"}
                  fontSize={{ base: "small", md: "medium", lg: "large" }}
                >
                  {" "}
                  Sports :
                </Flex>
                <Flex
                  fontWeight={"600"}
                  opacity={"1"}
                  color={"white"}
                  fontSize={{ base: "small", md: "medium", lg: "large" }}
                >
                  {details.Sports}
                </Flex>
              </Flex>
              <Flex
                flexDirection={"row"}
                justifyContent={"space-between"}
                mr={"5vw"}
              >
                <Flex
                  fontWeight={"600"}
                  color={"white"}
                  opacity={"0.7"}
                  fontSize={{ base: "small", md: "medium", lg: "large" }}
                >
                  {" "}
                  Venue:
                </Flex>
                <Flex
                  fontWeight={"600"}
                  color={"white"}
                  opacity={"1"}
                  fontSize={{ base: "small", md: "medium", lg: "large" }}
                >
                  {details.city}
                </Flex>
              </Flex>
              <Flex
                flexDirection={"row"}
                justifyContent={"space-between"}
                mr={"5vw"}
              >
                <Flex
                  fontWeight={"600"}
                  opacity={"0.7"}
                  fontSize={{ base: "small", md: "medium", lg: "large" }}
                  color={"white"}
                >
                  {" "}
                  Pincode:
                </Flex>
                <Flex
                  fontWeight={"600"}
                  opacity={"1"}
                  fontSize={{ base: "small", md: "medium", lg: "large" }}
                  color={"white"}
                >
                  {details.pincode}
                </Flex>
              </Flex>
              <Flex
                flexDirection={"row"}
                justifyContent={"space-between"}
                mr={"5vw"}
              >
                <Flex
                  fontWeight={"600"}
                  opacity={"0.7"}
                  fontSize={{ base: "small", md: "medium", lg: "large" }}
                  color={"white"}
                >
                  {" "}
                  Contact:
                </Flex>
                <Flex
                  fontWeight={"600"}
                  opacity={"1"}
                  fontSize={{ base: "small", md: "medium", lg: "large" }}
                  color={"white"}
                >
                  {details.contact}
                </Flex>
              </Flex>
              <Flex flexDirection={"column"} justifyContent={"center"}>
                <Flex
                  fontWeight={"600"}
                  opacity={"0.7"}
                  fontSize={{ base: "small", md: "medium", lg: "large" }}
                  color={"white"}
                >
                  Important informatio:
                </Flex>
                <Flex
                  fontWeight={"600"}
                  opacity={"1"}
                  fontSize={"large"}
                ></Flex>

                {details.rules.map((res) => {
                  return (
                    <Flex
                      fontSize={{ base: "small", md: "medium", lg: "large" }}
                      color={"white"}
                    >
                      {res}
                    </Flex>
                  );
                })}
              </Flex>

              <Flex
                justifyContent={"space-around"}
                flexDirection={"row"}
                marginTop={"5vh"}
              >
                <Button
                  display="flex"
                  height="2.5em"
                  width={{ base: "80px", md: "100px", lg: "120px" }}
                  alignItems="center"
                  justifyContent="center"
                  backgroundColor="white"
                  borderRadius="3px"
                  letterSpacing="1px"
                  transition="all 0.2s linear"
                  cursor="pointer"
                  border="none"
                  background="#fff"
                  _hover={{
                    backgroundColor: "green",
                    color: "white",
                  }}
                  onClick={() => playerRegister()}
                >
                  {" "}
                  <Flex alignItems="center">
                    Register
                    <Icon
                      as={IoMdArrowRoundForward}
                      marginRight="5px"
                      marginLeft="5px"
                      fontSize="20px"
                      transition="all 0.4s ease-in"
                    />
                  </Flex>
                </Button>

                <Button
                  display="flex"
                  height="2.5em"
                  width={{ base: "80px", md: "100px", lg: "120px" }}
                  alignItems="center"
                  justifyContent="center"
                  backgroundColor="white"
                  borderRadius="3px"
                  letterSpacing="1px"
                  transition="all 0.2s linear"
                  cursor="pointer"
                  border="none"
                  background="#fff"
                  _hover={{
                    backgroundColor: "red",
                    color: "white",
                  }}
                >
                  <Flex alignItems="center">
                    <Icon
                      as={IoMdArrowRoundBack}
                      marginRight="5px"
                      marginLeft="5px"
                      fontSize="20px"
                      transition="all 0.4s ease-in"
                    />
                    Back
                  </Flex>
                </Button>
              </Flex>
            </Card>
          </Flex>
        </Box>
      )}
    </Box>
  );
}

export default Detail;
