import React from 'react';
import './ProfilePage.css';

import { BP, } from './BP';
import { UserOutlined } from '@ant-design/icons';


export const ProfilePage = ({ }) => {
  
  

  return (
    
    <div className='profilePage'>   
      <>
        <h1><UserOutlined /> 
        <a href="https://www.linkedin.com/in/philipshchukin/" target="_blank">Profile</a>
        </h1>
        
        < BP />
      </>
    </div>
  );
};






