import React from 'react';
import {Switch, Route, useRouteMatch } from 'react-router-dom';

import Add from './Add';
import Detail from './Detail/index';
import Main from './Main';
import Navbar from './Navbar';

const Index = () => {
  let { path } = useRouteMatch();
  return (
      <div>
        <Navbar/>
        <Switch>
          <Route path={path} exact>
            <Main/>
          </Route>
          <Route path={`${path}/add`}>
            <Add/>
          </Route>
          <Route path={`${path}/:id`}>
            <Detail/>
          </Route>
        </Switch>
      </div>
    );
};
export default Index;