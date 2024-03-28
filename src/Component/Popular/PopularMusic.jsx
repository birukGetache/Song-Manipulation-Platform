import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { FaPlay, FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { RiDeleteBinLine } from 'react-icons/ri';
import img from "../../assets/R.jpg";
import { FaHeart } from 'react-icons/fa';

const H = styled.p`
  font-family: "Teko", sans-serif;
  font-size: 20px;
  text-align:center;
  margin-top:20px;
  border-radius:30px;
  background-color:#F8EEC9;
  margin-left:15px;
  margin-right:15px;
  `

const Main = styled.div`
  margin-left: 15px;
  max-height: 150px; /* Set a maximum height to enable scrolling */
  /*overflow-y: auto; /* Enable vertical scrolling */
  overflow-x: hidden; /* Hide horizontal scrollbar */
  scrollbar-width: thin; /* Width of the scrollbar */
  scrollbar-color: rgba(0, 0, 0, 0.3) transparent; /* Color of the scrollbar */*/
  &::-webkit-scrollbar {
    display: none;
  }

`;

const Music = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-gap: 7px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Profile = styled.div`
  width: 30px;
  height: 30px;
  margin-left: 15px;
  overflow: hidden;
  border-radius: 50%;
  margin-bottom: 5px;
  padding-top: 0;
  margin-top: 0;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Play = styled(FaPlay)``;

const Duration = styled.p`
  margin-top: 0;
  font-weight: lighter;
`;

const Title = styled.p`
  font-family: "Teko", sans-serif;
  font-size: 13px;
  margin-top: 0;
`;

const PopularMain = styled.div`
  margin-left: 6px;
  padding-top:5px;
  background-color:white;
  margin-right:5px;
  margin-top:20px;
  border-radius:30px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);

  
`;

const ScrollButton = styled.button`
  background-color: #cfd8ed;
  border: none;
  font-size: 24px;
  cursor: pointer;
  border-radius:50%;
 margin-left:auto;
 margin-right:auto;
`;
const Button = styled.div`
display:flex;
justiy-content:center;
`
const PopularMusic = () => {
  const mainRef = useRef(null);

  const handleScroll = (direction) => {
    const scrollAmount = direction === 'up' ? -100 : 100; // Adjust scroll amount as needed
    if (mainRef.current) {
      mainRef.current.scrollTop += scrollAmount;
    }
  };

  return (
    <>
      <PopularMain>
        <H>Popular</H>
        <Button>
        <ScrollButton onClick={() => handleScroll('up')}>
          <FaChevronUp />
        </ScrollButton>
        </Button>
       
        <Main ref={mainRef}>
          <Music>
          <Play />
<Profile><Image src={img} alt="profile" /></Profile>
<Title>Loremss.....</Title>
<RiDeleteBinLine/>
<FaHeart />
          <Play />
<Profile><Image src={img} alt="profile" /></Profile>
<Title>Loremss.....</Title>
<RiDeleteBinLine/>
<FaHeart />
          <Play />
<Profile><Image src={img} alt="profile" /></Profile>
<Title>Loremss.....</Title>
<RiDeleteBinLine/>
<FaHeart />
          <Play />
<Profile><Image src={img} alt="profile" /></Profile>
<Title>Loremss.....</Title>
<RiDeleteBinLine/>
<FaHeart />
          <Play />
<Profile><Image src={img} alt="profile" /></Profile>
<Title>Loremss.....</Title>
<RiDeleteBinLine/>
<FaHeart />
          <Play />
<Profile><Image src={img} alt="profile" /></Profile>
<Title>Loremss.....</Title>
<RiDeleteBinLine/>
<FaHeart />
          <Play />
<Profile><Image src={img} alt="profile" /></Profile>
<Title>Loremss.....</Title>
<RiDeleteBinLine/>
<FaHeart />
          <Play />
<Profile><Image src={img} alt="profile" /></Profile>
<Title>Loremss.....</Title>
<RiDeleteBinLine/>
<FaHeart />
          <Play />
<Profile><Image src={img} alt="profile" /></Profile>
<Title>Loremss.....</Title>
<RiDeleteBinLine/>
<FaHeart />
          <Play />
<Profile><Image src={img} alt="profile" /></Profile>
<Title>Loremss.....</Title>
<RiDeleteBinLine/>
<FaHeart />
          <Play />
<Profile><Image src={img} alt="profile" /></Profile>
<Title>Loremss.....</Title>
<RiDeleteBinLine/>
<FaHeart />
          <Play />
<Profile><Image src={img} alt="profile" /></Profile>
<Title>Loremss.....</Title>
<RiDeleteBinLine/>
<FaHeart />
          <Play />
<Profile><Image src={img} alt="profile" /></Profile>
<Title>Loremss.....</Title>
<RiDeleteBinLine/>
<FaHeart />
          <Play />
<Profile><Image src={img} alt="profile" /></Profile>
<Title>Loremss.....</Title>
<RiDeleteBinLine/>
<FaHeart />
          <Play />
<Profile><Image src={img} alt="profile" /></Profile>
<Title>Loremss.....</Title>
<RiDeleteBinLine/>
<FaHeart />
          <Play />
<Profile><Image src={img} alt="profile" /></Profile>
<Title>Loremss.....</Title>
<RiDeleteBinLine/>
<FaHeart />
          <Play />
<Profile><Image src={img} alt="profile" /></Profile>
<Title>Loremss.....</Title>
<RiDeleteBinLine/>
<FaHeart />
          </Music>
        </Main>
        <Button>
        <ScrollButton onClick={() => handleScroll('down')}>
          <FaChevronDown />
        </ScrollButton>
        </Button>
      </PopularMain>
    </>
  );
};

export default PopularMusic;


