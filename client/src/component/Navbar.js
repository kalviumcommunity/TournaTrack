import React,{useState} from 'react';
import { HamburgerIcon,Search2Icon } from '@chakra-ui/icons';
import { Flex, Input,Button,Select,Menu,MenuItem,MenuList,MenuButton,MenuDivider,
  Avatar,
  Center
  } from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import Home from './Home';


function Navbar({input, setInput, sportType,setSportType}) {
  // const[sportType ,setSportType] = useState('');
  // console.log(sportType);
  
  return (     <>
              <Flex p={4} flexDirection={'row'} justifyContent={'space-between'} bg={'rgb(51, 53, 69)'}>
                <Link  to={'/'} >
                <Flex alignItems={'center'} color="white" ml={5} >
                    Logo
                    </Flex>
                    </Link>
                    <Flex flexDirection={'row'} alignItems={'center'} bg={'white'} paddingLeft="1vw" borderRadius={8}>
                      <Search2Icon color={'black'} />
                      <Input value={input} onChange={(e)=>{setInput(e.target.value)}} ml={2} type={'text'} placeholder = "Search your city name"   bg={'white'} width="30vw" _focusVisible={{}} />
                    </Flex>
                
             
                <Flex justifyContent={'space-between'} alignItems='center'>
                <Select onChange={(e) => {setSportType(e.target.value)}} placeholder='select sports' color={'black'} bg={'whiteAlpha.900'} >
                         <option value='vollyball'>Vollyball</option>
                         <option value='cricket'>Cricket</option>
                         <option value='kabaddi'>Kabaddi</option>
                         <option value='badminton'>Badminton</option>
                         <option value='football'>Football</option>
                         <option value='other'>Other sports</option>
                </Select>
                  <Link to ='./signin'>
                  <Button ml={6} bg={'#F84464'} height="4vh">Sign in</Button >
                  </Link>
                 {/* <HamburgerIcon ml={6} as='HamburgerIcon' color={'white'}  /> */}
                 <Menu ml={6}>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={'https://avatars.dicebear.com/api/male/username.svg'}
                />
              </MenuButton>
              <MenuList alignItems={'center'}>
                <br />
                <Center>
                  <Avatar
                    size={'2xl'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </Center>
                <br />
                <Center>
                  <p>Username</p>
                </Center>
                <br />
                <MenuDivider />
                <Link to ='./profile'>
                <MenuItem>My profile</MenuItem>
                </Link>
                <Link to ='./tournamentparticipated'>
                 <MenuItem>My tournament</MenuItem>
                </Link>
                <Link to ='./about'>
                <MenuItem>About us</MenuItem>
                </Link>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
                 
  
                </Flex>
              </Flex>
              </>

  );
}

export default Navbar;
