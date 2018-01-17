const stateBattle= {
  player: {
    attack: 10,
    heal: 13,
    hp: 100,
  },
  monster: {
    attack: 8,
    heal: 6,
    hp: 100,
  },
  turn: 'PLAYER'
}
export const playerReducer = (state = stateBattle, action) => {
  switch (action.type) {
    case 'ATTACK':
      return state.turn === 'PLAYER' ? (
        {
          ...state,
          monster: {
            ...state.monster,
            hp: state.monster.hp - state.player.attack
          }
        }
      ) :
      (
        {
          ...state,
          player: {
            ...state.player,
            hp: state.player.hp - state.monster.attack
          }
        }
      );
    case 'HEAL':
      return {
        ...state,
        player: {
          ...state.player,
          hp: state.player.hp + state.player.heal
        }
      }
    case 'CHANGE_TURN':
      return (state.player.hp <= 0 || state.monster.hp <= 0) ? (
        {
          ...state,
          turn: 'END'
        }
      ) : ({
        ...state,
        turn: state.turn === 'MONSTER' ? 'PLAYER' : 'MONSTER'
      })
    default:
      return state
  }
}
