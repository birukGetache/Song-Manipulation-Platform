import styled from '@emotion/styled';
import img1 from '../../assets/Auto.jpg';
import img2 from '../../assets/cartoon.webp';
import img3 from '../../assets/crystal-ball.jpg';
import img4 from '../../assets/Of2w5.jpg';
import img5 from '../../assets/R (1).jpg';
import img6 from '../../assets/R.jpg';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../Firebase';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMusicFiles } from './musicSlice';
const MusicList = styled.div`
  display: flex;
  width: 800px;
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
  grid-template-columns:1fr 15fr 1fr;
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
    height:35%;
    margin-top:5%;
`;

const MusicCard = styled.span`
  width: 180px;
  height: 180px;
  padding: 20px;
`;

const Adition = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 10px;
  flex: none;
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

const RecommendAlbum = () => {
  const dispatch = useDispatch();
  const musicFiles = useSelector((state) => state.Recomended.musicFiles); 
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

  return (
    <>
      <Musics>
        <P>Recommended Album</P>
        <Container>
          <ArrowCont onClick={handleScrollLeft}>
            <Arrow />
          </ArrowCont>
          <MusicList ref={musicListRef}>
          <>
          {Array.from({ length: Math.ceil(musicFiles.length / 4) }).map((_, batchIndex) => (
  <Adition key={batchIndex}>
    {musicFiles.slice(batchIndex * 4, (batchIndex + 1) * 4).map((fileName, index) => (
      <MusicCard key={index}>
        <Image src={img1} alt="image for music" />
        <Title>{fileName.replace(/\.[^/.]+$/, '')}</Title>
      </MusicCard>
    ))}
  </Adition>
))}

</>
          </MusicList>
          <ArrowCont onClick={handleScrollRight}>
            <ArrowSecond />
          </ArrowCont>
        </Container>
      </Musics>
    </>
  );
};

export default RecommendAlbum;

