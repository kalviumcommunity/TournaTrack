import React from 'react';
import { HamburgerIcon,Search2Icon } from '@chakra-ui/icons';
import { Flex, Input,Button,Select} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
              <Flex p={4} flexDirection={'row'} justifyContent={'space-between'} bg={'rgb(51, 53, 69)'}>
                <Flex alignItems={'center'} color="white" ml={5}>
                  
                    Logo
                    </Flex>
                    <Flex flexDirection={'row'} alignItems={'center'} bg={'white'} paddingLeft="1vw" borderRadius={8}>
                      <Search2Icon />
                      <Input ml={2} type={'text'} placeholder = "Search your city name" bg={'white'} width="30vw" _focusVisible={{}} />
                    </Flex>
                
             
                <Flex justifyContent={'space-between'} alignItems='center'>
                <Select  placeholder='select sports' color={'black'} bg={'whiteAlpha.900'} >
                         <option value='option1'>Vollyball</option>
                         <option value='option1'>Cricket</option>
                         <option value='option2'>Kabaddi</option>
                         <option value='option3'>Badminton</option>
                         <option value='option3'>Football</option>
                         <option value='option3'>Other sports</option>
                </Select>
                  <Button ml={6} bg={'#F84464'} height="4vh">Sign in</Button >
                 <HamburgerIcon ml={6} as='HamburgerIcon' color={'white'}  />
                </Flex>
              </Flex>

  );
}

export default Navbar;
