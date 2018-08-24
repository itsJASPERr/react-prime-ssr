import React from 'react';
import PT from 'prop-types';
import { After } from '@jaredpalmer/after';
import routes from 'app/routes';

const App = ({ data }) => (
  <After data={data} routes={routes} />
);

App.propTypes = {
  data: PT.any,
};

export default App;
