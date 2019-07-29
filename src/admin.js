import React from 'react';
import { Row, Col } from 'antd';
import Header from './components/Header';// 默认加载 index.js 
import Footer from './components/Footer';
import NavLeft from './components/NavLeft';
import './style/common.less';

// 继承是要使用它的生命周期
export default class Admin extends React.Component {

    
    render() {
        // 只能有一个根组件
        return (
            <Row className="container">
                <Col span={4} className="nav-left">
                    <NavLeft />
                </Col>
                <Col span={20} className="main">
                    <Header />
                    <Row className="content">
                        Content
                    </Row>
                    <Footer />
                </Col>
            </Row>
        );
    }
}