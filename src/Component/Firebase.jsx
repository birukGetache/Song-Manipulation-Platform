import { initializeApp } from 'firebase/app';
import { getFirestore,collection, addDoc,where,query} from 'firebase/firestore';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDzU7k9jcIpfGMDiXegpVvyXut_eXlSg1Y",
    authDomain: "music-272ef.firebaseapp.com",
    projectId: "music-272ef",
    storageBucket: "music-272ef.appspot.com",
    messagingSenderId: "54417268507",
    appId: "1:54417268507:web:09f08cbc1e706cb6b9bdbe",
    measurementId: "G-TMKV8Z5WQG"
  };
  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const storage = getStorage(firebaseApp);
  
  export { firebaseApp, db, storage };