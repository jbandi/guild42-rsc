import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './App'
import {clear} from 'suspend-react';

export function render() {
  console.log('Rendering on the server ...');
  clear(); // For the suspend demo we need to clear the cache: suspend-react is not meant to run on the server ...
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
  return { html }
}
