import React from 'react';
import styled from '@emotion/styled';
import img from '../../assets/addis.svg';
import Broswer from './Broswer';
import { IoMdMail } from "react-icons/io";
import AddMusic from './AddMusic';
import Discover from './Discover';
import { FaBriefcase, FaCog } from 'react-icons/fa';
const SideMain = styled.div`
  margin-top: 50px;
  margin-left: 30px;
  background-color: white;
  width: 84%;
  position: relative;
  border-radius:30px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
`;
const ImgContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  border-radius: 50%;
`;

const ProfileImg = styled.img`
  position: relative;
  bottom: 50%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const Name= styled.p`
font-family: "Teko", sans-serif;
padding-top:10px;
text-align: center;
margin-bottom:4px;
display: inline-block; /* Make the child a block element */
margin-left: auto; /* Auto left margin */
margin-right: auto; /* Auto right margin */
`
const Email= styled.p`
font-family: "Teko", sans-serif;
margin-botom:0;
font-size: 15px;
margin-top:0px;
`
const EmailIcon= styled(IoMdMail)`
float:left;
margin-top:1px;
font-size:13px;
color: #black;
`
const DesIntro = styled.div`
display:grid;`
const EmailContainer= styled.div`
display:flex;
margin-left: auto; /* Auto left margin */
margin-right: auto; /* Auto right margin */
`
const P= styled.button`
font-family:"Teko", sans-serif;
font-size:20px;
margin-top:0;
padding-top:0;
text-align:center;
display:flex;
justify-content:center;
gap:8px;
background-color:#cfd8ed;
border:none;
cursor:pointer;`
const Manage = styled(FaBriefcase)`
float:left;
margin-top:6px;
`
const CointainerBtn= styled.div`
margin:10px;
display:flex;
justify-content:center;
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
      <AddMusic></AddMusic>
     <CointainerBtn> <P><Manage></Manage>manage your list</P></CointainerBtn>
    </SideMain>
  );
};

export default SideBar;