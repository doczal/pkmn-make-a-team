import React from 'react';
import styled from 'styled-components';
import { colors, zindex, shadows } from './styles/styledVars';

const StyledHeader = styled.header`
  background: ${colors.white};
  padding: 1rem;
  z-index: ${zindex.z10};
  width: 100%;
  box-shadow: ${shadows.default};
`;

const Header = () => {
  return <StyledHeader>PKMN</StyledHeader>;
};

export default Header;
