import React, { Component } from 'react';
import DisplayPlayers from './components/DisplayPlayers';
import DisplayActions from './components/DisplayActions';
import DisplayResult from './containers/DisplayResult';
class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title has-text-centered">Player vs Monster</h1>
        <DisplayPlayers></DisplayPlayers>
        <DisplayActions />
        <DisplayResult> Teste</DisplayResult>
      </div>
    );
  }
}

export default App;
