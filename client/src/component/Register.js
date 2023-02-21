import React from 'react';
import { useEffect,useState} from 'react';
import "../component/css/Register.css";
const Register = () => {
  return (
    <div className='container'>
       <form>
          <div className='element'>
            <h1>Create your tournament</h1>
            <div>
           <input type="text"  placeholder='Name of the tournament'/>
            </div>
          <div className='org'>
            <div className='name'>
          <h4 className='og'>Organiser Name</h4> <input type="text" className='ogname' />
            </div>
            <div>
          <h4>Sports</h4> <input type="text"  />
            </div>
            </div>
            <div>
          <h4>Entry fees in RS.</h4> <input type="number" />
            </div>
            <div>
          <h4>Contact No.</h4> <input type="number" />
            </div>
            <div>
          <h4>Email</h4> <input type="email" />
            </div>
            <div>
          <h4>Start Date</h4> <input type="date" />
            </div>
            <div>
          <h4>State</h4> <input type="text" />
            </div>
            <div>
          <h4>City</h4> <input type="text" />
            </div>
            <div>
          <h4>Pincode</h4> <input type="number" />
            </div>
            <div>
          <h4>UPI QR code</h4> <input type="image" />
            </div>
            <div>
          <h4>UPI number</h4> <input type="number" />
            </div>
            <div>
           <h4>Rules and details of the tournament</h4> <textarea name="paragraph_text" cols="50" rows="20"></textarea>
            </div>
           <button>Confirm</button>

          </div>
     </form>
    </div>
  );
}

export default Register;
