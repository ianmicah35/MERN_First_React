import React, { Component } from 'react';

class CardComp extends Component {
    render() {
        return (
            <div>
                <h3>Name: { this.props.cardName }</h3>
                <h4>Health: { this.props.health }</h4>
                <h4>Hidden Ability: { this.props.hb }</h4>
                <hr></hr>
            </div>
        );
    }
}

export default CardComp;