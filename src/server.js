import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import express from 'express';
import { render } from '@jaredpalmer/after';
import routes from 'app/routes';
import globalStyling from 'app/styles/global';
import createStore from 'app/store';
import theme from 'app/styles/theme';
import Document from './Document';

globalStyling();

// eslint-disable-next-line import/no-dynamic-require
const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', async (req, res) => {
    // Create a new Redux store instance
    const initialStore = {};
    const store = createStore(initialStore);

    // Grab the initial state from our Redux store
    const serverState = store.getState();

    const customRenderer = (node) => {
      const App = (
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            {node}
          </ThemeProvider>
        </Provider>
      );

      return {
        html: renderToString(App),
        serverState,
      };
    };

    try {
      const html = await render({
        req,
        res,
        routes,
        assets,
        document: Document,
        customRenderer,
      });
      res.send(html);
    } catch (error) {
      res.json(error);
    }
  });

export default server;
