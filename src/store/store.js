import { createStore, compose } from 'redux';
import { playerReducer } from './reducers/playerReducer';
//Call reducers

const store = createStore(playerReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log(store.getState());
export default store;