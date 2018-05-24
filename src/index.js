import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/bootstrap.css';
import './CSS/ViStyles.css';
import './CSS/ViRecurring.css';
import Home from './Home/Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
