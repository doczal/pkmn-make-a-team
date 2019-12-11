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

const PokeList = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <StyledList>
      <h2>Pick your Pokemon!</h2>
      <div className="overflow-wrapper">
        <FlexContainer flexWrap="wrap">
          {pokemon.map((pkmn, idx) => (
            <PokeSlot
              key={idx}
              pokemon={{ name: pkmn.name, img: `${pkmn.name}.png` }}
              bgColor={colors.smoke}
            />
          ))}
        </FlexContainer>
      </div>
    </StyledList>
  );
};

export default PokeList;
