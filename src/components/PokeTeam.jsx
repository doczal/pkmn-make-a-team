import React from 'react';
import styled from 'styled-components';
import { colors, shadows } from './styles/styledVars';

const StyledPokeTeam = styled.div`
  background: ${colors.white};
  border-radius: 8px;
  width: 100%;
  padding: 1rem;
  box-shadow: ${shadows.default};
`;

const PokeTeam = () => {
  return <StyledPokeTeam>PokeTeam</StyledPokeTeam>;
};

export default PokeTeam;
