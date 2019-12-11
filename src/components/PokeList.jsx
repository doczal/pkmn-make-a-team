import React from 'react';
import styled from 'styled-components';
import { colors } from 'components/styles/styledVars';

import PokeSlot from 'components/PokeSlot';
import FlexContainer from 'components/styles/FlexContainer';

const StyledList = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .overflow-wrapper {
    overflow-y: scroll;
  }
`;

const PokeList = () => {
  return (
    <StyledList>
      <h2>Pick your Pokemon!</h2>
      <div className="overflow-wrapper">
        <FlexContainer flexWrap="wrap">
          {[...Array(120)].map((_, idx) => (
            <PokeSlot
              key={idx}
              pokemon={{ name: 'Pikachu', img: '' }}
              bgColor={colors.smoke}
            />
          ))}
        </FlexContainer>
      </div>
    </StyledList>
  );
};

export default PokeList;
