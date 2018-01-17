import React from 'react';
const PlayerInfo = ({ hp, name, className }) => {
    const style={
        progress: {
            transition: 'all 500ms ease-in',
        }
    }
    return (
        <div className={className}>
            <h1 className="title has-text-centered">{name}</h1>
            <progress style={style.progress} className="progress is-primary" value={hp} max="100">30%</progress>
        </div>
    );
};

export default PlayerInfo;