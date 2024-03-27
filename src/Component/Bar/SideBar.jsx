import React from 'react';
import styled from '@emotion/styled';
import img from '../../assets/addis.svg';
import Broswer from './Broswer';
import { IoMdMail } from "react-icons/io";
import Discover from './Discover';
const SideMain = styled.div`
  margin-top: 50px;
  margin-left: 30px;
  background-color: white;
  width: 84%;
  position: relative;
  border-radius:30px;
`;
const  ImgContainer = styled.div`
display:flex;
justify-content:center;
align-items: center;
object-fit:cover;
position:absolute;
bottom:93%;
border-radius: 50%;
left:35%;
`
const ProfileImg = styled.img`
  position: relative;
  bottom: 50%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const Name= styled.p`
font-family: "Teko", sans-serif;
padding-top:20%;
text-align: center;
margin-bottom:4px;
`
const Email= styled.p`
font-family: "Teko", sans-serif;
margin-botom:0;
font-size: 15px;
padding-left:4px;
margin-top:0px;
`
const EmailIcon= styled(IoMdMail)`
float:left;
margin-top:1px;
font-size:13px;
color: #black;
margin-left:64px;
`
const DesIntro = styled.div`
display:grid;`
const EmailContainer= styled.div`
display:flex;
`
const SideBar = () => {
  return (
    <SideMain>
     <ImgContainer><ProfileImg src={img} alt='addis music player' /></ImgContainer> 
     <DesIntro>
     <Name>Addis Software</Name>
    <EmailContainer> <EmailIcon></EmailIcon> <Email>burab@gamil.com</Email></EmailContainer>
     </DesIntro>
      <Broswer></Broswer>
      <Discover></Discover>
    </SideMain>
  );
};

export default SideBar;