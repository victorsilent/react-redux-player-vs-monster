export const playerMove = (moveType) => {
    return {
        type: moveType,
    }
}

export const changeTurn = () => {
    return {
        type: 'CHANGE_TURN',
    }
}

export const monsterMove = () => {
    return{
        type: 'ATTACK',
    }
}