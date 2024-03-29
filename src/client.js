import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { ensureReady, After } from '@jaredpalmer/after';
import createStore from 'app/store';
import routes from 'app/routes';
import theme from 'app/styles/theme';

// eslint-disable-next-line no-underscore-dangle
const store = createStore(window.__PRELOADED_STATE__);

ensureReady(routes).then(data => hydrate(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <After data={data} routes={routes} />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
));

if (module.hot) {
  module.hot.accept();
}
