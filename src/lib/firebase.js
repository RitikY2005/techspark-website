
  import { initializeApp } from "firebase/app";
  import { getDatabase, ref as sRef, push, set } from "firebase/database";
  import { getStorage } from "firebase/storage";
  
  
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASEURL,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  // Initialize services
  const db = getDatabase(app);

  const storage = getStorage(app);
  
  export { db,storage,sRef,push,set };
  
