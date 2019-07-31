import React from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import Main from './Main';
import Topic from './topic';
import About from './about';

export default class Home extends React.Component {

    render() {
        return (
            // 必须有个根节点 允许加载多个路由（除非设置了 exact）
            <HashRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home1</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/topics">Topics</Link>
                        </li>
                    </ul>


                    <hr />

                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route path="/about" component={About} />
                        <Route path="/topics" component={Topic} />
                    </Switch>
                </div>
            </HashRouter>
        );

    }
}