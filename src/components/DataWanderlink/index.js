import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import Detail from './Detail';
import Main from './Main';

const Index = () => {
    const { path } = useRouteMatch();

    return (
        <Switch>
            <Route path={`${path}/:id`}>
                ini adalah detail
                <Detail/>
            </Route>

            <Route path={path} exact>
                <Main/>
            </Route>
        </Switch>
    )
};

export default Index;