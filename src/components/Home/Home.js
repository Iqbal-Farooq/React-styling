import React from 'react';
import Button from '../UI/Button/Button';
import { useContext } from 'react';
import Auth from '../../Context/Auth';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {
  const ctx=useContext(Auth);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={ctx.onLogout}>LogOut</Button>
    </Card>
  );
};

export default Home;
