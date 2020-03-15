// Dependencies
import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

// views
import Qualification from './views/Qualification.jsx';
import ConversationHistory from './views/ConversationHistory.jsx';
import Home from './views/Home.jsx';
import Dashboard from "./components/dashboard.jsx";

const MenuRoutes = (
    <Switch>
        <Route path="/qualification" component={Qualification} />
        <Route path="/conversation_history" component={ConversationHistory} />
        <Route exact path="/" component={Home} />
        <Redirect to="/404" />
    </Switch>
);

const Routes = (
    <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/404" render={() => <h1>404 NOT FOUND</h1>} />
    </Switch>
)

export {
    Routes,
    MenuRoutes
}
