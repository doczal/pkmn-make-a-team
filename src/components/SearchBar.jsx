import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import searchIcon from 'assets/images/search.svg';
import { colors } from './styles/styledVars';

const StyledSearch = styled.div`
  overflow: hidden;
  border-radius: 8px;
  display: flex;
  position: relative;

  input {
    padding: 0.5rem;
    border: none;
    flex: 1 1 100%;
    border: 1px solid transparent;
    border-radius: 8px 0 0 8px;

    &:focus {
      border: 1px solid ${colors.blue_00};
      border-right: none;

      & + .searchIcon {
        border: 1px solid ${colors.blue_00};
        border-left: none;
      }
    }
  }

  .searchIcon {
    position: relative;
    background: white;
    flex: 0 0 auto;
    display: flex;
    padding: 0 0.5rem;
    align-items: center;
    border-radius: 0px 8px 8px 0px;
    border: 1px solid transparent;

    img {
      width: 20px;
      height: 20px;
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
      <div className="searchIcon">
        <img src={searchIcon} alt="Search" />
      </div>
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
