import React, { Component } from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom'
import 'typeface-roboto';

/** COMPONENTS */
import _helper from '../helpers'
import AdminDashboard from './admin/AdminDashboard'
import HomeContainer from './home/HomeContainer'
import Schedule from './schedule/Schedule'

class App extends Component {

    render() {
        return (
            <Router history={_helper.History}>
                <Switch>
                    <Route path="/admin-dashboard" component={AdminDashboard}/>
                    <Route path="/home" component={HomeContainer}/>
                    <Route path="/schedule" component={Schedule}/>
                    <Route path='*' render={() => <Redirect to="/home" />}/>
                </Switch>
            </Router>
            );
    }
}

export default App;
