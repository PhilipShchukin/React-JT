import React from 'react';
import './BlogPage.css';

import {  useGetPosts } from '../../shared/queries';
import { BP, } from './BP';
import { UserOutlined } from '@ant-design/icons';


export const BlogPage = ({ }) => {
  
  const { data: posts, isLoading, isError, error } = useGetPosts();

  if (isLoading) return <h1>Загружаю данные...</h1>;

  if (isError) return <h1>{error.message}</h1>;

  return (
    <div className='blogPage'>   
      <>
        <h1><UserOutlined /> 
        <a href="https://www.linkedin.com/in/philipshchukin/" target="_blank" >  Profile</a>
        </h1>
        < BP />
      </>
    </div>
  );
};






