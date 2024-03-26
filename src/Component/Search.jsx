import styled from '@emotion/styled';
const SearchBar= styled.input`
height:35px;
width:40%;
border-radius:10px;
display:inline-block;
`
const Search = ()=>{
    return(
<SearchBar type="text" placeholder="Search musics"/>)
}
export default Search;