import './assets/css/tailwind.output.css';

import { Suspense } from 'react';
import ReactDOM from 'react-dom';

import { Windmill } from '@windmill/react-ui';

import App from './App';
import ThemedSuspense from './components/ThemedSuspense';
import { SidebarProvider } from './context/SidebarContext';
import * as serviceWorker from './serviceWorker';

// if (process.env.NODE_ENV !== 'production') {
//   const axe = require('react-axe')
//   axe(React, ReactDOM, 1000)
// }

ReactDOM.render(
    <SidebarProvider>

      <Suspense fallback={<ThemedSuspense />}>
        <Windmill usePreferences>
          <App />
        </Windmill>
      </Suspense>

    </SidebarProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
