import React, { useEffect, useState } from 'react';
// import data from '../Data';
import { Box, Button, Flex } from '@chakra-ui/react';
import { Link, useLocation,useParams } from 'react-router-dom';
function Detail() {
  const [details, setDetails] = useState({});
  const location = useLocation()
  const {id} = useParams()

  const fetchDetails = async() => {
    const response = await fetch(`${process.env.REACT_APP_API}/home/${id}`)
    const result = await response.json()
    setDetails(result.post)
    console.log(details);
  }
  
  useEffect(() => {
    fetchDetails()
  }, [] );

  return (
     
    <Box textAlign={'center'}>
         
            <Flex fontSize={'xxx-large'} color={'red'} bg={'yellow'} justifyContent={'center'} alignItems={'center'}>{details.tournament_name.toUpperCase()}</Flex>
            <Flex>{details.start_date}</Flex>
            <Flex>{details.city}</Flex>
            <Flex>{details.state}</Flex>
            <Flex>{details.pincode}</Flex>
        

      <Link to='/PlayerRegister'>
        <Button>Register</Button>
      </Link>

      <Button>Back</Button>
    </Box>
     
  );
}

export default Detail;
