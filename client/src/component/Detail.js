import React, { useEffect, useState } from 'react';
// import data from '../Data';
import { Box, Button, Card, Center, Flex } from '@chakra-ui/react';
import { Link, useLocation, useParams } from 'react-router-dom';
function Detail() {
  const [details, setDetails] = useState(null);
  const location = useLocation()
  const { id } = useParams()

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch(`${process.env.REACT_APP_API}/home/${id}`)
      const result = await response.json()
      setDetails(result.post)
    }

    fetchDetails()
  }, []);
  console.log(details);

  return (

    
    <Box textAlign = { 'center' }>
    {
      details === null ?
      <div>Loading</div>
      : 
      <Box backgroundImage={details.image} height={'100vh'} backgroundSize={'100vw 100vh'} backgroundRepeat={'no-repeat'}  >
        <Flex textAlign={'center'} justifyContent={'center'} pt={'5rem'}>
        <Card width={'50vw'} height={'auto'}>
      < Flex  fontSize = { 'xxx-large'} fontweight={'700'} color = { 'red'}  justifyContent = { 'center'} alignItems = { 'center'} > {details.tournament_name.toUpperCase() }</Flex >
      <Flex pl ={"1rem"} > Start date:{details.start_date}</Flex>
      <Flex  pl ={"1rem"}>Venu: {details.city}</Flex>
      <Flex  pl ={"1rem"}>State: {details.state}</Flex>
      <Flex pl ={"1rem"}>Pincode: {details.pincode}</Flex>
      <Flex pl ={"1rem"}>Organiser contact: {details.contact}</Flex>
      <Flex pl ={"1rem"}>These are the following rules and more information about tournament:</Flex>
      {details.rules.map((res)=>{
        return(
          <Box>{res}</Box>
        ) 
      })}
      </Card>
      </Flex>
      <Link to={`/playerregister/${id}`}>
      <Button>Register</Button>
      </Link>
      
      <Button>Back</Button>
      </Box>
    }
      </Box >
     
  );
}

export default Detail;
