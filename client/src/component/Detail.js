import React from 'react';
import data from '../Data';
import { Link } from 'react-router-dom';
function Detail() {
  return (
    <>
     
       <Link to='/PlayerRegister'>
      <button>Register</button>
              </Link>
      
      <button>Back</button>
    </>
  );
}

export default Detail;
