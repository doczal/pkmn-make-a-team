import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import AspRatioBox from 'components/styles/AspRatioBox';
import { colors } from './styles/styledVars';

const StyledSlot = styled.div`
  flex: 0 0 ${(props) => props.width};
  padding: 0.25rem;
`;

const EmptySlot = styled.div`
  border-radius: 8px;
  border: 2px solid ${colors.lite_02};
`;

const Slot = styled.div`
  border-radius: 8px;
  background-color: ${(props) => props.bgColor};

  img {
    position: absolute;
    width: 80%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const PokeSlot = ({ pokemon, bgColor, width }) => {
  return (
    <StyledSlot width={width}>
      <AspRatioBox>
        {pokemon ? (
          <Slot bgColor={bgColor}>
            <img src={`/sprites/${pokemon.img}`} alt="" />
          </Slot>
        ) : (
          <EmptySlot />
        )}
      </AspRatioBox>
    </StyledSlot>
  );
};

PokeSlot.defaultProps = {
  bgColor: 'transparent',
  pokemon: null,
  width: '12.5%',
};

PokeSlot.propTypes = {
  bgColor: PropTypes.string,
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    img: PropTypes.string,
  }),
  width: PropTypes.string,
};

export default PokeSlot;
