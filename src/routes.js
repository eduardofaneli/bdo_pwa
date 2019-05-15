import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import BossList from './pages/BossList';



const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={BossList}/>
        </Switch>
    </BrowserRouter>    
)

export default Routes;