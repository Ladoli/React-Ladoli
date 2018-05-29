import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Home/Home';
import FooterSection from './FooterSection.js'
import RippleScriptProject from './Projects/RippleScriptProject';
import Blackjack from './Projects/Blackjack';


class GithubRouter extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL+"/"} component={Home}/>
          <Route exact path={process.env.PUBLIC_URL+"/RippleScript"} component={RippleScriptProject}/>
          <Route exact path={process.env.PUBLIC_URL+"/Blackjack"} component={Blackjack}/>
        </Switch>
          <Route path={process.env.PUBLIC_URL+"/"} component={FooterSection}/>
      </div>
    );
  }
}

export default GithubRouter;
