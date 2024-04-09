
import img from "../../assets/addis.svg";
import { MdSkipPrevious, MdSkipNext } from 'react-icons/md';
import { MdPlayArrow, MdPause } from 'react-icons/md'; // Import MdPause for pausing the audio
import {FaLine} from 'react-icons/fa';
import styled from '@emotion/styled';
import audioFile from "../../assets/a.mp3"; // Import your audio file
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import { mdiHeart } from '@mdi/react';
import { MdRepeat } from 'react-icons/md';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
const Image= styled.img`
width:100%;
height:100%;
object-fit:cover;
`

const Audio = styled.audio`
`
const Des = styled.p`
padding-top:0;
margin-top:0;
`
const Title = styled.p`
font-family:"Teko",sans-serif;
padding-top:0;
margin-top:0;
font-size:20px;
margin-bottom:2px;
padding-bottom:0;
`
const Artist =styled.p`
font-family:"Teko",sans-serif;
padding-top:0;
margin-top:0;
font-size:15px;
margin-bottom:2px;
padding-bottom:0;
font-weight:lighter;
`
const Main= styled.div`
display:flex;
margin-top:15px;
justify-content:space-between;
`
const ImageContainer =styled.div`
width:30px;
height:30px;
border-radius:50%;
overflow:hidden;
`
const Play =()=>{
    const [isPlaying, setIsPlaying] = useState(false);
    const fileName = useSelector((state) => state.topMusic.fileName);
    const handleTogglePlay = () => {
      setIsPlaying(!isPlaying);
    };
   return(
    <Main>
         <ImageContainer> <Image src={img} alt="these is Image to play"></Image></ImageContainer> <Des><Title>Lorem</Title><Artist>Artist</Artist></Des>
          <div>
      <Audio controls={false} autoPlay={isPlaying} loop>
        <source src={`C:/Users/User/Documents/Songs/song/src/assets/${fileName}`} type="audio/mpeg" />
        Your browser does not support the audio element.
      </Audio>
      <div>
        <MdSkipPrevious />
        {isPlaying ? (
          <MdPause onClick={handleTogglePlay} /> // Display pause icon when audio is playing
        ) : (
          <MdPlayArrow onClick={handleTogglePlay} /> // Display play icon when audio is paused
        )}
        <MdSkipNext />
        <FaLine></FaLine>
      </div>
    </div>
    <div>
      <svg viewBox="0 0 24 24" width="24" height="24" fill="red">
        <path d={mdiHeart} />
      </svg>
    </div>
    <PlaylistPlayIcon></PlaylistPlayIcon>
    <MdRepeat></MdRepeat>
    </Main>
  
   )
}
export default Play;