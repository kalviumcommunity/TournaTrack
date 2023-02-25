import { Box, FormControl, FormLabel, Input, Button, Heading, Container } from '@chakra-ui/react';
import React from 'react';
import "../component/css/Register.css";


const Register = () => {
  const formData = [
    {
      title: "Tournament Name",
      type: "text",
      isRequired: "true"

    },
    {
      title: "Organiser Name",
      type: "text",
      isRequired: "true"
    },
    {
      title: "Entry fees in Rs.",
      type: "number",
      isRequired: "true"
    },
    {
      title: "Email",
      type: "email",
      isRequired: "false"
    },
    {
      title: "Contact No.",
      type: "number",
      isRequired: "true"
    },
    {
      title: "Start date",
      type: "date",
      isRequired: "true"
    },
    {
      title: "State",
      type: "text",
      isRequired: "true"
    },
    {
      title: "City",
      type: "text",
      isRequired: "true"
    },
    {
      title: "Pincode",
      type: "number",
      isRequired: "true"
    },
    {
      title: "UPI QR code",
      type: "image",
      isRequired: "false"
    },
    {
      title: "UPI number",
      type: "number",
      isRequired: "false"
    }
  ]

  return (
    <Container width={'100%'} justifyContent={'center'} align={'center'} bg="green.400" margin={'0'} maxWidth="100%"
     >
      <Box maxW="40vw" flexDirection="column" justifyContent="center"  >
        <Heading>Create your Tournament</Heading>
        {formData.map((data, index) => {
          return (
            <Box width={'full'} justifyContent={'center'} alignItems={'center'}  >

              <FormControl maxW="100vw" display="flex" flexDirection="column" alignItems={'center'} key={index} >
                <FormLabel maxW="100vh" justifyContent={'left'}>{data.title}</FormLabel>
                <Input maxW="40vh" type={data.type} isRequired={data.isRequired} />
              </FormControl>
            </Box>

          )
        })}
        <Button>Submit</Button>
      </Box>
    </Container>

  );
}

export default Register;
