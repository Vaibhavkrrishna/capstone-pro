import React, { useContext } from 'react';
import { AuthContext } from '../context/Auth.context.js';

import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { logout } = useContext(AuthContext);
  const onLogout = (e) => {
    e.preventDefault();
    logout();
  }

    return (

      <div className="row h-screen">
        <div className="col-sm-8 ml-80 h-full">
        
          <h1>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-6 mt-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>
<br/>
            Hello Admin
          </h1>
          
        </div>
        {/* <div className="ml-80"><Link </Link></div> */}
        
       
  
    </div>
  
    );
  
  }
  
  export default Dashboard;