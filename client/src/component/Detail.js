import React, { useEffect, useState } from "react";
// import data from '../Data';
import bgimage from "../assest/vectorimg.svg";
import { Box, Button, Card, Center, Flex, Image } from "@chakra-ui/react";
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
    <Box minHeight={"100vh"}>
      <Image
        src={bgimage}
        position={"absolute"}
        zIndex={"-5"}
        height={{ base: "70vh", md: "100vh", lg: "100vh" }}
        width={{ base: "100vw", md: "100vw", lg: "100vw" }}
      />
      <Box textAlign={"center"}>
        {details === null ? (
          <div>Loading</div>
        ) : (
          <Box
            // backgroundImage={{ base: "", md: bgimage, lg: bgimage }}
            height={{ base: "70vh", md: "100vh", lg: "100vh" }}
            backgroundSize={"100vw"}
            backgroundRepeat={"no-repeat"}
            width={{ base: "100vw", md: "100vw", lg: "100vw" }}
          >
            <Flex
              textAlign={"center"}
              justifyContent={"center"}
              p={{ base: "1vw", md: "5rem", lg: "5rem" }}
              height={{ base: "100%", md: "80vh", lg: "80vh" }}
              width={{ base: "100%" }}
            >
              <Card
                width={{ base: "100vw", md: "50vw", lg: "40vw" }}
                height={{ base: "70vh", md: "full", lg: "full" }}
                pl={"2rem"}
                backgroundColor={"#C9D6DF"}
                marginLeft={{ base: "0px", lg: "2vw" }}
              >
                <Flex
                  fontSize={"xxx-large"}
                  fontweight={"700"}
                  color={"hsl(233deg 27% 24%)"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  {" "}
                  {details.tournament_name.toUpperCase()}
                </Flex>
                <Flex flexDirection={"row"} justifyContent={"space-between"}>
                  <Flex
                    flexDirection={"column"}
                    justifyContent={"space-between"}
                    mr={"5vw"}
                  >
                    <Flex
                      color={"hsl(233deg 27% 24%)"}
                      fontWeight={"600"}
                      fontSize={{ base: "small", md: "medium", lg: "large" }}
                    >
                      {" "}
                      Start date:
                    </Flex>
                    <Flex
                      fontWeight={"600"}
                      color={"hsl(233deg 27% 24%)"}
                      opacity={"0.7"}
                      fontSize={{ base: "small", md: "medium", lg: "large" }}
                    >
                      {details.start_date}
                    </Flex>
                  </Flex>
                  <Flex
                    flexDirection={"column"}
                    justifyContent={"space-between"}
                    mr={"5vw"}
                  >
                    <Flex
                      fontWeight={"600"}
                      color={"hsl(233deg 27% 24%)"}
                      fontSize={{ base: "small", md: "medium", lg: "large" }}
                    >
                      {" "}
                      Sports :
                    </Flex>
                    <Flex
                      fontWeight={"600"}
                      opacity={"0.7"}
                      color={"hsl(233deg 27% 24%)"}
                      fontSize={{ base: "small", md: "medium", lg: "large" }}
                    >
                      {details.Sports}
                    </Flex>
                  </Flex>
                </Flex>
                <Flex
                  flexDirection={"row"}
                  justifyContent={"space-between"}
                  marginTop={"2vh"}
                >
                  <Flex
                    flexDirection={"column"}
                    justifyContent={"space-between"}
                    mr={"5vw"}
                  >
                    <Flex
                      fontWeight={"600"}
                      color={"hsl(233deg 27% 24%)"}
                      fontSize={{ base: "small", md: "medium", lg: "large" }}
                    >
                      {" "}
                      Venue:
                    </Flex>
                    <Flex
                      fontWeight={"600"}
                      color={"hsl(233deg 27% 24%)"}
                      opacity={"0.7"}
                      fontSize={{ base: "small", md: "medium", lg: "large" }}
                    >
                      {details.city}
                    </Flex>
                  </Flex>
                  <Flex
                    flexDirection={"column"}
                    justifyContent={"space-between"}
                    mr={"5vw"}
                  >
                    <Flex
                      fontWeight={"600"}
                      fontSize={{ base: "small", md: "medium", lg: "large" }}
                      color={"hsl(233deg 27% 24%)"}
                    >
                      {" "}
                      Pincode:
                    </Flex>
                    <Flex
                      fontWeight={"600"}
                      opacity={"0.7"}
                      fontSize={{ base: "small", md: "medium", lg: "large" }}
                      color={"hsl(233deg 27% 24%)"}
                    >
                      {details.pincode}
                    </Flex>
                  </Flex>
                </Flex>
                <Flex
                  flexDirection={"row"}
                  justifyContent={"space-between"}
                  marginTop={"2vh"}
                >
                  <Flex
                    flexDirection={"column"}
                    justifyContent={"space-between"}
                    mr={"5vw"}
                  >
                    <Flex
                      fontWeight={"600"}
                      fontSize={{ base: "small", md: "medium", lg: "large" }}
                      color={"hsl(233deg 27% 24%)"}
                    >
                      {" "}
                      Contact:
                    </Flex>
                    <Flex
                      fontWeight={"600"}
                      opacity={"0.7"}
                      fontSize={{ base: "small", md: "medium", lg: "large" }}
                      color={"hsl(233deg 27% 24%)"}
                    >
                      {details.contact}
                    </Flex>
                  </Flex>

                  <Flex
                    flexDirection={"column"}
                    justifyContent={"space-between"}
                    mr={"5vw"}
                  >
                    <Flex
                      fontWeight={"600"}
                      fontSize={{ base: "small", md: "medium", lg: "large" }}
                      color={"hsl(233deg 27% 24%)"}
                    >
                      {" "}
                      Entry Fees
                    </Flex>
                    <Flex
                      fontWeight={"600"}
                      opacity={"0.7"}
                      fontSize={{ base: "small", md: "medium", lg: "large" }}
                      color={"hsl(233deg 27% 24%)"}
                    >
                      {details.entry_fees}
                    </Flex>
                  </Flex>
                </Flex>

                <Flex
                  flexDirection={"column"}
                  justifyContent={"center"}
                  marginTop={"2vh"}
                >
                  <Flex
                    fontWeight={"600"}
                    fontSize={{ base: "small", md: "medium", lg: "large" }}
                    color={"hsl(233deg 27% 24%)"}
                  >
                    Important informatio:
                  </Flex>
                  <Flex
                    fontWeight={"600"}
                    opacity={"0.7"}
                    fontSize={"large"}
                  ></Flex>

                  {details.rules.map((res) => {
                    return (
                      <Flex
                        fontSize={{ base: "small", md: "medium", lg: "large" }}
                        color={"hsl(233deg 27% 24%)"}
                      >
                        {res}
                      </Flex>
                    );
                  })}
                  <Flex
                    justifyContent={"space-around"}
                    flexDirection={"row"}
                    marginTop={"5vh"}
                    marginBottom={"2vh"}
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
                        backgroundColor: "hsl(233deg 27% 24%)",
                        color: "white",
                      }}
                      onClick={() => playerRegister()}
                    >
                      {" "}
                      <Flex alignItems="center">Register</Flex>
                    </Button>
                    <Link to={"/"}>
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
                          backgroundColor: "hsl(233deg 27% 24%)",
                          color: "white",
                        }}
                      >
                        <Flex alignItems="center">Back</Flex>
                      </Button>
                    </Link>
                  </Flex>
                </Flex>
              </Card>
            </Flex>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Detail;
