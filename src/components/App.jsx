import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { pokeApi } from 'api';
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

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    const getPokemon = async () => {
      const res = await pokeApi.get('/pokemon');
      setPokemon(res.data.results);
    };
    // To simulate fetching delay
    setTimeout(() => getPokemon(), 3000);
  }, []);
  return (
    <AppContainer>
      <Header />
      <Layout>
        <PokeTeam />
        <PokeList pokemon={pokemon} />
      </Layout>
    </AppContainer>
  );
};

export default App;
