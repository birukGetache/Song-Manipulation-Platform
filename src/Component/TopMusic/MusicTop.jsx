import styled from '@emotion/styled';
import img1 from '../../assets/Auto.jpg';
import img2 from '../../assets/cartoon.webp';
import img3 from '../../assets/crystal-ball.jpg';
import img4 from '../../assets/Of2w5.jpg';
import img5 from '../../assets/R (1).jpg';
import img6 from '../../assets/R.jpg';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../Firebase';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useState, useRef, useEffect } from 'react';
import { setFileName } from './MusicSlice';
// MusicTop.js
import { useDispatch, useSelector } from 'react-redux';
import { fetchMusicFiles } from './MusicSlice';

const MusicList = styled.div`
  display: flex;
  width: 1000px;
  overflow-x: scroll;
  transform: rotate(${(props) => props.rotation}deg);
  transition: transform 0.5s;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Arrow = styled(IoIosArrowBack)`
  cursor: pointer;
  strike-width:200;
  font-size:30px;
  color:black;
  font-weight:lighter;
`;

const ArrowSecond = styled(IoIosArrowForward)`
  cursor: pointer;
  strike-width:200;
  font-size:30px;
  color:black;
  font-weight:lighter;
`;

const P = styled.p`
  font-family: "Teko", sans-serif;
  font-size: 20px;
  margin-top: 0;
  text-align:center;
  line-height: 45px;
  background-color:#F8EEC9;
  margin-left:300px;
  margin-right:300px;
  height:45px;
  justify-content:center;
  border-radius: 0 0 30px 30px;
  margin-bottom:-9px;
`;

const Container= styled.div`
  display:grid;
  grid-template-columns:1fr 7fr 1fr;
  justify-content:center;
  align-items:center;
  padding-top:0;
  margin-top:0;
`;

const ArrowCont = styled.div`
  width:50px;
  height:50px;
  background-color:#cfd8ed;
  border-radius:50%;
  display:flex;
  justify-content:center;
  align-items:center;
`;

const Musics = styled.div`
  background-color:white;
  border-radius:10px;
  border-shadow:1px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  margin-left:10px;
  height:35%;
`;

const MusicCard = styled.span`
  width: 180px;
  height: 180px;
  grid-gap: 20px;
  padding: 20px;
`;

const Adition = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 10px;
  flex: none;
  margin-left:15px;
`;

const Image = styled.img`
  width: 100%;
  filter: grayscale(100%);
  transition: transform 0.5s;
  height:100%;
  object-fit:cover;
  overflow:hidden;
  border-radius:4px;
  :hover {
    filter: grayscale(0);
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const Title= styled.p`
  padding-top:0;
  margin-top:0;
  font-family:"Teko" , sans-serif;
`;

const MusicTop = () => {
  const dispatch = useDispatch();
  const musicFiles = useSelector((state) => state.topMusic.musicFiles); 
  console.log(musicFiles)
  const musicStatus = useSelector((state) => state.music.status); 
  const musicListRef = useRef(null);

  useEffect(() => {
    dispatch(fetchMusicFiles());
  }, []);

  const handleScrollLeft = () => {
    if (musicListRef.current) {
      musicListRef.current.scrollLeft -= 200; // Adjust the scroll distance as needed
    }
  };

  const handleScrollRight = () => {
    if (musicListRef.current) {
      musicListRef.current.scrollLeft += 200; // Adjust the scroll distance as needed
    }
  };

  // Add this conditional rendering check
  // if (!musicFiles || musicFiles.length === 0) {
  if (musicStatus === 'loading' || musicStatus=="idle") {
    return <div>Loading music files...</div>;
  }
  const handleCardClick = (fileName) => {
    dispatch(setFileName(fileName)); // Dispatch setFileName action with the file name
    console.log(fileName)
    onClick(); // Call the onClick prop (if provided) to handle other actions like playing the music
  };
  return (
    <>
      <Musics>
        <P>Top Music</P>
        <Container>
          <ArrowCont onClick={handleScrollLeft}>
            <Arrow />
          </ArrowCont>
          <MusicList ref={musicListRef}>
            {musicFiles.map((fileName, index) => (
              <MusicCard key={index} onClick={() => handleCardClick(fileName)} >
                <Image src={img1} alt="image for music" />
                <Title>{fileName.replace(/\.[^/.]+$/, '')}</Title>
              </MusicCard>
            ))}
          </MusicList>
          <ArrowCont onClick={handleScrollRight}>
            <ArrowSecond />
          </ArrowCont>
        </Container>
      </Musics>
    </>
  );
};
export default MusicTop;