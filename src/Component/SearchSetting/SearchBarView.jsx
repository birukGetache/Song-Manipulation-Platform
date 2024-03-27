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
`

const SearchBar = styled.input`
  padding: 1rem 1rem 1rem 3.5rem;
  width: 100%;
`

export default SearchBarView;