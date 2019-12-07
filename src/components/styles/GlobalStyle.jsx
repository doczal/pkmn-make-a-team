import { createGlobalStyle } from 'styled-components';
import SulphurPoint from 'assets/fonts/SulphurPoint-Regular.ttf';

const GlobalStyle = createGlobalStyle`
  body {
    @font-face {
      font-family: 'Sulphur Point';
      src: url(${SulphurPoint}) format('truetype');
      font-weight: normal;
    }
    font-family: 'Sulphur Point';
  }
`;

export default GlobalStyle;
