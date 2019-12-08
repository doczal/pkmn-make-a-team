import React from 'react';
import Grid from './styles/Grid';
import styled from 'styled-components';
import {colors, mediaQueries} from './styles/styledVars';

const StyledApp = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.plain_00};
  overflow: hidden;

  .inner {
    position: absolute;
    height: 100%;
    left: 50%;
    transform: translateX(-50%) skew(-20deg);

    &.first {
      background: ${colors.red_00};
      width: 130%;

      @media ${mediaQueries.md} {
        width: 114%;
      }
    }

    &.second {
      background: ${colors.red_01};
      width: 80%;

      @media ${mediaQueries.md} {
        width: 75%;
      }
    }
  }
`;

const App = () => (
  <StyledApp>
    <div className="inner first" />
    <div className="inner second" />
  </StyledApp>
);

export default App;
