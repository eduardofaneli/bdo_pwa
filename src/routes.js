import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import BossList from './pages/BossList';
import Main from './pages/Main';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/bosslist" component={BossList}/>
        </Switch>
    </BrowserRouter>    
)

export default Routes;