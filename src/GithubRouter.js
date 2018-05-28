import React, { Component } from 'react';
import {Route } from 'react-router-dom';
import Home from './Home/Home';
import RippleScriptComponent from './Projects/RippleScriptComponent';
import Blackjack from './Projects/Blackjack';


class GithubRouter extends Component {
  constructor() {
    super()

    this.state = {
      user1Id: null,
      user2Id: null,
      gameId: null,
      user1Obj: null,
      user2Obj: null
    }
  }

  setUpGame = (game, user1, user2) => {
    this.setState({
      user1Id: game.user1_id,
      user2Id: game.user2_id,
      gameId: game.id,
      user1Obj: user1,
      user2Obj: user2
    }, () => console.log(this.state))
  }

  componentDidMount() {
    console.log("Mounting ", this.state)
  }

  render() {
    console.log(this.state);
    console.log("This is the process.env", process.env.PUBLIC_URL)
    // debugger
    return (
      <div>
        {/* <Route exact path={`/gameover`} component={GameOver} /> */}
        <Route exact path="/" component={Home}/>
        <Route path="/RippleScript" component={RippleScriptComponent}/>
        <Route path="/Blackjack" component={Blackjack}/>
      </div>
    );
  }
}

export default GithubRouter;
