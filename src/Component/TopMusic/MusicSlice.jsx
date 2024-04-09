import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../Firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

export const fetchMusicFiles = createAsyncThunk(
'music/fetchMusicFiles',
async () => {
    const musicCollectionRef = collection(db, 'Music');
    const querySnapshot = await getDocs(query(musicCollectionRef, where('favorite', '==', 1)));
    const files = querySnapshot.docs.map((doc) => doc.data().fileName);
    // return []
    return files
  }
);

const musicSliceForTop = createSlice({
  name: 'music',
  initialState: {
    musicFiles: [],
    status: 'idle',
    error: null,
    fileName: ''
  },
  reducer:{
    setFileName :  (state, action) =>{
      state.fileName = action.payload
  }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMusicFiles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMusicFiles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.musicFiles = action.payload;
      })
      .addCase(fetchMusicFiles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
export const { setFileName } = musicSliceForTop.actions;
export const {  } = musicSliceForTop.actions;
export default musicSliceForTop.reducer;