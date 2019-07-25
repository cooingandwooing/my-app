import React from 'react'
import Child from './Child'
import { Button } from 'antd'
import './index.less'

export default class Life extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         count: 0
    //     };
    // }

    state = {
        count: 0
    }

    HandleAdd = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    HandleClick() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        let style = {
            padding: 50,
        }
        return (
            <div className="content">
                <p>React生命周期介绍</p>
                <Button onClick={this.HandleAdd}>点击一下</Button>
                <Button type="primary" onClick={this.HandleClick.bind(this)}>点击一下</Button>
                <p>{this.state.count}</p>
                <Child name={this.state.count}></Child>
            </div>
        )
    }
}