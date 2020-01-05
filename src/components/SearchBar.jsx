import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors } from './styles/styledVars';

const StyledSearch = styled.div`
  overflow: hidden;
  border-radius: 8px;
  input {
    padding: 0.5rem;
    border: none;
    border-radius: 8px;
    width: 100%;
    border: 1px solid transparent;

    &:focus {
      border: 1px solid ${colors.blue_00};
    }
  }
`;

const SearchBar = ({ value, onChange, placeholder }) => {
  return (
    <StyledSearch>
      <input
        id="search"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </StyledSearch>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

SearchBar.defaultProps = {
  placeholder: 'Search',
};

export default SearchBar;
