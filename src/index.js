import React from 'react';
import ReactDOM from 'react-dom';
import GithubRouter from './GithubRouter';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(<Router><GithubRouter /></Router>, document.getElementById('root'));
