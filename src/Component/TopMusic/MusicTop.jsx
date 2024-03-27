import styled from '@emotion/styled';
import img from '../../assets/react.svg';
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
  width: 900px;
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
  margin-right: 10px;
  grid-gap: 20px;
  padding: 20px;
`;

const Addition = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-gap: 20px;
  padding: 10px;
  flex: none;
`;

const Arrow = styled(IoIosArrowBack)`
  cursor: pointer;
`;

const ArrowSecond = styled(IoIosArrowForward)`
  cursor: pointer;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
`;

const P = styled.p`
  font-family: "Teko", sans-serif;
  font-size:20px;
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
      musicListRef.current.scrollLeft -= 900; // Scroll 900px to the left
    }
  };
  
  const handleMoveRight = () => {
    if (musicListRef.current) {
      musicListRef.current.scrollLeft += 900; // Scroll 900px to the right
    }
  };
  

  const rotation = scrollOffset * 0.1; // Adjust the rotation factor as needed

  return (
    <>
      <Head>
        <P>Top Music</P>
        <div>
          <Arrow onClick={handleMoveLeft} />
          <ArrowSecond onClick={handleMoveRight} />
        </div>
      </Head>
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
    </>
  );
};

export default MusicTop;
