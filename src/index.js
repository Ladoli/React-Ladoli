import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import FooterSection from './components/FooterSection';
import RippleScriptProject from './components/Projects/RippleScriptProject';
import Blackjack from './components/Projects/Blackjack';

ReactDOM.render(<Router>
  <div>
  <Switch>
    <Route exact path={process.env.PUBLIC_URL+"/"} component={Home}/>
    <Route exact path={process.env.PUBLIC_URL+"/RippleScript"} component={RippleScriptProject}/>
    <Route exact path={process.env.PUBLIC_URL+"/Blackjack"} component={Blackjack}/>
  </Switch>
    <Route path={process.env.PUBLIC_URL+"/"} component={FooterSection}/>
  </div>
</Router>, document.getElementById('root'));
