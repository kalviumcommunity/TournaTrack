import React,{useEffect,useState} from 'react';
import { Link,useNavigate} from 'react-router-dom';
import Navbar from './Navbar';
import stadium from '../assest/stadium.jpg'
import image from '../assest/img.png.jpg'
import archery from  '../assest/archery.jpg'
import '../component/css/Home.css'
import { Typewriter } from 'react-simple-typewriter'
// import data from '../Data';
import { Flex, Box, Button, Image, SimpleGrid, Card, CardBody } from '@chakra-ui/react';

export default function Home({value,sport}) {
// const [testData,setTestData] = useState("")
const navigate = useNavigate()
  const data = [
    {
      id: 1,
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
  const [dataId, setDataId] = useState([])
  const createTournament = () =>{
    const name = sessionStorage.getItem('name')
    if(name){
      navigate ('/register')
    }
    else{
      navigate('/signin')
    }
  }

  useEffect(() => {
    const tournamentData = async() =>{
      const res = await fetch(`${process.env.REACT_APP_API}/home`)
      const tData = await res.json()
       const finalData=tData.post
      setDataId(finalData)
    }
    tournamentData()
  }, [])

  console.log(dataId);

  useEffect(() => {
    if(value !== "") {
      setMyData(dataId.filter((e)=>{
        const search = value;
        const searchcity = e.city.toLowerCase()
        const type = e.Sports.toLowerCase()
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
        setMyData(dataId.filter((e)=>{
          const search = value;
          const searchcity = e.city.toLowerCase()
          const type = e.Sports.toLowerCase()
          // console.log("array type",type);
          // console.log("prop type",sport)
          // value === e.city.toLowerCase()
          return(
            (sport)?searchcity.includes(search) && searchcity.startsWith(search) && type===sport :
            searchcity.includes(search) || searchcity.startsWith(search)
            )
            
          } ))
        }
      }, [value,dataId,sport]);
      // console.log(myData.length);
    const getData = (e) => {
      myData.find({id: e.id})
      dataId.find({id:e.id})
    }
  return (
    <div>
        
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} bg={'hsl(233deg 27% 24%);'} >
        <Box id='typography' textColor={'whiteAlpha.800'}  fontWeight={'bold'} textAlign={'left'} paddingLeft={'10px'} paddingTop={'20px'}>
       
        {/*
        experience  the  thrill of victory.
        are you ready for the challenge.
        */}
        <Typewriter
            words={[' Place where talents meets opportunity.', ' Discover the champion within.', ' Experience  the  thrill of victory.', 'Are you ready for the challenge?',' Find your edge.']}
            loop={25}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={90}
            delaySpeed={50}
           
          />
        </Box>
       
        <Flex justifyContent={'flex-end'} mt='5vh' mr='5vw'>
          <Button
            borderRadius={0} color={'white'} bg={'#7C6A96'} boxShadow={'2px black'} _hover={{}} marginBottom={'20px'} onClick={()=>createTournament()}>Create Tournament</Button>
        </Flex>
     
        </Box>
        <Box position={'absolute'} zIndex={'-1'} width={'100%'}>
          <Image id='background-image' src={stadium} width={'100%'} filter={'opacity(0.9)'} />
        </Box>
        
        <Box textColor={'whiteAlpha.900'} fontSize={'20'} fontWeight={'bold'} fontStyle={'normal'} textAlign={'left'} paddingLeft={'20px'} >
          Upcoming Tournament
        </Box>
        {/* <SimpleGrid padding={'15px'} spacing={10} minChildWidth={'250px'}  >
        {dataId && dataId.map((data)=>{
            return(
              
                // <Box>
                // <Card style={{color: "white"}}>{data.tournament_name}</Card>
                // </Box>
                <div key={data._id}>
                <Card id={data._id} onClick={getData}  height={'200px'}  margin='1%' boxShadow={'outline'} rounded='md' bg={'whiteAlpha.900'} maxW={'350px'} >
                <CardBody>
                <Link to={`/detail/${data._id}`}>
                  <Box  >
                    <Box textColor={'purple.700'} fontSize={'25'} fontWeight={'bold'} fontStyle={'oblique'} bg="blue.50">
                      {data.tournament_name}
                    </Box>
                   

                    <Flex justifyContent={'center'} alignItems={'center'}>
                      <Box h='100px' w={'200px'} textAlign='center'>
                        <Image h='100px' w={'200px'} boxShadow={'outline'} rounded={'5px'} src={data.image} />
                        
                      </Box>
                    </Flex>
                    <Flex justifyContent={'space-evenly'}>
                      <Box textColor={'purple.700'} fontSize={'25'} fontWeight={'bold'} fontStyle={'oblique'}>
                        {data.start_date}
                      </Box>
                      <Box textColor={'purple.700'} fontSize={'25'} fontWeight={'bold'} fontStyle={'oblique'}>
  
                        {data.city}
                      </Box>
                    </Flex>
                  </Box>
  
                </Link>
                </CardBody>
              </Card>
              </div>
            
            )
          })}
          </SimpleGrid> */}
      <SimpleGrid padding={'15px'} spacing={10} minChildWidth={'250px'}  >
        {

        myData.length==0?<Flex as={'h1'} fontSize={'50px'} color={'white'} >Sorry no tournament found.</Flex>:
        myData.map((data, index) => {
          // console.log(data.Qr)
          return (

            <Card id={data.id} onClick={getData} key={index} height={'200px'}  margin='1%' boxShadow={'outline'} rounded='md' bg={'whiteAlpha.900'} maxW={'350px'} >
              <CardBody>
              <Link to={`/detail/${data._id}`}>
                <Box key={index}  >
                  <Box textColor={'purple.700'} fontSize={'25'} fontWeight={'bold'} fontStyle={'oblique'} bg="blue.50">
                    {data.tournament_name}
                  </Box>
                  <Flex justifyContent={'center'} alignItems={'center'}>
                    <Box h='100px' w={'200px'} textAlign='center'>
                      <Image h='100px' w={'200px'} boxShadow={'outline'} rounded={'5px'} src={data.image} />
                    </Box>
                  </Flex>
                  <Flex justifyContent={'space-evenly'}>
                    {/* <Box textColor={'purple.700'} fontSize={'25'} fontWeight={'bold'} fontStyle={'oblique'}>
                      {data.start_date}
                    </Box> */}
                    <Box textColor={'purple.700'} fontSize={'25'} fontWeight={'bold'} fontStyle={'oblique'}>

                      {data.city}
                    </Box>
                  </Flex>
                </Box>

              </Link>
              </CardBody>
            </Card>

          )

        })
}
      </SimpleGrid>

    </div>
  );
}
