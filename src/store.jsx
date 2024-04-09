// store.js
import { configureStore } from '@reduxjs/toolkit';
import musicReducer1 from './Component/Popular/musicSlice';
import musicReducer2 from './Component/TopMusic/MusicSlice';
import musicReducer3 from './Component/Recomended/musicSlice'

export default configureStore({
  reducer: {
    music: musicReducer1,
    topMusic: musicReducer2,
    Recomended: musicReducer3
  },
});




