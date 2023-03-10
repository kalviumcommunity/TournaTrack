import { Box, ColorModeProvider, CSSReset, Flex, Heading, IconButton, theme, ThemeProvider, useColorMode,ColorModeScript, FormControl, FormLabel, Input, Stack,Button } from '@chakra-ui/react';
import React,{useState} from 'react';
import { MoonIcon,SunIcon } from '@chakra-ui/icons';
import { Link ,useNavigate} from 'react-router-dom';


function Signin() {
    return (
       
        <ThemeProvider theme={theme}>
            <ColorModeProvider>
            <CSSReset/>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <LoginArea/>
            </ColorModeProvider>
        </ThemeProvider>

    );
}

const LoginArea = ()=>{
return(
    <Flex minHeight={'100vh'} width="full" align={'center'} justifyContent="center">
      <Box
       borderWidth={1}
       px={4}
       width='full'
       maxWidth='500px'
       borderRadius={4}
       textAlign='center'
       boxShadow='lg'
      >
      <ThemeSelector />
      <Box p={4}>
        <LoginHeader/>
        <LoginForm/>
        </Box>
      </Box>
    </Flex>
)
}

const ThemeSelector = () =>{
    const{colorMode,toggleColorMode}= useColorMode();
    return(
        <Flex>
            <IconButton icon = {colorMode==="light" ? <MoonIcon/>  : <SunIcon />} onClick={toggleColorMode} variant='ghost'/>
                  
            
        </Flex>
    )
}

const LoginHeader=()=>{
    return(
  <Box textAlign='center'>
    <Heading>Sign in to your account</Heading>
  </Box>
    )
}
const LoginForm = () =>{
    const navigate = useNavigate();
    const[email,setEmail] =  useState('');
    const[password,setpassword] = useState('');

    const loginUser = async(e) =>{
        e.preventDefault();

      const res =  await fetch('http://localhost:5000/signin', {
        method:"POST",
        headers:{
           "Content-Type" : "application/json"
        },
        body:JSON.stringify({
            email,
            password
        })
      });
      const data = await res.json();
      if(res.status === 400 || !data){
        window.alert("inavlid Credentials")
      }
      else{
        window.alert("Login SuccessFull");
        navigate("/");
      }
    }
    return(
     <Box  my={8} textAlign='left'>
     <form>
        <FormControl>
            <FormLabel>Email</FormLabel>
                <Input type={'email'} value={email} onChange={(e) =>setEmail(e.target.value)} placeholder='Enter your Email Adress'/> 
        </FormControl>
        <FormControl>
            <FormLabel>Password</FormLabel>
                <Input type={'password'} value={password} onChange={(e) =>setpassword(e.target.value)} placeholder='Enter your password'/> 
        </FormControl>
        <Stack isInline justifyContent={'space-between'}>
            <Box>
                <Link to='/signup'>Create your account</Link>
            </Box>
            <Box>
               <Link >Forgot your password ?</Link>
            </Box>
        </Stack>
        <Button bg={'green.500'}  width={'full'} mt={4} onClick={loginUser}>
            Sigin
        </Button>
     </form>
     </Box>
    )
}
export default Signin;
