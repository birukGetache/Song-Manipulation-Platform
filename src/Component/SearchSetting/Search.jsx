import styled from '@emotion/styled';
import { HiOutlineCog } from 'react-icons/hi';
import SearchBarView from './SearchBarView';
import NotificationsIcon from '@mui/icons-material/Notifications';
const MainSearch= styled.div`
padding-top:40px;
display:flex;
`
const Setting= styled(HiOutlineCog)`
font-size:30px;
margin-top:15px;
margin-left:45px;`
const Notifications= styled(NotificationsIcon)`
font-size:30px;
margin-top:15px;
margin-left:45px;
margin-right:45px;
`
const Search = ()=>{
    return(
        <>
        <MainSearch>
        <SearchBarView/><Setting></Setting><Notifications></Notifications>
        </MainSearch>
        </>
)
}
export default Search;