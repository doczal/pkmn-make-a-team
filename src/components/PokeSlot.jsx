import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import AspRatioBox from 'components/styles/AspRatioBox';
import { colors } from './styles/styledVars';

const StyledSlot = styled.div`
  flex: 0 0 12.5%;
  padding: 0.25rem;
`;

const EmptySlot = styled.div`
  border-radius: 8px;
  border: 2px solid ${colors.lite_02};
`;

const Slot = styled.div`
  border-radius: 8px;
  background-color: ${(props) => props.bgColor};
`;

const PokeSlot = ({ pokemon, bgColor }) => {
  return (
    <StyledSlot>
      <AspRatioBox>
        {pokemon ? <Slot bgColor={bgColor} /> : <EmptySlot />}
      </AspRatioBox>
    </StyledSlot>
  );
};

PokeSlot.defaultProps = {
  bgColor: 'transparent',
  pokemon: null,
};

PokeSlot.propTypes = {
  bgColor: PropTypes.string,
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    img: PropTypes.string,
  }),
};

export default PokeSlot;
