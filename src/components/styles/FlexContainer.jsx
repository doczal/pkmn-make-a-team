import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledFlex = styled.div`
  display: flex;
  flex-wrap: ${(props) => props.flexWrap || 'no-wrap'};
  margin: ${(props) => props.marginOffset || 0};
`;

const FlexContainer = ({ children, ...props }) => (
  <StyledFlex {...props}>{children}</StyledFlex>
);

FlexContainer.propTypes = {
  children: PropTypes.node.isRequired,
  flexWrap: PropTypes.string,
  marginOffset: PropTypes.string,
};

export default FlexContainer;
