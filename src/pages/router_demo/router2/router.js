import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Main from './../router1/Main';
import Topic from './../router1/topic';
import About from './../router1/about';

export default class IPRouter extends React.Component {

    render() {
        return (
            <Router>
                <Home>
                    <Route path="/main" render={() =>
                        <Main>
                            <div>this is a sub childe</div>
                            <Route path="/main/a" component={About} />
                        </Main>
                    } />
                    <Route path="/about" component={About} />
                    <Route path="/topics" component={Topic} />
                </Home>
            </Router>
        );
    }
}