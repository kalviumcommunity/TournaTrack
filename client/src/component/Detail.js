import React from 'react';
import data from '../Data';
import { Link } from 'react-router-dom';
function Detail() {
  return (
    <div>
      <h2>Details about the  {data[0].tournamentName}</h2>
      <div>
        <h4>Organiser name:  {data[0].details[0].name}</h4>
      </div>
      <div>
        <h4>Entry Fess:  {data[0].details[2].entryFees}</h4>
      </div>
      <div>
        <h4>State:  {data[0].details[5].state}</h4>
      </div>
      <div>
        <h4>City:  {data[0].details[6].city}</h4>
      </div>
      <div>
        <h4>Contact no:  {data[0].details[3].contact}</h4>
      </div>
      <div>
        <h4>pincode:  {data[0].details[7].pincode}</h4>
      </div>
      <div>
        <h4>Rules:  {data[0].details[10].rules}</h4>
      </div> <Link to='/PlayerRegister'>
      <button>Register</button>
              </Link>
      
      <button>Back</button>
    </div>
  );
}

export default Detail;
