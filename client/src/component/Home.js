import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import image from '../assest/img.png.jpg'
// import data from '../Data';
import { Flex,Box, Container,Button,Image  } from '@chakra-ui/react';

export default function Home() {
  
  const data = [
    {   tournamentName: "IPL 15",
        name: "shubham",
        sports: "cricket",
        entryFees: "15000",
        contact: "6204559383",
        email: "shu875758kumar@gmail.com",
        state: "Bihar", 
        city: "Ara",
        pincode: "802222",
        Qr:image,
        upiNumber: "6204559383",
        rules: "no rules for now",
    },
    {   tournamentName: "IPL 15",
        name: "shubham",
        sports: "cricket",
        entryFees: "15000",
        contact: "6204559383",
        email: "shu875758kumar@gmail.com",
        state: "Bihar", 
        city: "Ara",
        pincode: "802222",
        Qr:image,
        upiNumber: "6204559383",
        rules: "no rules for now",
    },
    {   tournamentName: "IPL 15",
        name: "shubham",
        sports: "cricket",
        entryFees: "15000",
        contact: "6204559383",
        email: "shu875758kumar@gmail.com",
        state: "Bihar", 
        city: "Ara",
        pincode: "802222",
        Qr:image,
        upiNumber: "6204559383",
        rules: "no rules for now",
    },
    {   tournamentName: "IPL 18",
        name: "shubham",
        sports: "cricket",
        entryFees: "15000",
        contact: "6204559383",
        email: "shu875758kumar@gmail.com",
        state: "Gujrat", 
        city: "Ara",
        pincode: "802222",
        Qr:image,
        upiNumber: "6204559383",
        rules: "no rules for now",
    },
    {   tournamentName: "IPL 10",
        name: "shubham",
        sports: "cricket",
        entryFees: "15000",
        contact: "6204559383",
        email: "shu875758kumar@gmail.com",
        state: "M.P", 
        city: "Ara",
        pincode: "802222",
        Qr:image,
        upiNumber: "6204559383",
        rules: "no rules for now",
    },
    {   tournamentName: "IPL 11",
        name: "shubham",
        sports: "cricket",
        entryFees: "15000",
        contact: "6204559383",
        email: "shu875758kumar@gmail.com",
        state: "U.P", 
        city: "Ara",
        pincode: "802222",
        Qr:image,
        upiNumber: "6204559383",
        rules: "no rules for now",
    },
    {   tournamentName: "IPL 13",
        name: "shubham",
        sports: "cricket",
        entryFees: "15000",
        contact: "6204559383",
        email: "shu875758kumar@gmail.com",
        state: "Punjab", 
        city: "Ara",
        pincode: "802222",
        Qr:image,
        upiNumber: "6204559383",
        rules: "no rules for now",
    },
    {   tournamentName: "IPL 14",
        name: "shubham",
        sports: "cricket",
        entryFees: "15000",
        contact: "6204559383",
        email: "shu875758kumar@gmail.com",
        state: "Haryana", 
        city: "Ara",
        pincode: "802222",
        Qr:image,
        upiNumber: "6204559383",
        rules: "no rules for now",
    },
  ]
  
  const navigate= useNavigate()
  return (
    <div>
     
      <Link to='/Register'>
      <Flex justifyContent={'flex-end'} mt='5vh' mr='5vw'>
        <Button 
        borderRadius={0} color={'white'} bg={'#7C6A96'} boxShadow={'2px black'} _hover={{}} >Create Tournament</Button>
      </Flex>
              </Link>
             <Container display={'flex'} >
              {data.map((data, index) => {
                console.log(data.Qr)
          return (

            <Box  display={'flex'}  width={'10vw'} height={'10vh'} bg={'whiteAlpha.100'} margin='1%'>
           <Link to ='/Detail'>
              <Flex key={index}  >
                {data.tournamentName}
                <Image display={'flex'} justifyContent={'space-evenly'} src = {data.Qr} />
                {data.sports}
                {data.state}
                </Flex>
             
                </Link>
             
            </Box>

          )
          
        })}
            </Container> 

    </div>
  );
}
