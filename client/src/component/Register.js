import { Box, FormControl, FormLabel, Input, Button, Heading, Container,Select } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../component/css/Register.css";


const Register = () => {
  const formData = [
    {
      title: "Tournament Name",
      type: "text",
      isRequired: "true",
      name: "tournament_name"
    },
    {
      title: "Organiser Name",
      type: "text",
      isRequired: "true",
      name: "organiser_name"
    },
    {
      title: "Sports",
      type: "dropdown",
      isRequired: "true",
      name: "Sports"
    },
    {
      title: "Entry fees in Rs.",
      type: "number",
      isRequired: "true",
      name: "entry_fees"
    },
    {
      title: "Email",
      type: "email",
      isRequired: "false",
      name: "email"
    },
    {
      title: "Contact No.",
      type: "number",
      isRequired: "true",
      name: "contact"
    },
    {
      title: "Start date",
      type: "date",
      isRequired: "true",
      name: "start_date"
    },
    {
      title: "State",
      type: "text",
      isRequired: "true",
      name: "state"
    },
    {
      title: "City",
      type: "text",
      isRequired: "true",
      name: "city"
    },
    {
      title: "Pincode",
      type: "number",
      isRequired: "true",
      name: "pincode"
    },
    {
      title: "UPI QR code",
      type: "image",
      isRequired: "false",
      name: "upiQr"
    },
    {
      title: "UPI number",
      type: "number",
      isRequired: "false",
      name: "upinumber"
    }
  ]
  const navigate = useNavigate();
  const [details, setDetails] = useState({ tournament_name: "", organiser_name: "",Sports: "",entry_fees: "", email: "", contact: "", start_date: "", state: "", city: "", pincode: "", upiQr: "", upinumber: "" })
  let name, value;
  const handelInputs = (e) => {

    name = e.target.name;
    value = e.target.value;
    console.log(name)
    setDetails({ ...details, [name]: value });

  }
  const PostData = async (e) => {
    e.preventDefault();
    console.log(details);
    const { tournament_name, organiser_name,Sports, entry_fees, email, contact, start_date, state, city, pincode, upiQr, upinumber } = details;
    const res = await fetch(`${process.env.REACT_APP_API}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        tournament_name, organiser_name,Sports, entry_fees, email, contact, start_date, state, city, pincode, upiQr, upinumber
      })
    });

    const tdata = await res.json();
    // console.log(data);
    // if(data.error){
    //     toast.error(data.error)

    // }
    // else{
    if (tdata.status === 422 || !tdata) {
      window.alert("Try again");
      console.log("invalid Registration")
    }
    else {
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

              {data.type==="dropdown"?
               <Select onChange={handelInputs} placeholder='select sports' color={'black'} maxW="40vh" name={data.name}>
               <option value='vollyball'>Vollyball</option>
               <option value='cricket'>Cricket</option>
               <option value='kabaddi'>Kabaddi</option>
               <option value='badminton'>Badminton</option>
               <option value='football'>Football</option>
               <option value='other'>Other sports</option>
           </Select>: <Input maxW="40vh" onChange={handelInputs} type={data.type} isRequired={data.isRequired} name={data.name} />}
        
              </FormControl>
             
            </Box>
             
          )
        })}
         <div>
            <h2>Please enter more details of the tournament</h2>
        <textarea name="player_name" cols="50" rows="10" onChange={handelInputs} value={details.name}></textarea>
         </div>
        <Button onClick={PostData}>Create</Button>
      </Box>
    </Container>

  );
}

export default Register;
