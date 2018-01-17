import React, { Component } from 'react';
import { connect } from 'react-redux';
import { playerMove, changeTurn, monsterMove } from '../store/actions/moveActions';
import Action from '../components/Action';

class ActionLink extends Component {
    render() {
        return (
            <Action/>
        );
    }
}
  
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(playerMove(ownProps.moveType));
            dispatch(changeTurn());
            setTimeout(() => {
                dispatch(monsterMove());
            }, 800);
            setTimeout(() => {
                dispatch(changeTurn());
            }, 800)
            
            

        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        enable: state.turn === 'PLAYER'  ? true : false
    }
}


const ActionWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(Action)


export default ActionWrapper;