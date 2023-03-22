import React,{useState} from 'react';
import{Box,Input,Button}  from "@chakra-ui/react"
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
  
const Newpassword = () => {
    const[password,setPassword] = useState("");
    const[cpassword,setcpassword]=useState("");
   const{id,token}=useParams();
     const PostData = async(e) =>{
        if(password!==cpassword){
            toast.error("both password should match")
            return
        }
      const res = await fetch(`${process.env.REACT_APP_API}/newpassword/${id}/${token}`,{
          method:"POST",
          headers:{
              "Content-Type" : "application/json"
          },
          body: JSON.stringify({
              password,cpassword 
          })
         
      })
      const data = await res.json()
      if(data.error){
        toast.error(data.error)
      }
      else{
        toast.success(data.message)
      }
    };
  return (
   <Box>
    <Input type="password"  onChange={(e)=>setPassword(e.target.value)} placeholder="Enter new password"/>
    <Input type="password"  onChange={(e)=>setcpassword(e.target.value)} placeholder="Confirm password"/>
    <Button onClick={PostData}>Submit</Button>
    <ToastContainer/>
   </Box>
  );
}

export default Newpassword;
