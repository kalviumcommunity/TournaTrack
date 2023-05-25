import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Container,
  Select,
  Flex,
  List,
  ListItem,
  Grid,
  GridItem,
  SimpleGrid,
  Card,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../component/css/Register.css";
import Test from "./Test";

const Register = () => {
  const [image, setImage] = useState("");
  const archery_img =
    "http://res.cloudinary.com/dfl44vyoj/image/upload/v1680591798/bkhzlgfxkmpxtckjvhv7.jpg";
  const athletics_img =
    "http://res.cloudinary.com/dfl44vyoj/image/upload/v1680591954/wyqrns7ihqaxaympm562.jpg";
  const badminton_img =
    "http://res.cloudinary.com/dfl44vyoj/image/upload/v1680592070/kwlduvi8x4jyrysetrbe.jpg";
  const basketball_img =
    "http://res.cloudinary.com/dfl44vyoj/image/upload/v1680592070/kwlduvi8x4jyrysetrbe.jpg";
  const cricket_img =
    "https://res.cloudinary.com/dfl44vyoj/image/upload/v1680592142/sppefkwgoqcdngrksykp.jpg";
  const football_img =
    "http://res.cloudinary.com/dfl44vyoj/image/upload/v1680592233/spkdhicgy3gxmc9craxt.jpg ";
  const handball_img =
    "http://res.cloudinary.com/dfl44vyoj/image/upload/v1680592281/sfwcsxnsla0zakh7oozc.jpg";
  const hockey_img =
    "http://res.cloudinary.com/dfl44vyoj/image/upload/v1680592332/ih14jb0bpdebr7qxkkjn.jpg";
  const kabaddi_img =
    "http://res.cloudinary.com/dfl44vyoj/image/upload/v1680592368/vew6ej8lr38ly32vl0s1.jpg ";
  const kho_img =
    "http://res.cloudinary.com/dfl44vyoj/image/upload/v1680592423/fqeboogtptl5jgxs5gfo.jpg";
  const vollyball_img =
    "http://res.cloudinary.com/dfl44vyoj/image/upload/v1680592459/xtirjp2rddelcvos4ecj.jpg";

  const formData = [
    {
      title: "Tournament Name",
      type: "text",
      isRequired: "true",
      name: "tournament_name",
    },
    {
      title: "Organiser Name",
      type: "text",
      isRequired: "true",
      name: "organiser_name",
    },
    {
      title: "Sports",
      type: "dropdown",
      isRequired: "true",
      name: "Sports",
    },
    {
      title: "Entry fees in Rs.",
      type: "number",
      isRequired: "true",
      name: "entry_fees",
    },
    {
      title: "Email",
      type: "email",
      isRequired: "false",
      name: "email",
    },
    {
      title: "Contact No.",
      type: "number",
      isRequired: "true",
      name: "contact",
    },
    {
      title: "Start date",
      type: "date",
      isRequired: "true",
      name: "start_date",
    },
    {
      title: "State",
      type: "text",
      isRequired: "true",
      name: "state",
    },
    {
      title: "City",
      type: "text",
      isRequired: "true",
      name: "city",
    },
    {
      title: "Pincode",
      type: "number",
      isRequired: "true",
      name: "pincode",
    },
    {
      title: "UPI QR code",
      type: "image",
      isRequired: "false",
      name: "upiQr",
    },
    {
      title: "UPI number",
      type: "number",
      isRequired: "false",
      name: "upinumber",
    },
  ];
  const [rules, setRules] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRule = event.target.rule.value;
    if (newRule.trim() !== "") {
      setRules([...rules, newRule]);
      event.target.reset();
    }
  };

  const newSports = [
    "Archery",
    "Athletics",
    "Badminton",
    "Basketball",
    "Cricket",
    "Football",
    "Handball",
    "Hockey",
    "Kabaddi",
    "Kho-kho",
    "Vollyball",
  ];
  const sports_image = [
    archery_img,
    athletics_img,
    badminton_img,
    basketball_img,
    cricket_img,
    football_img,
    handball_img,
    hockey_img,
    kabaddi_img,
    kho_img,
    vollyball_img,
  ];
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    tournament_name: "",
    organiser_name: "",
    Sports: "",
    entry_fees: "",
    email: "",
    contact: "",
    start_date: "",
    state: "",
    city: "",
    pincode: "",
    upiQr: "",
    upinumber: "",
    rules: "",
  });
  let name, value;
  const handelInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    console.log(name);
    setDetails({ ...details, [name]: value });
  };
  const PostData = async (e) => {
    e.preventDefault();

    console.log(details);
    const {
      tournament_name,
      organiser_name,
      Sports,
      entry_fees,
      email,
      contact,
      start_date,
      state,
      city,
      pincode,
      upiQr,
      upinumber,
      rule,
    } = details;
    console.log("newSports: ", newSports);
    const index = newSports.findIndex(checkindex);
    function checkindex(Sport) {
      if (Sport === Sports) {
        console.log(Sports);
        return Sport;
      }
    }
    console.log(index);
    const imageLink = sports_image[index];
    // console.log(image)

    const res = await fetch(`${process.env.REACT_APP_API}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tournament_name,
        organiser_name,
        Sports,
        entry_fees,
        email,
        contact,
        start_date,
        state,
        city,
        pincode,
        upiQr,
        upinumber,
        rules,
        imageLink,
      }),
    });

    const tdata = await res.json();
    // console.log(data);
    // if(data.error){
    //     toast.error(data.error)

    // }
    // else{
    if (tdata.status === 422 || !tdata) {
      window.alert("Try again");
      console.log("invalid Registration");
    } else {
      window.alert("Tournament created sucessfully");
      console.log("Tournament created sucessfully");
      navigate("/");
    }
    // }
  };

  return (
    <Container
      color={"rgb(51, 53, 69)"}
      width={"100%"}
      // justifyContent={"center"}
      // align={"center"}
      margin={"0"}
      maxWidth="100%"
    >
      <Box
        maxW="100%"
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        marginTop={"2%"}
        flexWrap={"wrap"}
      >
        <Heading marginBottom="2vh" textAlign={"center"}>
          Create your Tournament
        </Heading>
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 2 }}
          spacing={10}
          width={{ base: "100%", md: "70%", lg: "60%" }}
          marginTop={"5vh"}
        >
          {formData.map((data, index) => {
            return (
              <Box
                maxW={{ base: "100%", md: "70%", lg: "60%" }}
                display={"flex"}
                flexDirection={"column"}
                alignItems={{
                  base: "center",
                  md: "flex-start",
                  lg: "flex-start",
                }}
                justifyContent="space-between"
                marginTop={"2%"}
                flexWrap={"wrap"}
                textAlign={"left"}
              >
                <Box
                  maxW="100vw"
                  fontWeight={"bold"}
                  textAlign={"left"}
                  display={"flex"}
                  alignContent={"flex-start"}
                  justifyItems={"self-start"}
                  opacity={"0.8"}
                >
                  {data.title}
                </Box>

                {data.type === "dropdown" ? (
                  <Select
                    onChange={handelInputs}
                    placeholder="select sports"
                    color={"black"}
                    maxW="30vw"
                    name={data.name}
                  >
                    <option value="Archery">Archery</option>
                    <option value="Athletics">Athletics</option>
                    <option value="Badminton">Badminton</option>
                    <option value="Basketball">Basketball</option>
                    <option value="Cricket">Cricket</option>
                    <option value="Football">Football</option>
                    <option value="Handball">Handball</option>
                    <option value="Hockey">Hockey</option>
                    <option value="Kabaddi">Kabaddi</option>
                    <option value="Kho-kho">Kho-kho</option>
                    <option value="vollyball">Vollyball</option>
                  </Select>
                ) : (
                  <Input
                    width={{ base: "70vw", md: "30vw", lg: "25vw" }}
                    display={"flex"}
                    flexDirection={"flex-end"}
                    onChange={handelInputs}
                    type={data.type}
                    isRequired={data.isRequired}
                    name={data.name}
                    fontSize={{ base: "small", md: "medium", lg: "larger" }}
                    // border={"0.02px solid black"}
                    borderRadius={"0px"}
                  />
                )}
              </Box>
            );
          })}
        </SimpleGrid>
        <Box>
          <Box
            m={4}
            marginLeft={"0px"}
            width={"55vw"}
            marginTop={"5vh"}
            display={"flex"}
            alignContent={"flex-start"}
            justifyItems={"self-start"}
            flexDirection={"row"}
          >
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel
                  maxW="100vw"
                  fontWeight={"bold"}
                  textAlign={"left"}
                  display={"flex"}
                  alignContent={"flex-start"}
                  justifyItems={"self-start"}
                  opacity={"0.8"}
                >
                  Enter a rules and other details
                </FormLabel>
                <Input
                  type="text"
                  name="rule"
                  placeholder="Type your rule here"
                  width={{ base: "70vw", md: "30vw", lg: "25vw" }}
                  display={"flex"}
                  flexDirection={"flex-end"}
                />
              </FormControl>
              <Button
                type="submit"
                mt={2}
                border="0"
                background={"hsl(233deg 27% 24%)"}
                color="#fff"
                width={{ base: "40vw", md: "30", lg: "20vw" }}
                padding={{ base: "0.5em 1em", md: "0.68em" }}
                borderRadius="5px"
                fontWeight="bold"
                fontSize={{ base: "14px", md: "16px" }}
                _hover={{ opacity: 0.8 }}
                marginTop={"5vh"}
              >
                Add rule
              </Button>
            </form>
            <List ml={4}>
              {rules.map((rule, index) => (
                <Card>
                  <ListItem key={index}>{rule}</ListItem>
                </Card>
              ))}
            </List>
          </Box>
        </Box>
        <Button
          border="0"
          background={"hsl(233deg 27% 24%)"}
          color="#fff"
          width={{ base: "40vw", md: "30", lg: "30vw" }}
          padding={{ base: "0.5em 1em", md: "0.68em" }}
          borderRadius="5px"
          fontWeight="bold"
          fontSize={{ base: "14px", md: "16px" }}
          _hover={{ opacity: 0.8 }}
          marginTop={"5vh"}
          onClick={PostData}
        >
          Create
        </Button>
      </Box>
    </Container>
  );
};

export default Register;
