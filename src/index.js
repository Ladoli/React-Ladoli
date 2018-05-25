import React from 'react';
import ReactDOM from 'react-dom';
// import './CSS/bootstrap.css';
// import './CSS/ViStyles.css';
// import './CSS/ViRecurring.css';
import Home from './Home/Home';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(<Router basename={process.env.PUBLIC_URL}><Home /></Router>, document.getElementById('root'));

registerServiceWorker();
