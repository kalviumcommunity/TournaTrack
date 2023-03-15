import React, { useEffect, useState } from 'react';
import data from '../Data';
import { Box, Button, Flex } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
function Detail() {
  const [details, setDetails] = useState({});
  const location = useLocation()

  // useEffect(() => {
  //   const fetchDetails = () => {
  //     data.filter(single => single.id === location.state.id).map(data => setDetails(data))
  //   }

  //   fetchDetails()
  // }, [location.state.id]);

  return (

    <Box>
      {/* <Box color={'red.600'} fontSize={'2xl'} fontStyle={'inherit'} fontWeight={'bold'}>Details of the tournament</Box>
      {details.map((data, index) => {
        // console.log(data.Qr)
        return (

          <Box key={index} height={'200px'} margin='1%' boxShadow={'outline'} rounded='md' bg={'whiteAlpha.900'} >

            <Box key={index}  >

              {data.tournamentName}
              {data.sports}
              {data.city}
            </Box>

          </Box>





        )

      })} */}

      <Link to='/PlayerRegister'>
        <Button>Register</Button>
      </Link>

      <Button>Back</Button>
    </Box>

  );
}

export default Detail;
