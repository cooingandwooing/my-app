import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import Main from './Main';
import Topic from './../router1/topic';
import About from './../router1/about';
import Info from './info';
import NoMatch from './NoMatch';

export default class IPRouter extends React.Component {

    render() {
        return (
            <Router>
                <Home>
                    <Switch>
                        <Route path="/main" render={() =>
                            <Main>
                                <div>this is a sub childe</div>
                                <Route path="/main/:value" component={Info} />
                            </Main>
                        } />
                        <Route path="/about" component={About} />
                        <Route exact path="/about/abc" component={About} />
                        <Route path="/topics" component={Topic} />
                        <Route component={NoMatch} />
                    </Switch>
                </Home>
            </Router>
        );
    }
}