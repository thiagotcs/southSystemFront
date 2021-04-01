import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';

import AddDragon from '../components/addDragon';
import DragonDetail from '../components/dragonDetail';
import EditDragon from '../components/editDragon';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/new" component={AddDragon} isPrivate />
    <Route path="/detail/:id" component={DragonDetail} isPrivate />
    <Route path="/edit/:id" component={EditDragon} isPrivate />
  </Switch>
);

export default Routes;
