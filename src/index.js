import React from 'react';
import ReactDOM from 'react-dom';
import { Normalize } from 'styled-normalize';
import GlobalStyle from 'components/styles/GlobalStyle';
import App from 'components/App';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const Root = () => (
  <React.Fragment>
    <Normalize />
    <GlobalStyle />
    <App />
  </React.Fragment>
);

ReactDOM.render(<Root />, document.getElementById('root'));
