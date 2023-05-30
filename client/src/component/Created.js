import { useEffect, useState } from "react";
import Tournament from "./Tournament";
import { Link } from "react-router-dom";
import {
  Button,
  Flex,
  Card,
  CardBody,
  SimpleGrid,
  Text,
  Box,
} from "@chakra-ui/react";
const Created = () => {
  const [data, setData] = useState();
  // const [pData, setPData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${process.env.REACT_APP_API}/home`);
      const tData = await res.json();
      // const finalData=tData.post
      setData(tData.post);
      // if (tData.post.participents) {setPData(tData.post.participents)
      //   console.log(tData.post.participents);
      // }
    };
    getData();
  }, []);
  return (
    <Box width="100vw" minHeight={"100vh"} margin>
      <Tournament />
      <Link to="/sechdule">
        <Flex
          justifyContent={"flex-end"}
          alignItems={"baseline"}
          mt="5vh"
          mr="5vw"
        >
          <Button
            borderRadius={0}
            color={"white"}
            bg={"#7C6A96"}
            boxShadow={"2px black"}
            _hover={{}}
            marginBottom={"20px"}
          >
            Sechdule matches
          </Button>
        </Flex>
      </Link>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 2 }}
        spacing={10}
        width={{ base: "100%", md: "70%", lg: "60%" }}
      >
        {" "}
        {data &&
          data.map((elem, ind) => {
            return (
              <Card key={ind}>
                {/* <Flex>{data.tournament_name}</Flex> */}
                {elem.participents.length == 0 ? (
                  <Flex
                    as={"h1"}
                    fontSize={"20px"}
                    color={"hsl(233deg 27% 24%);"}
                    flexDirection={"column"}
                  >
                    <Text>{elem.tournament_name.toUpperCase()}</Text>
                    Sorry no team participated in this tournaments.
                  </Flex>
                ) : (
                  elem.participents.map((e, i) => {
                    console.log(e);
                    return (
                      <CardBody>
                        <Flex flexDirection={"column"} key={i}>
                          <Text>{elem.tournament_name.toUpperCase()}</Text>
                          <p>Team: {e.team_name}</p>
                          <p>Captain: {e.captain}</p>
                          <p>Contact: {e.contact}</p>
                        </Flex>
                      </CardBody>
                    );
                  })
                )}
              </Card>
            );
          })}
      </SimpleGrid>
    </Box>
  );
};

export default Created;
