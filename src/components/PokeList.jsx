import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from 'components/styles/styledVars';

import SearchBar from 'components/SearchBar';
import PokeSlot from 'components/PokeSlot';
import FlexContainer from 'components/styles/FlexContainer';

const StyledList = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .overflow-wrapper {
    overflow-y: auto;
    overflow-x: hidden;
    margin-top: 1rem;
  }
`;

const PokeList = ({ pokemon }) => {
  const [searchVal, setSearchVal] = useState('');
  const filteredPokemon =
    searchVal !== ''
      ? pokemon.filter((pkmn) =>
          pkmn.name.toLowerCase().includes(searchVal.toLowerCase()),
        )
      : pokemon;

  const handleChange = (e) => setSearchVal(e.target.value);

  return (
    <StyledList>
      <h2>Pick your Pokemon!</h2>
      <SearchBar
        value={searchVal}
        onChange={handleChange}
        placeholder="Search Pokemon"
      />
      <div className="overflow-wrapper">
        <FlexContainer flexWrap="wrap" marginOffset="0 -0.25rem">
          {filteredPokemon.map((pkmn, idx) => (
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
