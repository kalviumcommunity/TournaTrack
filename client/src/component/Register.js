import { Box, FormControl, FormLabel, Input, Button, Heading, Container } from '@chakra-ui/react';
import React from 'react';
import "../component/css/Register.css";


const Register = () => {
  const formData = [
    {
      title: "Tournament Name",
      type: "text",
      isRequired: "true",
      name:"Tournamennt name"
    },
    {
      title: "Organiser Name",
      type: "text",
      isRequired: "true",
      name:"Organiser name"
    },
    {
      title: "Entry fees in Rs.",
      type: "number",
      isRequired: "true",
      name:"Entry fees"
    },
    {
      title: "Email",
      type: "email",
      isRequired: "false",
      name:"email"
    },
    {
      title: "Contact No.",
      type: "number",
      isRequired: "true",
      name:"Contact no."
    },
    {
      title: "Start date",
      type: "date",
      isRequired: "true",
      name:"Start date"
    },
    {
      title: "State",
      type: "text",
      isRequired: "true",
      name:"State"
    },
    {
      title: "City",
      type: "text",
      isRequired: "true",
      name:"City"
    },
    {
      title: "Pincode",
      type: "number",
      isRequired: "true",
      name:"Pincode"
    },
    {
      title: "UPI QR code",
      type: "image",
      isRequired: "false",
      name:"Upi or code"
    },
    {
      title: "UPI number",
      type: "number",
      isRequired: "false",
      name:"Upi number"
    }
  ]
  
   
  return (
    <Container width={'100%'} justifyContent={'center'} align={'center'} bg="green.200" margin={'0'} maxWidth="100%"
     >
      <Box maxW="40vw" flexDirection="column" justifyContent="center"  >
        <Heading>Create your Tournament</Heading>
        {formData.map((data, index) => {
          return (
            <Box width={'full'} justifyContent={'center'} alignItems={'center'}  >

              <FormControl maxW="100vw" display="flex" flexDirection="column" alignItems={'center'} key={index} >
                <FormLabel maxW="100vh" justifyContent={'left'}>{data.title}</FormLabel>
                <Input maxW="40vh" type={data.type} isRequired={data.isRequired} name={data.name} />
              </FormControl>
            </Box>

          )
        })}
        <Button>Create</Button>
      </Box>
    </Container>

  );
}

export default Register;
