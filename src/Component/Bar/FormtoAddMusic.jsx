import React, { useState } from 'react';
import styled from '@emotion/styled';
import { RiCloseLine } from 'react-icons/ri';
import { collection, addDoc} from 'firebase/firestore';
import {  ref, uploadBytes } from 'firebase/storage';
import { getDownloadURL } from 'firebase/storage';
import {db,storage} from '../Firebase';
const PopupWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  z-index:1;
  backdrop-filter: blur(5px);
  height:100%;
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
`;
  const Close = styled(RiCloseLine)`
  margin-left:right;
  font-size:25px;`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  z-index:1;
  background-color:#cfd8ed;
  padding:50px;
  padding-right:20px;
  border-radius:20px;
`;

const FileInput = styled.input`
  margin-bottom: 10px;
  font-family: "Teko", sans-serif;
  font-size: 17px;

  &::-webkit-file-upload-button {
    font-family: "Teko", sans-serif;
    font-size: 17px;
    /* Add other styles as needed */
  }

  &::file-selector-button {
    font-family: "Teko", sans-serif;
    font-size: 17px;
    /* Add other styles as needed */
  }
`;
const ArtistIntput = styled.input`
  margin-bottom: 10px;
  font-family: "Teko", sans-serif;
  font-size: 17px;
  width:90%;
  margin-left:0;
`;
const Btn = styled.button`
  background-color:transparent;
  border:none;
  
  `
  const BtnDiv = styled.div`
  display:flex;
  justify-content:end;
  align-items:center;
  width:100%;
  margin-top:-40px;
  `
 const Submit = styled.button`
 font-family:"Teko",sans-serif;
 font-size:20px;
 `
 const Name= styled.p`
 font-family:"Teko",sans-serif;
 font-size:20px;
 margin:5px;
 width:100%;`


const FormtoAddMusic = (props) => {
  const [file, setFile] = useState(null);
  const [artist, setArtist] = useState(null);

  const handleArtistChange = (e) => {
    setArtist(e.target.value);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile); // Store the file object directly
  };

  const { setPop } = props;

  const close = () => {
    setPop(false);
  };

const handleSubmit = async (event) => {
  event.preventDefault();
  if (file && artist) {
    try {
      const storageRef = ref(storage, `assets/${file.name}`);
      await uploadBytes(storageRef, file);
      const fileUrl = await getDownloadURL(storageRef);
      
      // Now, you can store the file URL in Firestore
      const docRef = await addDoc(collection(db, 'Music'), {
        fileName: file.name,
        artist: artist,
        fileUrl: fileUrl,
        Play: 0,
        favorite: 0
      });

      console.log('Document written with ID: ', docRef.id);
      setPop(false);
    } catch (error) {
      console.error('Error adding document: ', error.message);
    }
  } else {
    console.error('File or artist is missing');
  }
};
  return (
    <PopupWrapper>
      <Form onSubmit={handleSubmit}>
        <BtnDiv><Btn onClick={ close}><Close ></Close></Btn></BtnDiv>
         <Name>Music:</Name> 
         <FileInput type="file" onChange={handleFileChange} />
         <Name>Artist:</Name>    
          <ArtistIntput type="Text" onChange={handleArtistChange} />
        <Submit type="submit">Submit</Submit>
      </Form>
    </PopupWrapper>
  );
};

export default FormtoAddMusic;
