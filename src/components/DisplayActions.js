import React from 'react';
import ActionLink from '../containers/ActionLink';

const DisplayActions = () => {
    return (
        <div className="columns">
            <ActionLink moveType="ATTACK">Attack</ActionLink>
            <ActionLink moveType="HEAL">Heal</ActionLink>
        </div>
    );
};

export default DisplayActions;