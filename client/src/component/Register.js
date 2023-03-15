import { Box, FormControl, FormLabel, Input, Button, Heading, Container } from '@chakra-ui/react';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "../component/css/Register.css";


const Register = () => {
  const formData = [
    {
      title: "Tournament Name",
      type: "text",
      isRequired: "true",
      name:"Tournamennt name"
    },
    {
      title: "Organiser Name",
      type: "text",
      isRequired: "true",
      name:"Organiser name"
    },
    {
      title: "Entry fees in Rs.",
      type: "number",
      isRequired: "true",
      name:"Entry fees"
    },
    {
      title: "Email",
      type: "email",
      isRequired: "false",
      name:"email"
    },
    {
      title: "Contact No.",
      type: "number",
      isRequired: "true",
      name:"Contact no."
    },
    {
      title: "Start date",
      type: "date",
      isRequired: "true",
      name:"Start date"
    },
    {
      title: "State",
      type: "text",
      isRequired: "true",
      name:"State"
    },
    {
      title: "City",
      type: "text",
      isRequired: "true",
      name:"City"
    },
    {
      title: "Pincode",
      type: "number",
      isRequired: "true",
      name:"Pincode"
    },
    {
      title: "UPI QR code",
      type: "image",
      isRequired: "false",
      name:"Upi or code"
    },
    {
      title: "UPI number",
      type: "number",
      isRequired: "false",
      name:"Upi number"
    }
  ]
  const navigate = useNavigate();
  const [details,setDetails] =useState({tournament_name:"",organiser_name:"",entry_fees:"",email:"",contact:"",start_date:"",state:"",city:"",pincode:"",upiQr:"",upinumber:""})
  let name, value;
  const handelInputs = (e) =>{
        console.log(e)
        name= e.target.name;
        value = e.target.value;
        setDetails({...details, [name]:value});
        
   }
   const PostData = async(e) =>{
    e.preventDefault();
    const {tournament_name,organiser_name,entry_fees,email,contact,start_date,state,city,pincode,upiQr,upinumber} = details;
  const res = await fetch(`${process.env.REACT_APP_API}/create`,{
      method:"POST",
      headers:{
          "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        tournament_name,organiser_name,entry_fees,email,contact,start_date,state,city,pincode,upiQr,upinumber
      })
  });
 
  const tdata = await res.json();
  // console.log(data);
  // if(data.error){
  //     toast.error(data.error)

  // }
  // else{
      if(tdata.status===422 || !tdata ){
          window.alert("Try again");
          console.log("invalid Registration")
        }
        else{
          window.alert("Tournament created sucessfully");
          console.log("Tournament created sucessfully")
          navigate("/")
        }
  // }

 }
  
   
  return (
    <Container width={'100%'} justifyContent={'center'} align={'center'} bg="green.200" margin={'0'} maxWidth="100%"
     >
      <Box maxW="40vw" flexDirection="column" justifyContent="center"  >
        <Heading>Create your Tournament</Heading>
        {formData.map((data, index) => {
          return (
            <Box width={'full'} justifyContent={'center'} alignItems={'center'}  >

              <FormControl maxW="100vw" display="flex" flexDirection="column" alignItems={'center'} key={index} >
                <FormLabel maxW="100vh" justifyContent={'left'}>{data.title}</FormLabel>
                <Input maxW="40vh"  onChange={handelInputs} type={data.type} isRequired={data.isRequired} name={data.name} />
              </FormControl>
            </Box>

          )
        })}
        <Button onClick={PostData}>Create</Button>
      </Box>
    </Container>

  );
}

export default Register;
