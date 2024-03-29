import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import { AfterRoot, AfterData } from '@jaredpalmer/after';

export default class Document extends React.Component {
  static async getInitialProps({ assets, data, renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = await renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();

    return { assets, data, ...page, styleTags };
  }

  render() {
    const { helmet, assets, data, styleTags, serverState } = this.props;
    // get attributes from React Helmet
    const htmlAttrs = helmet.htmlAttributes.toComponent();
    const bodyAttrs = helmet.bodyAttributes.toComponent();

    /* eslint-disable no-underscore-dangle, jsx-a11y/html-has-lang, react/no-danger */
    return (
      <html {...htmlAttrs}>
        <head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta charSet="utf-8" />
          <title>React Prime AfterJS</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {helmet.title.toComponent()}
          {helmet.meta.toComponent()}
          {helmet.link.toComponent()}
          {styleTags}
        </head>
        <body {...bodyAttrs}>
          <AfterRoot />
          <AfterData data={data} />
          <span
            dangerouslySetInnerHTML={{
              __html: `<script>window.__PRELOADED_STATE__ = ${JSON.stringify(serverState)}</script>`,
            }}
          />
          <script
            type="text/javascript"
            src={assets.client.js}
            defer
            crossOrigin="anonymous"
          />
        </body>
      </html>
    );
  }
}
