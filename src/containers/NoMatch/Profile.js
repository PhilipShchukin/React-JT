import React from 'react';
import { Redirect, useLocation } from 'react-router';


export const Profile = () => {
  const location = useLocation();
  
  if (!location?.from?.pathname) return <Redirect to="/" />

  return (
    <div >
      
    </div>
  );
};
