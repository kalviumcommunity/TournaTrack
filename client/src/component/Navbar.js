import React,{useState,useEffect} from 'react';
import { HamburgerIcon,Search2Icon } from '@chakra-ui/icons';
import { Flex, Input,Button,Select,Menu,MenuItem,MenuList,MenuButton,MenuDivider,
  Avatar,
  Center,Image
  } from '@chakra-ui/react';

import { Link,useNavigate } from 'react-router-dom';
import Home from './Home';
import jwt_decode from 'jwt-decode';
import logo from '../assest/ttlogo.svg'


function Navbar({input, setInput, sportType,setSportType}) {
  // const[sportType ,setSportType] = useState('');
  // console.log(sportType);
  const navigate = useNavigate()

    const  name = sessionStorage.getItem('name')
    const image = sessionStorage.getItem('image')
const handelLogout = ()=>{
  sessionStorage.clear()
  navigate('/signin')
}


 
  
  return (     <>
              <Flex p={4} flexDirection={'row'} justifyContent={'space-between'} bg={'rgb(51, 53, 69)'} color={''}>
                <Link  to={'/'} >
                <Flex alignItems={'center'} color="white" ml={5} >
                  <Image height ={50}src= {logo}/> 
                    </Flex>
                    </Link>
                    <Flex display={{base:'none',md:'flex',lg:'flex'}} id='search-button-pc' flexDirection={'row'} alignItems={'center'} bg={'white'} paddingLeft="1vw" borderRadius={8}>
                      <Search2Icon color={'black'} />
                      <Input value={input} onChange={(e)=>{setInput(e.target.value)}} ml={2} type={'text'} placeholder = "Search your city name"   bg={'white'} width="30vw" _focusVisible={{}} />
                    </Flex>
                
             
                <Flex justifyContent={'space-between'} alignItems='center' >
                <Select onChange={(e) => {setSportType(e.target.value)}} placeholder='select sports' color={'black'} bg={'whiteAlpha.900'} mr={5} >
                         <option value='Archery'>Archery</option>
                         <option value='Athletics'>Athletics</option>
                         <option value='badminton'>Badminton</option>
                         <option value='Basketball'>Basketball</option>
                         <option value='cricket'>Cricket</option>
                         <option value='football'>Football</option>
                         <option value='Handball'>Handball</option>
                         <option value='Hockey'>Hockey</option>
                         <option value='kabaddi'>Kabaddi</option>
                         <option value='Kho-kho'>Kho-kho</option>
                         <option value='vollyball'>Vollyball</option>    
                </Select>
                {
                  (name || image)?
                    
                    <></>:
                    <Link to ='./signin'>
                    <Button ml={6} bg={'#F84464'} height="4vh">Sign in</Button >
                    </Link>
                }
                  
                 {/* <HamburgerIcon ml={6} as='HamburgerIcon' color={'white'}  /> */}

                 <Menu ml={6}>
                   {
                    (name || image)? 
                    <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}>
                    <Avatar 
                      size={'sm'}
                      src={image}
                    />
                  </MenuButton>:<></>
                   }
             
              <MenuList alignItems={'center'}>
                <br />
                <Center>
                  <Avatar ml={5}
                    size={'2xl'}
                    src={image}
                   
                  />
                </Center>
                <br />
                <Center>
                  <p>{name}</p>
                </Center>
                <br />
                <MenuDivider />
                
                <Link to ='./profile'>
                <MenuItem>My profile</MenuItem>
                </Link>
                <Link to ='./tournamentparticipated'>
                 <MenuItem>My tournament</MenuItem>
                </Link>
                <Link to ='./premium'>
                 <MenuItem>Premium</MenuItem>
                </Link>
                <Link to ='./about'>
                <MenuItem>About us</MenuItem>
                </Link>
                <MenuItem onClick={handelLogout}>Logout</MenuItem>
              </MenuList>
            </Menu>
                 
          
                
                </Flex>
              </Flex>
              <Flex display={{base:'flex',md:'none',lg:'none'}} p={4} flexDirection={'row'} justifyContent={'center'} bg={'rgb(51, 53, 69)'}>
              <Flex  flexDirection={'row'} alignItems={'center'} bg={'white'} paddingLeft="1vw" borderRadius={8} width={'80%'}  >
                      <Search2Icon color={'black'} />
                      <Input value={input} onChange={(e)=>{setInput(e.target.value)}} ml={2} type={'text'} placeholder = "Search your city name"   bg={'white'}  _focusVisible={{}} />
                    </Flex>
                    </Flex>
              </>

  );
}

export default Navbar;
