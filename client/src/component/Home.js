import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import stadium from "../assest/stadium.jpg";
import image from "../assest/img.png.jpg";
import { keyframes } from "@emotion/react";
import Footer from "./Footer";
import "../component/css/Home.css";
import { Typewriter } from "react-simple-typewriter";
// import data from '../Data';
import {
  Flex,
  Box,
  Button,
  Image,
  SimpleGrid,
  Card,
  CardBody,
  Text,
  Input,
  Select,
} from "@chakra-ui/react";

export default function Home() {
  // const [testData,setTestData] = useState("")
  const navigate = useNavigate();

  const [myData, setMyData] = useState([]);
  const [dataId, setDataId] = useState([]);
  const [input, setInput] = useState("");
  const [sportType, setSportType] = useState("");
  const [loading, setLoading] = useState(true);
  // const createTournament = () => {
  //   const name = sessionStorage.getItem("name");
  //   if (name) {
  //     navigate("/register");
  //   } else {
  //     navigate("/signin");
  //   }
  // };

  useEffect(() => {
    const tournamentData = async () => {
      const res = await fetch(`${process.env.REACT_APP_API}/home`);
      const tData = await res.json();
      const finalData = tData.post;
      setDataId(finalData);
      setLoading(false);
    };
    tournamentData();
  }, []);

  console.log(dataId);

  useEffect(() => {
    if (input !== "") {
      setMyData(
        dataId.filter((e) => {
          const search = input;
          const searchcity = e.city.toLowerCase();
          const type = e.Sports.toLowerCase();
          const name = e.tournament_name.toLowerCase();
          console.log("array type", type);
          console.log("prop type", sportType);

          // value === e.city.toLowerCase()
          return sportType
            ? searchcity.includes(search) &&
                searchcity.startsWith(search) &&
                type === sportType
            : searchcity.includes(search) ||
                searchcity.startsWith(search) ||
                name.includes(search) ||
                name.startsWith(search);
        })
      );
    } else {
      //   setMyData(data)
      setMyData(
        dataId.filter((e) => {
          const search = input;
          const searchcity = e.city.toLowerCase();
          const type = e.Sports.toLowerCase();
          // console.log("array type",type);
          // console.log("prop type",sport)
          // value === e.city.toLowerCase()
          return sportType
            ? searchcity.includes(search) &&
                searchcity.startsWith(search) &&
                type === sportType
            : searchcity.includes(search) || searchcity.startsWith(search);
        })
      );
    }
  }, [input, dataId, sportType]);
  // console.log(myData.length);
  const getData = (e) => {
    myData.find({ id: e.id });
    dataId.find({ id: e.id });
  };

  return (
    <>
      <Box height={"100vh"} marginBottom={"5vh"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          // bg={"hsl(233deg 27% 24%);"}
          bg={"#C9D6DF"}
          height={"8em"}
        >
          <Box
            id="typography"
            textColor={"hsl(233deg 27% 24%);"}
            fontWeight={"bold"}
            textAlign={"left"}
            paddingLeft={"1%"}
            paddingTop={"20px"}
          >
            {/*
        experience  the  thrill of victory.
        are you ready for the challenge.
        */}
            <Typewriter
              words={[
                " Place where talents meets opportunity.",
                " Discover the champion within.",
                " Experience  the  thrill of victory.",
                "Are you ready for the challenge?",
                " Find your edge.",
              ]}
              loop={25}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={90}
              delaySpeed={50}
            />
          </Box>
          <Flex
            display={{ base: "none", md: "flex", lg: "flex" }}
            id="search-button-pc"
            flexDirection={"row"}
            alignItems={"center"}
            bg={"white"}
            paddingLeft="1vw"
            width={"38%"}
            height={"38%"}
            marginRight={"1%"}
          >
            <Select
              sportType={sportType}
              setSportType={setSportType}
              onChange={(e) => {
                setSportType(e.target.value);
              }}
              ml={"0px"}
              placeholder="select sports"
              color={"black"}
              bg={"whiteAlpha.900"}
              border={"0px white"}
              _focusVisible={{}}
              width={"30%"}
            >
              <option value="archery">Archery</option>
              <option value="athletics">Athletics</option>
              <option value="badminton">Badminton</option>
              <option value="basketball">Basketball</option>
              <option value="cricket">Cricket</option>
              <option value="football">Football</option>
              <option value="handball">Handball</option>
              <option value="hockey">Hockey</option>
              <option value="kabaddi">Kabaddi</option>
              <option value="Kho-kho">Kho-kho</option>
              <option value="vollyball">Vollyball</option>
            </Select>
            <Text fontSize={"30px"} fontWeight={"regular"} opacity="0.8">
              |
            </Text>
            {/* <Search2Icon color={"black"} marginLeft={"5px"} /> */}
            <Input
              input={input}
              setInput={setInput}
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              ml={2}
              type={"text"}
              placeholder="Search your city name"
              bg={"white"}
              width="30vw"
              _focusVisible={{}}
              marginRight={"1em"}
              textAlign={"left"}
            />
          </Flex>

          {/* 
        <Flex justifyContent={"flex-end"} mt="5vh" mr="5vw">
          <Button
            css={{
              display: "inline-flex",
              marginBottom: "10px",
              alignItems: "center",
              color: "#fff",
              border: "1px solid #fff",
              minHeight: "50px",
              padding: "0 20px",
              fontSize: "20px",

              position: "relative",
              backgroundColor: "transparent",
              paddingBottom: "5px",
              "&::before": {
                backgroundColor: "#fff",
                width: "45px",
                height: "1px",
              },
              "&::after": {
                content: '""',
                backgroundColor: "#fff",
                display: "block",
                width: "0%",
                height: "100%",
                right: "0",
                top: "0",
                position: "absolute",
                zIndex: "-1",
                transition: "all 0.3s ease-out",
              },
              "&:hover": {
                color: "#232963",
                textDecoration: "none",
                transition: "all 0.3s ease-out",
              },
              "&:hover::after": {
                width: "100%",
                transition: "all 0.3s ease-out",
              },
              "&:hover::before": {
                backgroundColor: "#232963",
                transition: "all 0.3s ease-out",
              },
              // media query for small screens
              "@media screen and (max-width: 480px)": {
                fontSize: "16px",
                minHeight: "40px",
                padding: "0 10px",
              },
            }}
            onClick={() => createTournament()}
          >
            Create Tournament
          </Button>
        </Flex> */}
        </Box>
        {/* <Navbar /> */}
        <Box position={"absolute"} zIndex={"-1"} width={"100%"}>
          {/* <Image
          id="background-image"
          src={stadium}
          width={"100%"}
          filter={"opacity(0.9)"}
        /> */}
        </Box>
        {/* <Navbar
        input={input}
        setInput={setInput}
        sportType={sportType}
        setSportType={setSportType}
      /> */}
        <Box
          textColor={"blackAlpha.800"}
          fontSize={"25"}
          fontWeight={"bold"}
          fontStyle={"normal"}
          textAlign={"left"}
          paddingTop={3}
          margin={"1%"}
        >
          Upcoming Tournament
        </Box>

        <SimpleGrid padding={"15px"} spacing={10} minChildWidth={"250px"}>
          {loading ? (
            <div class="loader">
              <div class="loader-square"></div>
              <div class="loader-square"></div>
              <div class="loader-square"></div>
              <div class="loader-square"></div>
              <div class="loader-square"></div>
              <div class="loader-square"></div>
              <div class="loader-square"></div>
            </div>
          ) : (
            <>
              {" "}
              {myData.length == 0 ? (
                <Flex
                  as={"h1"}
                  fontSize={"50px"}
                  color={"hsl(233deg 27% 24%);"}
                >
                  Sorry no tournament found.
                </Flex>
              ) : (
                myData.map((data, index) => {
                  // console.log(data.Qr)
                  return (
                    <Card
                      id={data.id}
                      onClick={getData}
                      key={index}
                      height={"220px"}
                      margin="1%"
                      // rounded="md"
                      border="1px solid RGBA(102, 102, 102, 0.5)"
                      bg={"whiteAlpha.900"}
                      maxW={"350px"}
                      _hover={{
                        border: "1px solid black",
                        transform: "scale(1.05)",
                        boxShadow: "0px 0px 30px 1px rgba(0, 255, 117, 0.30)",
                        transition: "all .3s",
                      }}
                    >
                      <CardBody>
                        <Link to={`/detail/${data._id}`}>
                          <Box key={index} bg={"white"}>
                            <Box
                              textColor={"purple.700"}
                              fontSize={"25"}
                              fontWeight={"bold"}
                              fontStyle={"oblique"}
                              bg="blue.50"
                            >
                              <Image
                                h="110px"
                                w={"250px"}
                                rounded={"5px"}
                                src={data.image}
                              />
                            </Box>
                            <Flex
                              justifyContent={"flex-start"}
                              flexDirection={"column"}
                            >
                              {/* <Box
                              h="100px"
                              w={"200px"}
                              textAlign="center"
                              borderRadius=""
                              rounded={"5px"}
                              transition="all .2s"
                              _hover={{
                                transform: "scale(0.98)",
                                borderRadius: "20px",
                              }}
                            > */}
                              <Text
                                textAlign={"left"}
                                textColor={"blackAlpha.800"}
                                fontSize={"20"}
                                fontWeight={"bold"}
                                fontStyle={"normal"}
                                marginTop={"0.5em"}
                              >
                                {data.tournament_name}
                              </Text>
                              <Text
                                textAlign={"left"}
                                textColor={"blackAlpha.750"}
                                fontSize={"16"}
                                fontWeight={"medium"}
                                fontStyle={"normal"}
                                opacity={"0.7"}
                              >
                                {" "}
                                {data.city}
                              </Text>
                              {/* </Box> */}
                            </Flex>
                          </Box>
                        </Link>
                      </CardBody>
                      <Box />
                    </Card>
                  );
                })
              )}{" "}
            </>
          )}
          {}
        </SimpleGrid>
      </Box>
      {/* <Footer /> */}
    </>
  );
}
