import React from 'react';
import styled from 'styled-components';

import FlexContainer from 'components/styles/FlexContainer';
import PokeSlot from 'components/PokeSlot';
import { colors, shadows } from './styles/styledVars';

const StyledPokeTeam = styled.div`
  background: ${colors.white};
  border-radius: 8px;
  padding: 1rem;
  box-shadow: ${shadows.default};
  width: 80%;
  align-self: center;

  .item {
    width: 10%;
    padding: 1rem;
    background: aquamarine;
  }
`;

const PokeTeam = () => {
  return (
    <StyledPokeTeam>
      <FlexContainer marginOffset={'-0.25rem'}>
        {[...Array(6)].map((_, idx) => (
          <PokeSlot width="16.66%" key={idx} />
        ))}
      </FlexContainer>
    </StyledPokeTeam>
  );
};

export default PokeTeam;
