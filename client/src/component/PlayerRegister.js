import { Container,FormControl,FormLabel,Input,Box,Heading,Stack,RadioGroup,Radio,Button, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function PlayerRegister() {
  const Data = [
    {
      title: "Team name",
      type: "text",
      name:"team_name"
    },
    {
      title: "Captain",
      type: "text",
      name: "captain"
    },
    {
      title: "Contact NO.",
      type: "number",
      name: "contact"
    },
  //  {
  //   title: "Player Name",
  //   type: "text",
  //   name: "player_name"
  //  }
  ]
  const navigate = useNavigate();
  const [value, setValue] = React.useState('1')
  const[playerdata, setPlayerData] = useState({team_name:"",captain:"",contact:"",payment:"",player_name:""})
  let name,values;
  const handelInputs = (e)=>{
    // console.log(e);
    name = e.target.name;
    values= e.target.value;
    setPlayerData({...playerdata,[name]: values})
  }

  const sendData = async(e) =>{
    e.preventDefault()
    const{team_name,captain,contact,payment,player_name}=playerdata;
    console.log(playerdata);
    const res = await fetch(`${process.env.REACT_APP_API}/player`,{
         method: "POST",
         headers:{
          "Content-Type" : "application/json"
         },
         body: JSON.stringify({team_name,captain,contact,payment,player_name})
       
    });

    const pData= await res.json();
    if(pData.status===422 || !pData ){
      window.alert("Try again");
      console.log("invalid Registration")
    }
    else if(pData.status===500){
      window.alert("500")
    }
    else{
      window.alert("Tournament created sucessfully");
      console.log("Tournament created sucessfully")
      navigate("/")
    }
  }
  return (
    <Container maxH={'100vh'} height={'100vh'} justifyContent={'center'} align={'center'} bg="green.400" margin={'0'} maxWidth="100%">
       <Heading>Register your Team</Heading>
       {Data.map((data, index) => {
          return (
            <Box width={'full'} justifyContent={'center'} alignItems={'center'}  >

              <FormControl maxW="100vw" display="flex" flexDirection="column" alignItems={'center'} key={index} >
                <FormLabel maxW="100vh" justifyContent={'left'}>{data.title}</FormLabel>
                <Input maxW="40vh" onChange={handelInputs} type={data.type} isRequired={data.isRequired} name={data.name} />
              </FormControl>
            </Box>

          )
        })}
      
  
    <RadioGroup onChange={setValue} value={value}>
      <Stack direction='row'justifyContent={'center'} alignItems={'center'} >
        <Radio value='1'>Online payemnt</Radio>
        <Radio value='2'>Cash</Radio>
      </Stack>
    </RadioGroup>
    <div>
            <h2>Players name</h2>
        <textarea name="player_name" cols="50" rows="10" onChange={handelInputs} value={playerdata.name}></textarea>
         </div>
         
         <Button mr={'5vw'}  onClick={sendData}>Proceed</Button>
         <Button>Back</Button>
         
    </Container>
    
  );
}

export default PlayerRegister;
