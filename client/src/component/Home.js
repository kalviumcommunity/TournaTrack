import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import data from '../Data';
export default function Home() {
  console.log(data[0].details[1])
  const navigate= useNavigate()

  return (
    <div>
      <Navbar/>
      <Link to='/Register'>
      <button>Create tournament</button>
              </Link>
             
                <div>
                  <h3 onClick={()=>navigate('/Detail')}>
                {data[0].tournamentName}
                </h3>
                </div>
                <h6>
                {data[0].details[1].sports}
                </h6>
             

    </div>
  );
}
