import '@objectiv/developer-tools';
import { ObjectivProvider, ReactTracker } from "@objectiv/tracker-react";
import { DebugTransport } from "@objectiv/transport-debug";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const tracker = new ReactTracker({
  applicationId: 'objectiv-demo-app',
  transport: new DebugTransport(),
  active: false
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ObjectivProvider tracker={tracker} options={{ trackApplicationLoaded: false }}>
      <App />
    </ObjectivProvider>
  </React.StrictMode>
)
