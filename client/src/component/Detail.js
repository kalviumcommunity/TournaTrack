import React, { useEffect, useState } from 'react';
// import data from '../Data';
import { Box, Button, Flex } from '@chakra-ui/react';
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
      <>
      < Flex fontSize = { 'xxx-large'} color = { 'red'} bg = { 'yellow'} justifyContent = { 'center'} alignItems = { 'center'} > {details.tournament_name.toUpperCase() }</Flex >
      <Flex> Start date:{details.start_date}</Flex>
      <Flex>Venu: {details.city}</Flex>
      <Flex>State: {details.state}</Flex>
      <Flex>Pincode: {details.pincode}</Flex>
      <Flex>Organiser contact: {details.contact}</Flex>
      <Flex>These are the following rules and more information about tournament: {details.rules}</Flex>
      
      
      <Link to={`/playerregister/${id}`}>
      <Button>Register</Button>
      </Link>
      
      <Button>Back</Button>
      </>
    }
      </Box >
     
  );
}

export default Detail;
