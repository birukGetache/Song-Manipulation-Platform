import React from "react";

// libaries
import { IoMdSearch } from 'react-icons/io';
import styled from '@emotion/styled';

const SearchBarView = () => {
  return (
    <Search>
      <IoMdSearch style={{marginLeft: "1rem", position: "absolute"}} color="#623CEA" size="1.5em" />
      <SearchBar 
        id="search-bar" 
        type="text"
        placeholder="Search">
      </SearchBar>
    </Search>
  )
}

const Search = styled.div`
  padding: .5rem;
  position: relative;
  display: flex;  
  align-items: center;
  width: 100%;
  border:none;
  height:50px;
    &:focus {
    border:none; /* Set border to transparent when focused */
  }
`

const SearchBar = styled.input`
  padding: 1rem 1rem 1rem 3.5rem;
  font-family: "Teko" ,sans- serifs;
  font-size:19px;
  width: 100%;
  border-radius: 50px;
  height: 40px;
  border: none;
  outline: none; /* Remove default focus outline */
  transition: border-color 0.2s ease-in-out; /* Smooth transition for border color change */

  &:focus {
    border: none; /* Set border to none when focused */
    box-shadow: none; /* Optionally, remove any box shadow when focused */
  }
`;


export default SearchBarView;