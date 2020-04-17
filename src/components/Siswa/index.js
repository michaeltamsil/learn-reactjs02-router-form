import React from 'react';
import Navbar from './Navbar';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Add from './Add';
import Main from './Main';

const Index = () => {
    let { path, url } = useRouteMatch();


    return (
        <div>
            <Navbar/>
            <Switch>
                <Route path={`${path}/add`}>
                    <Add/>
                </Route>
                <Route path={path}>
                    <Main/>
                </Route>
            </Switch>
        </div>
    )
}
export default Index;