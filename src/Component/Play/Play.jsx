import { Description } from "@mui/icons-material";
import img from "../../assets/addis.svg";
const Image= styled.img`
`
const Play =()=>{
   return(
    <ImageContainer>
          <Image src={img} alt="these is Image to play"></Image> <Description></Description>
    </ImageContainer>
  
   )
}
export default Play;