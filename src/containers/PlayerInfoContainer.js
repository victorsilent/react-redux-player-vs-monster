import React, { Component } from 'react';
import PlayerInfo from '../components/PlayerInfo';
import { connect } from 'react-redux';

class PlayerInfoContainer extends Component {
    render() {
        return (
            <PlayerInfo></PlayerInfo>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        hp: state[ownProps.name]['hp'],
    }
}
const PlayerInfoWrapper = connect(
    mapStateToProps,
    null
)(PlayerInfo)


export default PlayerInfoWrapper;