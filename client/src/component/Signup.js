import React, {useState} from 'react';
import { Box, ColorModeProvider, CSSReset, Flex, Heading, IconButton, theme, ThemeProvider, useColorMode,ColorModeScript, FormControl, FormLabel, Input, Stack,Button } from '@chakra-ui/react';
import { MoonIcon,SunIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
  



function Signup() {
    

    return (
       
        <ThemeProvider theme={theme}>
            <ColorModeProvider>
            <CSSReset/>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <SignupArea/>
            </ColorModeProvider>
        </ThemeProvider>

    );
}

const SignupArea = ()=>{
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
        <SignupHeader/>
        <SignupForm/>
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

const SignupHeader=()=>{
    return(
  <Box textAlign='center'>
    <Heading>Register your account</Heading>
  </Box>
    )
}
const SignupForm = () =>{
    const navigate = useNavigate();
    const [user,setUser] =useState({name:"",email:"",phone:"",password:"",cpassword:""})
    let name, value;
    const handelInputs = (e) =>{
          console.log(e)
          name= e.target.name;
          value = e.target.value;
          setUser({...user, [name]:value});
     }
       const PostData = async(e) =>{
          e.preventDefault();
          const {name,email,phone,password,cpassword} = user;
        const res = await fetch(`${process.env.REACT_APP_API}/register`,{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name,email,phone,password,cpassword 
            })
        });
       
        const data = await res.json();
        console.log(data);
        if(data.error){
            toast.error(data.error)

        }
        else{
            if(data.status===422 || !data ){
                window.alert("invalid Registration");
                console.log("invalid Registration")
              }
              else{
                window.alert(" Registration succesull");
                console.log("Registration succesfull")
                navigate("/signin")
              }
        }
     
       }
    return(<>
     <Box  my={8} textAlign='left'>
     <form method = "POST">
        <FormControl>
            <FormLabel>Name</FormLabel>
                <Input type={'text'} name="name" placeholder='Enter your name'value = {user.name}
                onChange={handelInputs}/> 
        </FormControl>
        <FormControl>
            <FormLabel>Email</FormLabel>
                <Input type={'email'} name="email" placeholder='Enter your Email Adress'value = {user.email}
                onChange={handelInputs}/> 
        </FormControl>
        <FormControl>
            <FormLabel>Phone no</FormLabel>
                <Input type={'number'} name="phone" placeholder='Enter your phone number'value = {user.phone}
                onChange={handelInputs}/> 
        </FormControl>
        <FormControl>
            <FormLabel>Password</FormLabel>
                <Input type={'password'}  name = "password" placeholder='Enter your password'value = {user.password}
                onChange={handelInputs}/> 
        </FormControl>
        <FormControl>
            <FormLabel>Confirm Password</FormLabel>
                <Input type={'password'} name = "cpassword" placeholder='confirm your password'value = {user.cpassword}
                onChange={handelInputs}/> 
        </FormControl>
        <Stack isInline justifyContent={'space-between'}>
           
        </Stack>
        <Button bg={'green.500'}  width={'full'} mt={4} onClick={PostData} >
            Register
        </Button>
     </form>
    
     </Box>
 <ToastContainer/>
     </>
    )
}
export default Signup;
