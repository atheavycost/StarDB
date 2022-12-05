import 'bootswatch/dist/slate/bootstrap.min.css'; 
import React from 'react';

import {createRoot} from 'react-dom/client';

import App from './components/app/index.js';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);