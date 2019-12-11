import { createGlobalStyle } from 'styled-components';
import { colors } from 'components/styles/styledVars';
import SulphurPoint from 'assets/fonts/SulphurPoint-Regular.ttf';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;

    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${colors.lite_02};
    }
  }
  html {
    height: 100%;
  }
  body {
    height: 100%;
    display: flex;
    overflow: hidden;

    @font-face {
      font-family: 'Sulphur Point';
      src: url(${SulphurPoint}) format('truetype');
      font-weight: normal;
    }
    font-family: 'Sulphur Point';

    scrollbar-color: ${colors.lite_02};
    scrollbar-width: 4px;
  }
  #root {
    position: relative;
    width: 100%;
    overflow-x: hidden;
  }
`;

export default GlobalStyle;
