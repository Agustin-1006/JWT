import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '../App';
import NavBar from '../components/NavBar';
import About from '../pages/About';
import Login from '../pages/Login';
import NavRouter from './NavRouter';
import Register from '../pages/Register';
import Refreshtoken from '../pages/Refreshtoken';
import Autenticado from '../pages/Autenticado';

const Routes = () => (
  <Switch>
    <NavRouter path="/about">
      <About />
    </NavRouter>
    <NavRouter path="/login">
      <Login />
    </NavRouter>
    <NavRouter path="/register">
      <Register />
    </NavRouter>
    <NavRouter path="/refresh">
      <Refreshtoken />
    </NavRouter>
    <NavRouter path="/autent">
      <Autenticado />
    </NavRouter>
    <Route path="/">
      <NavBar />
      <App />
    </Route>
  </Switch>
);

export default Routes;
