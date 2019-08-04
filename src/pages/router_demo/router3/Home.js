import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {

    render() {
        return (
            // 必须有个根节点 允许加载多个路由（除非设置了 exact）
            <div>
                <ul>
                    <li>
                        <Link to="/main">Main</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topics</Link>
                    </li>
                    <li>
                        <Link to="/imooc1">Imooc1</Link>
                    </li>
                    <li>
                        <Link to="/imooc2">Imooc2</Link>
                    </li>
                </ul>
                <hr />
                {this.props.children}
            </div>
        );

    }
}