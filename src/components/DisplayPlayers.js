
import React from 'react';
import PlayerInfoContainer  from '../containers/PlayerInfoContainer';

const style= {
    versus: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    }
}

const DisplayPlayers = () => {
    return (
        <div className="columns">
            <PlayerInfoContainer className="column is-5" name="player"></PlayerInfoContainer>
            <span style={style.versus} className="column is-2 has-text-centered v-centered">VS</span>
            <PlayerInfoContainer className="column is-5" name="monster"></PlayerInfoContainer>
        </div>
    );
};

export default DisplayPlayers;