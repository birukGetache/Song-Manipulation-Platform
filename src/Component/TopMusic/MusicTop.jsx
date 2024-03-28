import styled from '@emotion/styled';
import img1 from '../../assets/Auto.jpg';
import img2 from '../../assets/cartoon.webp';
import img3 from '../../assets/crystal-ball.jpg';
import img4 from '../../assets/Of2w5.jpg';
import img5 from '../../assets/R (1).jpg';
import img6 from '../../assets/R.jpg';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useState, useRef, useEffect } from 'react';

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

const MusicCard = styled.span`
  width: 180px;
  height: 180px;
  grid-gap: 20px;
  padding: 20px;
`;

const Addition = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 10px;
  flex: none;
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
line-height: 45px;//to center vertically same with height
background-color:#F8EEC9;
margin-left:300px;
margin-right:300px;
height:45px;
justify-content:center;
border-radius: 0 0 30px 30px;
margin-bottom:-9px;
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
font-family:"Teko" , sans-serif `
const Container= styled.div`
display:grid;
grid-template-columns:1fr 7fr 1fr;
justify-content:center;
align-items:center;
padding-top:0;
margin-top:0;
`
const ArrowCont = styled.div`
width:50px;
height:50px;
background-color:#cfd8ed;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
`
const Musics = styled.div`
background-color:white;
border-radius:10px;
border-shadow:1px;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);`
const MusicTop = () => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const musicListRef = useRef(null);

  useEffect(() => {
    if (musicListRef.current) {
      const musicListWidth = musicListRef.current.scrollWidth;
      const musicListContainerWidth = musicListRef.current.clientWidth;
      if (musicListWidth > musicListContainerWidth) {
        setScrollOffset(0);
      }
    }
  }, [scrollOffset]);

  const handleMoveLeft = () => {
    if (musicListRef.current) {
      musicListRef.current.scrollLeft -= 1000; // Scroll 900px to the left
    }
  };
  
  const handleMoveRight = () => {
    if (musicListRef.current) {
      musicListRef.current.scrollLeft += 1000; // Scroll 900px to the right
    }
  };
  

  const rotation = scrollOffset * 0.1; // Adjust the rotation factor as needed

  return (
    <>
    <Musics>
  
        <P>Top Music</P>
      <Container>
        <ArrowCont>
           <Arrow onClick={handleMoveLeft} />
        </ArrowCont>
    
      <MusicList rotation={rotation} ref={musicListRef}>
        <Addition>
          <MusicCard>
            <Image src={img6} alt="image for music" />
            <Title>titile</Title>
          </MusicCard>
          <MusicCard>
            <Image src={img1} alt="image for music" />
            <Title>titile</Title>
          </MusicCard>

          <MusicCard>
            <Image src={img2} alt="image for music" />
            <Title>titile</Title>
          </MusicCard>
          <MusicCard>
            <Image src={img2} alt="image for music" />
            <Title>titile</Title>
          </MusicCard>
          <MusicCard>
            <Image src={img2} alt="image for music" />
            <Title>titile</Title>
          </MusicCard>
        </Addition>
        <Addition>
          <MusicCard>
            <Image src={img3} alt="image for music" />
            <Title>titile</Title>
          </MusicCard>
          <MusicCard>
            <Image src={img4} alt="image for music" />
            <Title>titile</Title>
          </MusicCard>
          <MusicCard>
            <Image src={img5} alt="image for music" />
            <Title>titile</Title>
          </MusicCard>
          <MusicCard>
            <Image src={img5} alt="image for music" />
            <Title>titile</Title>
          </MusicCard>
        </Addition>
      </MusicList>
      <ArrowCont>
      <ArrowSecond onClick={handleMoveRight} />
      </ArrowCont>
      </Container>
      </Musics>
    </>
  );
};

export default MusicTop;
