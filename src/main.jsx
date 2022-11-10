import React from 'react';
import ReactDOM from 'react-dom/client';

import settingsImgURL from './assets/icons/settings.png';

import { App } from './components/app';
import { PomodoroProvider } from './provider/PomodoroSettings';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <PomodoroProvider>
      <App />
    </PomodoroProvider>
  </>
);
