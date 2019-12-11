import React from 'react';
import styled from 'styled-components';
import stripes from 'assets/images/stripes.svg';

import { colors, gradients, mediaQueries } from './styledVars';

const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
  background: ${gradients.lite_blue_pink(-25)};
  overflow: hidden;
  display: grid;
  grid: auto-flow / 1fr 8fr 1fr;

  .pattern {
    background: url(${stripes}) center/100% no-repeat;
    position: relative;

    &.right {
      transform: scale(-1);
    }
  }

  .content {
    padding: 1.5rem;
  }
`;

const Layout = ({ children }) => (
  <StyledLayout>
    <div className="pattern" />
    <main className="content">{children}</main>
    <div className="pattern right" />
  </StyledLayout>
);

export default Layout;
