import React from 'react';
import ReactDOM from 'react-dom';
// import './CSS/bootstrap.css';
// import './CSS/ViStyles.css';
// import './CSS/ViRecurring.css';
import GithubRouter from './GithubRouter';
import FooterSection from './FooterSection.js'
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(<Router basename={process.env.PUBLIC_URL}><GithubRouter /></Router>, document.getElementById('root'));
ReactDOM.render(<Router><FooterSection /></Router>, document.getElementById('footerSection'));
