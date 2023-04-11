import React, { useEffect, useState } from 'react';
// import data from '../Data';
import { Box, Button, Card, Center, Flex, UnorderedList,ListItem } from '@chakra-ui/react';
import { Link, useLocation, useParams,useNavigate } from 'react-router-dom';
function Detail() {
  const [details, setDetails] = useState(null);
  const location = useLocation()
  const { id } = useParams()
  const navigate =useNavigate();
 const playerRegister = ()=>{
  const name = sessionStorage.getItem('name');
  if(name){
    navigate (`/playerregister/${id}`)
  }
  else{
    navigate('/signin')
  }
 }
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


    <Box textAlign={'center'}>
      {
        details === null ?
          <div>Loading</div>
          :
          <Box backgroundImage={{base:"",md:details.image,lg:details.image}} height={'100vh'} backgroundSize={'100vw 100vh'} backgroundRepeat={'no-repeat'}  >
            <Flex textAlign={'center'} justifyContent={'center'} pt={'5rem'}>
              <Card width={{base:'100vw',md:'50vw',lg:'50vw'}} height={{base:'100vh',md:'full',lg:'full'}} pl={'2rem'}  >
                < Flex fontSize={'xxx-large'} fontweight={'700'} color={'red'} justifyContent={'center'} alignItems={'center'} > {details.tournament_name.toUpperCase()}</Flex >
                <Flex flexDirection={'row'} justifyContent={'space-between'} mr={'5vw'}>
                  <Flex fontWeight={'600'} opacity={'0.7'} fontSize={{base:'small',md:'medium',lg:'large'}}> Start date:</Flex>
                  <Flex fontWeight={'600'} opacity={'1'} fontSize={{base:'small',md:'medium',lg:'large'}}>
                    {details.start_date}</Flex>
                </Flex>
                <Flex flexDirection={'row'} justifyContent={'space-between'}mr={'5vw'}>
                  <Flex fontWeight={'600'} opacity={'0.7'} fontSize={{base:'small',md:'medium',lg:'large'}}> Sports  :</Flex>
                  <Flex fontWeight={'600'} opacity={'1'} fontSize={{base:'small',md:'medium',lg:'large'}}>
                    {details.Sports}</Flex>
                </Flex>
                <Flex flexDirection={'row'} justifyContent={'space-between'}mr={'5vw'}>
                  <Flex fontWeight={'600'} opacity={'0.7'} fontSize={{base:'small',md:'medium',lg:'large'}}> Venue:</Flex>
                  <Flex fontWeight={'600'} opacity={'1'} fontSize={{base:'small',md:'medium',lg:'large'}}>
                    {details.city}</Flex>
                </Flex>
                <Flex flexDirection={'row'}justifyContent={'space-between'}mr={'5vw'}>
                  <Flex fontWeight={'600'} opacity={'0.7'} fontSize={{base:'small',md:'medium',lg:'large'}}> Pincode:</Flex>
                  <Flex fontWeight={'600'} opacity={'1'} fontSize={{base:'small',md:'medium',lg:'large'}}>
                    {details.pincode}</Flex>
                </Flex>
                <Flex flexDirection={'row'}justifyContent={'space-between'}mr={'5vw'}>
                  <Flex fontWeight={'600'} opacity={'0.7'} fontSize={{base:'small',md:'medium',lg:'large'}}> Contact:</Flex>
                  <Flex fontWeight={'600'} opacity={'1'} fontSize={{base:'small',md:'medium',lg:'large'}}>
                    {details.contact}</Flex>
                </Flex>
                <Flex flexDirection={'column'} justifyContent={'center'}>
                  <Flex fontWeight={'600'} opacity={'0.7'} fontSize={{base:'small',md:'medium',lg:'large'}}>Important informatio:</Flex>
                  <Flex fontWeight={'600'} opacity={'1'} fontSize={'large'}>
                   </Flex>
                  
                   {details.rules.map((res) => {

                      return (
                       
                        <Flex fontSize={{base:'small',md:'medium',lg:'large'}}>{res}</Flex>

                      )
                    })}
                
                </Flex>
                {/* <Flex  fontWeight={'600'} opacity={'0.7'}>Venu: {details.city}</Flex>
      <Flex  fontWeight={'600'} opacity={'0.7'}>State: {details.state}</Flex>
      <Flex  fontWeight={'600'} opacity={'0.7'}>Pincode: {details.pincode}</Flex>
      <Flex  fontWeight={'600'} opacity={'0.7'}>Organiser contact: {details.contact}</Flex>
      <Flex fontWeight={'600'} opacity={'0.7'}>These are the following rules and more information about tournament:</Flex> */}
      <Flex justifyContent={'center'} flexDirection={'row'} >
            
              <Button onClick={()=>playerRegister()}>Register</Button>
         

            <Button>Back</Button>
            </Flex>
              </Card>
            </Flex>
            
          </Box>
      }
    </Box >

  );
}

export default Detail;
