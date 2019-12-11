import React from 'react';
import styled from 'styled-components';

import PokeTeam from './PokeTeam';
import PokeList from './PokeList';
import Layout from './styles/Layout';
import Header from './Header';
import Grid from './styles/Grid';
import { colors, mediaQueries } from './styles/styledVars';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const App = () => (
  <AppContainer>
    <Header />
    <Layout>
      <PokeTeam />
      <PokeList />
    </Layout>
  </AppContainer>
);

export default App;
