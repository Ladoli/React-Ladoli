import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router'
// import './CSS/bootstrap.css';
// import './CSS/ViStyles.css';
// import './CSS/ViRecurring.css';
import GithubRouter from './GithubRouter';
import FooterSection from './FooterSection.js'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(<Router basename={process.env.PUBLIC_URL}><GithubRouter /></Router>, document.getElementById('root'));
ReactDOM.render(<Router><FooterSection /></Router>, document.getElementById('footerSection'));

registerServiceWorker();
