import styled from '@emotion/styled';
import { HiHome } from 'react-icons/hi';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import { BiUser } from 'react-icons/bi';
import { FaMusic } from 'react-icons/fa';
const Browe= styled.p`
font-size:18px;
font-family: "Teko", sans-serif;
padding-left: 20px;
margin-bottom:3px;
`
const Des = styled.p`
font-size: 18px;
font-family: "Teko", sans-serif;
margin-top:0;
padding-left:10px;
font-weight:lighter;
`
const Home= styled(HiHome)`
margin-left:-30px;
float:left;
font-size:5px;
padding-top:0px;
padding-bottom:0px;
color:black;
`
const PlayStore= styled(PlaylistPlayIcon)`
margin-left:-30px;
float:left;
padding-top:0px;
padding-bottom:0px;
color:black;
`
const UserIcon= styled(BiUser)`
margin-left:-30px;
float:left;
padding-top:0px;
padding-bottom:0px;
color:black;
stroke-width:1;
`
const Album= styled(FaMusic)`
margin-left:-30px;
float:left;
padding-top:0px;
padding-bottom:0px;
color:black;
stroke-width:1;
`
const Icons = styled.div`
 display:flex;
 justify-content:center;
 `
const Broswer =()=>{
    return(
    <>
    <Browe>Browe</Browe>
   <Icons><Album size={13}></Album><Des>Album</Des></Icons> 
   <Icons> <UserIcon size={13} ></UserIcon><Des>Artist</Des></Icons>
   <Icons> <Home size={13}/><Des>Home</Des></Icons>
   <Icons> <PlayStore size={13}></PlayStore><Des>play list</Des></Icons>
    
    </>
        
    )
  
}
export default Broswer;