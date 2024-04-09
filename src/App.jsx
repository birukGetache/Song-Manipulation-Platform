import styled from '@emotion/styled';
import './App.css'
import SideBar from './Component/Bar/SideBar'
import Search from './Component/SearchSetting/Search';
import MusicTop from './Component/TopMusic/MusicTop';
import Popular from  './Component/Popular/Popular';
import RecommendAlbum from './Component/Recomended/RecommendAlbum';
import Play from './Component/Play/Play';
import { Provider } from 'react-redux';
import store from './store';
 const SideBarMain= styled(SideBar)`
  float:right;
  `
  const SearchBar = styled(Search)`
  display:inline;
  `
  const Main = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 1fr) 3fr;
`;

  const SpecialMusic = styled.div`
  display:flex;
  grid-template-columns:auto auto;`
function App() {

  return (
    <>
      <Provider store={store}>
    <Main>
      <SideBarMain></SideBarMain>
      <div>
      <SearchBar></SearchBar>
      <MusicTop></MusicTop>
      <SpecialMusic>
        <Popular></Popular>
        <RecommendAlbum></RecommendAlbum>
      </SpecialMusic>
      </div>
   
    </Main>
     <Play></Play>
     </Provider>
    </>
  )
}

export default App
