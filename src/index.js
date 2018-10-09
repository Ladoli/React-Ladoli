import React from 'react';
import ReactDOM from 'react-dom';

import 'semantic-ui-css/semantic.min.css';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import reducers from "./reducers";
import Home from './components/Home/Home';
import FooterSection from './components/FooterSection';
import RippleScriptProject from './components/Projects/RippleScriptProject';
import Blackjack from './components/Projects/Blackjack';
import BlackjackSection from './components/Projects/BlackjackSection';
import ProjectList from './components/Resume/ProjectList';
import TopNavVi from './components/TopNavVi';


const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <div>
        <Route path={process.env.PUBLIC_URL+"/"} component={TopNavVi}/>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL+"/"} component={Home}/>
          <Route exact path={process.env.PUBLIC_URL+"/RippleScript"} component={RippleScriptProject}/>
          <Route exact path={process.env.PUBLIC_URL+"/Blackjack"} component={Blackjack}/>
          <Route exact path={process.env.PUBLIC_URL+"/ProjectList"} component={ProjectList}/>
          <Route exact path={process.env.PUBLIC_URL+"/BlackjackSection"} component={BlackjackSection}/>
        </Switch>
          <Route path={process.env.PUBLIC_URL+"/"} component={FooterSection}/>
        </div>
      </Router>
    </Provider>, document.getElementById('root'));
