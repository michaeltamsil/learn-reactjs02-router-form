import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Detail from './Detail';
import Main from './Main';

class Index extends Component {
    render() {
        console.log(this.props)
        return (
            <Switch>
                <Route path="xx/:id">
                    <Detail/>
                </Route>
                <Route exact path="">
                    <Main/>
                </Route>
                
            </Switch>
        )
    }
}
export default Index;

// function test () {
//    // let match = useRouteMatch();
//     return (
//         <div>Helo</div>
//     )
// }
// export default test;