import React,{useEffect,useState} from 'react';
import { Link} from 'react-router-dom';
import Navbar from './Navbar';
import stadium from '../assest/stadium.jpg'
import image from '../assest/img.png.jpg'
// import data from '../Data';
import { Flex, Box, Button, Image, SimpleGrid } from '@chakra-ui/react';

export default function Home({value,sport}) {
// const [testData,setTestData] = useState("")
  const data = [
    {
      tournamentName: "IPL 15",
      name: "shubham",
      sports: "cricket",
      entryFees: "15000",
      contact: "6204559383",
      email: "shu875758kumar@gmail.com",
      state: "Bihar",
      city: "Ara",
      pincode: "802222",
      Qr: image,
      upiNumber: "6204559383",
      rules: "no rules for now",
    },
    {
      tournamentName: "IPL 15",
      name: "shubham",
      sports: "football",
      entryFees: "15000",
      contact: "6204559383",
      email: "shu875758kumar@gmail.com",
      state: "Bihar",
      city: "Patna",
      pincode: "802222",
      Qr: image,
      upiNumber: "6204559383",
      rules: "no rules for now",
    },
    {
      tournamentName: "IPL 15",
      name: "shubham",
      sports: "vollyball",
      entryFees: "15000",
      contact: "6204559383",
      email: "shu875758kumar@gmail.com",
      state: "Bihar",
      city: "Jalandhar",
      pincode: "802222",
      Qr: image,
      upiNumber: "6204559383",
      rules: "no rules for now",
    },
    {
      tournamentName: "IPL 18",
      name: "shubham",
      sports: "kabaddi",
      entryFees: "15000",
      contact: "6204559383",
      email: "shu875758kumar@gmail.com",
      state: "Gujrat",
      city: "Mumbai",
      pincode: "802222",
      Qr: image,
      upiNumber: "6204559383",
      rules: "no rules for now",
    },
    {
      tournamentName: "IPL 10",
      name: "shubham",
      sports: "cricket",
      entryFees: "15000",
      contact: "6204559383",
      email: "shu875758kumar@gmail.com",
      state: "M.P",
      city: "Indore",
      pincode: "802222",
      Qr: image,
      upiNumber: "6204559383",
      rules: "no rules for now",
    },
    {
      tournamentName: "IPL 11",
      name: "shubham",
      sports: "cricket",
      entryFees: "15000",
      contact: "6204559383",
      email: "shu875758kumar@gmail.com",
      state: "U.P",
      city: "Varanasi",
      pincode: "802222",
      Qr: image,
      upiNumber: "6204559383",
      rules: "no rules for now",
    },
    {
      tournamentName: "IPL 13",
      name: "shubham",
      sports: "cricket",
      entryFees: "15000",
      contact: "6204559383",
      email: "shu875758kumar@gmail.com",
      state: "Punjab",
      city: "Phagwara",
      pincode: "802222",
      Qr: image,
      upiNumber: "6204559383",
      rules: "no rules for now",
    },
    {
      tournamentName: "IPL 14",
      name: "shubham",
      sports: "cricket",
      entryFees: "15000",
      contact: "6204559383",
      email: "shu875758kumar@gmail.com",
      state: "Haryana",
      city: "Rohtak",
      pincode: "802222",
      Qr: image,
      upiNumber: "6204559383",
      rules: "no rules for now",
    },
  ]
  const [myData, setMyData] = useState([])
     
    useEffect(() => {
      if(value !== "") {
        setMyData(data.filter((e)=>{
        const search = value;
        const searchcity = e.city.toLowerCase()
        const type = e.sports.toLowerCase()
          console.log("array type",type);
          console.log("prop type",sport)
        // value === e.city.toLowerCase()
        return(
          (sport)?searchcity.includes(search) && searchcity.startsWith(search) && type===sport :
          searchcity.includes(search) || searchcity.startsWith(search)
        )

      } ))
      } else {
      //   setMyData(data)
      setMyData(data.filter((e)=>{
        const search = value;
        const searchcity = e.city.toLowerCase()
        const type = e.sports.toLowerCase()
          console.log("array type",type);
          console.log("prop type",sport)
        // value === e.city.toLowerCase()
        return(
          (sport)?searchcity.includes(search) && searchcity.startsWith(search) && type===sport :
          searchcity.includes(search) || searchcity.startsWith(search)
        )

      } ))
      }
    }, [value,sport]);
    

  return (
    <div>
        
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} bg={'hsl(233deg 27% 24%);'} >
        <Box textColor={'whiteAlpha.800'} fontSize={'30px'} fontWeight={'extrabold'} textAlign={'left'} paddingLeft={'10px'} paddingTop={'20px'}>
        Place where talents meets opportunity
        </Box>
        <Link to ='/register'>
        <Flex justifyContent={'flex-end'} mt='5vh' mr='5vw'>
          <Button
            borderRadius={0} color={'white'} bg={'#7C6A96'} boxShadow={'2px black'} _hover={{}} marginBottom={'20px'}>Create Tournament</Button>
        </Flex>
        </Link>
        </Box>
        <Box position={'absolute'} zIndex={'-1'} width={'100%'}>
          <Image src={stadium} width={'100%'} filter={'opacity(0.9)'} />
        </Box>
        
        <Box textColor={'whiteAlpha.900'} fontSize={'20'} fontWeight={'bold'} fontStyle={'normal'} textAlign={'left'} paddingLeft={'20px'} >
          Upcoming Tournament
        </Box>
   
      <SimpleGrid padding={'15px'} spacing={10} minChildWidth={'250px'}  >
        {myData.map((data, index) => {
          // console.log(data.Qr)
          return (

            <Box key={index} height={'200px'}  margin='1%' boxShadow={'outline'} rounded='md' bg={'whiteAlpha.900'} >
              <Link to='/Detail'>
                <Box key={index}  >
                  <Box textColor={'purple.700'} fontSize={'25'} fontWeight={'bold'} fontStyle={'oblique'} bg="blue.50">
                    {data.tournamentName}
                  </Box>
                  <Flex justifyContent={'center'} alignItems={'center'}>
                    <Box h='100px' w={'200px'} textAlign='center'>
                      <Image h='100px' w={'200px'} boxShadow={'outline'} rounded={'5px'} src={data.Qr} />
                    </Box>
                  </Flex>
                  <Flex justifyContent={'space-evenly'}>
                    <Box textColor={'purple.700'} fontSize={'25'} fontWeight={'bold'} fontStyle={'oblique'}>
                      {data.sports}
                    </Box>
                    <Box textColor={'purple.700'} fontSize={'25'} fontWeight={'bold'} fontStyle={'oblique'}>

                      {data.city}
                    </Box>
                  </Flex>
                </Box>

              </Link>

            </Box>

          )

        })}
      </SimpleGrid>

    </div>
  );
}
