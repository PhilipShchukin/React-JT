import React from 'react';
import { Redirect, useHistory, useLocation } from 'react-router';
import { Result, Button } from 'antd';

export const NoMatch = () => {
  const location = useLocation();
  const history = useHistory();
  console.log(location);

  const backHome = () => {
    history.push('/home')
  }

  return (
    <div className='page404'>
      <h1>Страница еще в разработке</h1>
      <Result
         status='404'
         title='404'
         subTitle={`Страница ${location.from.pathname} не найдена`}
        extra={<Button onClick={backHome} type='primary'>Вернуться на главную</Button>}
      />
    </div>
  );
};
