import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledRatioBox = styled.div`
  padding-top: 100%;
  position: relative;
  & > * {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const AspRatioBox = ({ children }) => {
  return <StyledRatioBox>{children}</StyledRatioBox>;
};

AspRatioBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AspRatioBox;
