import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ensureReady } from '@jaredpalmer/after';
import routes from './app/routes';
import App from 'components/App';

ensureReady(routes).then(data => hydrate(
  <BrowserRouter>
    <App data={data} />
  </BrowserRouter>,
  document.getElementById('root'),
));

if (module.hot) {
  module.hot.accept();
}
