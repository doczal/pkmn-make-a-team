import React from 'react';
import styled from 'styled-components';
import { colors } from './styles/styledVars';

const StyledHeader = styled.header`
  background: ${colors.white};
  padding: 1rem;
`;

const Header = () => {
  return <StyledHeader>PKMN</StyledHeader>;
};

export default Header;
