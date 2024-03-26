import styled from '@emotion/styled';
import './App.css'
import SideBar from './Component/Bar/SideBar'
import Search from './Component/Search';
 const SideBarMain= styled(SideBar)`
  float:right;
  `
  const SearchBar = styled(Search)`
  display:inline;
  `
  const Main= styled.div`
display:grid;
grid-template-columns: 1fr 3fr;
  `
function App() {

  return (
    <>
    <Main>
      <SideBarMain></SideBarMain>
      <SearchBar></SearchBar>
    </Main>
      
    </>
  )
}

export default App
