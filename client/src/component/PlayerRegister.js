import { Container,FormControl,FormLabel,Input,Box,Heading,Stack,RadioGroup,Radio,Button, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import React from 'react';

function PlayerRegister() {
  const Data = [
    {
      title: "Team name",
      type: "text"
    },
    {
      title: "Captain",
      type: "text"
    },
    {
      title: "Contact NO.",
      type: "number"
    },
   
  ]
  const [value, setValue] = React.useState('1')
  return (
    <Container maxH={'100vh'} height={'100vh'} justifyContent={'center'} align={'center'} bg="green.400" margin={'0'} maxWidth="100%">
       <Heading>Register your Team</Heading>
       {Data.map((data, index) => {
          return (
            <Box width={'full'} justifyContent={'center'} alignItems={'center'}  >

              <FormControl maxW="100vw" display="flex" flexDirection="column" alignItems={'center'} key={index} >
                <FormLabel maxW="100vh" justifyContent={'left'}>{data.title}</FormLabel>
                <Input maxW="40vh" type={data.type} isRequired={data.isRequired} />
              </FormControl>
            </Box>

          )
        })}
      
  
    <RadioGroup onChange={setValue} value={value}>
      <Stack direction='row'justifyContent={'center'} alignItems={'center'} >
        <Radio value='1'>Online payemnt</Radio>
        <Radio value='2'>Cash</Radio>
      </Stack>
    </RadioGroup>
    <div>
            <h2>Players name</h2>
        <textarea name="paragraph_text" cols="50" rows="10"></textarea>
         </div>
         
         <Button mr={'5vw'}>Proceed</Button>
         <Button>Back</Button>
         
    </Container>
    
  );
}

export default PlayerRegister;
