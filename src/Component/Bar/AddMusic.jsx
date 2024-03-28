import { RiAddLine } from 'react-icons/ri';
import styled from "@emotion/styled";
import FormtoAddMusic from './FormtoAddMusic';
import { useState } from 'react';
const Add= styled.div`
 display:flex;
 justify-content:center;
 border-radius:50%;
 background-color:#cfd8ed;
 `
const Plus= styled(RiAddLine)`
font-size:40px;`
const P = styled.p`
font-size:18px;
font-family: "Teko", sans-serif;
padding-left: 20px;
margin-bottom:3px;
`
const Main =styled.div`
display:flex;
justify-content:center;
align-items:center;
`
const Btn = styled.button`
background-color: transparent;
border:none;
cursor:pointer;`

const AddMusic =()=>{
    const [pop,setPop] = useState(false);
   const popup = ()=>{
    setPop(true);
   } 
 return(
    <>
      <P>Add Music</P>
      <Main><Btn onClick={()=>{ popup()}}><Add><Plus></Plus></Add></Btn></Main>
      {pop&&<FormtoAddMusic setPop={setPop}></FormtoAddMusic>}
    </>
  
 )
}
export default AddMusic;