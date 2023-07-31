import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import {BrowserRouter} from 'react-router-dom';
import './assets/css/styles.css';
import './assets/css/reset.css';
import './assets/css/responsive.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
