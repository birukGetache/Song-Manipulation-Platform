import React from 'react';
import styled from '@emotion/styled';
import { FaRegHeart } from 'react-icons/fa';
import { History } from '@mui/icons-material';
const Discovers= styled.p`
font-size:18px;
font-family: "Teko", sans-serif;
padding-left: 20px;
padding-bottom:0px;
margin-bottom:25px;
`
const Des = styled.p`
font-size: 18px;
font-family: "Teko", sans-serif;
margin-top:0;
padding-left:50px;
font-weight:lighter;
`
const Favorite= styled(FaRegHeart)`
margin-left:30px;
float:left;
padding-top:0px;
padding-bottom:2px;
color:black;
stroke-width:20;`
const His= styled(History)`
margin-left:30px;
float:left;
padding-top:0px;
padding-bottom:2px;
color:black;
font-size:18px;
font-weight:bold;
stroke-width:20;
`
const Discover =()=>{
   return(
    <>
    <Discovers>Discover</Discovers>
    <Favorite size={15}></Favorite><Des>Favorite</Des>
    <His size={15}></His><Des>History</Des>
    </>
   
   )
}
export default Discover;