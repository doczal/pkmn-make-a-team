import React from 'react';
import styled from 'styled-components';

import Layout from './styles/Layout';
import Header from './Header';
import Grid from './styles/Grid';
import { colors, mediaQueries } from './styles/styledVars';

const App = () => (
  <React.Fragment>
    <Header />
    <Layout>Content</Layout>
  </React.Fragment>
);

export default App;
