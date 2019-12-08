import { createGlobalStyle } from 'styled-components';
import SulphurPoint from 'assets/fonts/SulphurPoint-Regular.ttf';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    min-height: 100%;
    display: flex;
    overflow: hidden;

    @font-face {
      font-family: 'Sulphur Point';
      src: url(${SulphurPoint}) format('truetype');
      font-weight: normal;
    }
    font-family: 'Sulphur Point';
  }
  #root {
    position: relative;
    width: 100%;
    overflow-x: hidden;
  }
`;

export default GlobalStyle;
