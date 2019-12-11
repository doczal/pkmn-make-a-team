import React from 'react';
import styled from 'styled-components';

import FlexContainer from 'components/styles/FlexContainer';
import PokeSlot from 'components/PokeSlot';
import { colors, shadows } from './styles/styledVars';

const StyledPokeTeam = styled.div`
  background: ${colors.white};
  border-radius: 8px;
  width: 100%;
  padding: 1rem;
  box-shadow: ${shadows.default};

  .item {
    width: 10%;
    padding: 1rem;
    background: aquamarine;
  }
`;

const PokeTeam = () => {
  return (
    <StyledPokeTeam>
      <FlexContainer flexWrap={'wrap'} marginOffset={'-0.25rem'}>
        {[...Array(8)].map((_, idx) => (
          <PokeSlot key={idx} />
        ))}
      </FlexContainer>
    </StyledPokeTeam>
  );
};

export default PokeTeam;
