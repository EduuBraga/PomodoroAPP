import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './components/app';
import { GlobalStyles } from './styles/globalStyles/style';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <GlobalStyles />
  </>
);
