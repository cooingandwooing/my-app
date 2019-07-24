import React from 'react'

export default class Child extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentWillMount() {
        console.log('will mount')
    }

    componentDidMount() {
        console.log('will mount')
    }

    componentWillReceiveProps(nextProps) {
        console.log('will props' + nextProps.name);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shoule update')
        return true;
    }

    componentWillUpdate() {
        console.log('will update')
    }

    componentDidUpdate() {
        console.log('did  update')
    }

    render() {
        return (
            <div>
                <p>这是子组件</p>
                <p>{this.props.name}</p>
            </div>
        )
    };
}