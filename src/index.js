import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/bootstrap.css';
import './CSS/ViStyles.css';
import './CSS/ViRecurring.css';
// import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
