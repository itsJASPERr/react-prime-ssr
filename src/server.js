import express from 'express';
import { render } from '@jaredpalmer/after';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import createStore from 'app/store';
import routes from 'app/routes';
import globalStyling from 'styles/global';
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

    // Render the component to a string
    const markup = renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    );
    
    try {
      const html = await render({
        req,
        res,
        routes,
        assets,
        document: Document,
        // Anything else you add here will be made available
        // within getInitialProps(ctx)
        // e.g a redux store...
        customThing: 'thing',
      });
      res.send(html);
    } catch (error) {
      res.json(error);
    }
  });

export default server;
