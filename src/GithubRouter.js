import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Home/Home';
import RippleScriptProject from './Projects/RippleScriptProject';
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
  }

  render() {
    console.log("This is the process.env", process.env.PUBLIC_URL)
    // debugger
    return (
      <div>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL+"/"} component={Home}/>
          <Route exact path={process.env.PUBLIC_URL+"/RippleScript"} component={RippleScriptProject}/>
          <Route exact path={process.env.PUBLIC_URL+"/Blackjack"} component={Blackjack}/>
        </Switch>
      </div>
    );
  }
}

export default GithubRouter;
