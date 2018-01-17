import React, { Component } from 'react';
import { connect } from 'react-redux';
import Action from '../components/Action';

class DisplayResult extends Component {

    render() {
        const winnerJsx = this.props.winner ? (<h1>The {this.props.winner} won!</h1>) : null;
        return (
            <div className="has-text-centered">
                {winnerJsx}
            </div>
        );
    }
}
  
const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
}
const getWinner = (state) => {
    if(state.monster.hp <= 0){
        return 'Player'
    }
    return 'Monster'
}
const mapStateToProps = (state, ownProps) => {
    return {
        winner: state.turn === 'END' ? getWinner(state) : false,
    }
}


const DisplayResultWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(DisplayResult)


export default DisplayResultWrapper;