import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router'
// import './CSS/bootstrap.css';
// import './CSS/ViStyles.css';
// import './CSS/ViRecurring.css';
import Home from './Home/Home';
import RippleScriptComponent from './Projects/RippleScriptComponent';
import FooterSection from './FooterSection.js'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
<Router>
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/RippleScript" component={RippleScriptComponent}/>
  </Switch>
</Router>, document.getElementById('root'));
ReactDOM.render(<FooterSection />, document.getElementById('footerSection'));
registerServiceWorker();
