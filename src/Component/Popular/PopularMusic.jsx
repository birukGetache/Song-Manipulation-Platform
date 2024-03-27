import styled from '@emotion/styled';
import { FaPlay } from 'react-icons/fa';
import img from  "../../assets/R.jpg";
import { FaHeart } from 'react-icons/fa';

const H = styled.p`
font-family: "Teko", sans-serif;
font-size: 20px;
margin-top:0;
 `
 const Main = styled.div`
 margin-left:15px;
 `
 const Music = styled.div`
 display:grid;
 grid-template-columns: auto auto auto auto auto;
 grid-gap:7px;
 `
 const Profile = styled.div`
 width: 30px;
 height: 30px;
margin-left:15px;
 overflow: hidden;
 border-radius: 50%;
 margin-bottom:5px;
 padding-top:0;
 margin-top:0;

`;

 const Image = styled.img`
 width: 100%;
 height: 100%;
 object-fit: cover;

`;
const Play = styled(FaPlay)`

`
const Duration= styled.p`
margin-top:0;
font-weight:lighter;
`
const Title = styled.p`
font-family: "Teko", sans-serif;
font-size:13px;
margin-top:0;`
const PopularMain = styled.div`
margin-left:6px;
`
const PopularMusic =()=>{
return(
    <>
    <PopularMain>
    <H>Popular</H>
    <Main>
    <Music><Play></Play><Profile><Image src={img} alt="profile"></Image></Profile><Title>Loremipsomesdfjadf</Title><Duration>2:56</Duration><FaHeart></FaHeart></Music>
    <Music><Play></Play><Profile><Image src={img} alt="profile"></Image></Profile><Title>Loremipsomesdfjadf</Title><Duration>2:56</Duration><FaHeart></FaHeart></Music>
    <Music><Play></Play><Profile><Image src={img} alt="profile"></Image></Profile><Title>Loremipsomesdfjadf</Title><Duration>2:56</Duration><FaHeart></FaHeart></Music>
    <Music><Play></Play><Profile><Image src={img} alt="profile"></Image></Profile><Title>Loremipsomesdfjadf</Title><Duration>2:56</Duration><FaHeart></FaHeart></Music>
    <Music><Play></Play><Profile><Image src={img} alt="profile"></Image></Profile><Title>Loremipsomesdfjadf</Title><Duration>2:56</Duration><FaHeart></FaHeart></Music>
    <Music><Play></Play><Profile><Image src={img} alt="profile"></Image></Profile><Title>Loremipsomesdfjadf</Title><Duration>2:56</Duration><FaHeart></FaHeart></Music>
    <Music><Play></Play><Profile><Image src={img} alt="profile"></Image></Profile><Title>Loremipsomesdfjadf</Title><Duration>2:56</Duration><FaHeart></FaHeart></Music>
    <Music><Play></Play><Profile><Image src={img} alt="profile"></Image></Profile><Title>Loremipsomesdfjadf</Title><Duration>2:56</Duration><FaHeart></FaHeart></Music>
    <Music><Play></Play><Profile><Image src={img} alt="profile"></Image></Profile><Title>Loremipsomesdfjadf</Title><Duration>2:56</Duration><FaHeart></FaHeart></Music>

    </Main>
    </PopularMain>
    </>
    
)
}
export default PopularMusic;