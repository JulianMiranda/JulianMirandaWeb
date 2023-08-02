import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import {BrowserRouter} from 'react-router-dom';
import './assets/css/reset.css';
import './assets/css/responsive.css';
import './assets/css/loader.css';
import './assets/css/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
