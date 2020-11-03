import React, { Component } from 'react';

class SecondComp extends Component {
    render() {
        return(
            <div>
                <h2>Hello from Second Component</h2>
                <h5>I'm being rendered Above cildren</h5>
                { this.props.children }
                <h5>I'm being rendered Below children</h5>
            </div>
        );
    }
}

export default SecondComp;