import React from 'react';

const Action = ({ children, onClick, enable }) => {
    return (
        <button disabled={!enable} onClick={() => onClick()}>
            {children}
        </button>
    );
};

export default Action;