import { Button, Input } from '@chakra-ui/react';
import React,{useState} from 'react';
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
  
const Reset = () => {
 const[email,setEmail] = useState("");
    const handelchange =  () =>{
       fetch(`${process.env.REACT_APP_API}/reset`,{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                email 
            })
        })
        .then((res) =>res.json())
        .then((data)=>{console.log(data)
        if(data.error){
          toast.error(data.error)
        }
        else{
          toast.success(data.message)
        }
      })
    }

  return (
    <div>
        <Input onChange={(e)=>{setEmail(e.target.value)}} type='email' placeholder='Enter your Email Adress'/>
        <Button onClick={handelchange}>Reset</Button>
        <ToastContainer/>
    </div>
  );
}

export default Reset;
