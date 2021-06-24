import firebase from 'firebase/app';
import "firebase/auth"

var firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
    appId: process.env.REACT_APP_APP_ID
  };

firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();


/*import firebase from 'firebase/app';

var firebaseConfig = {
    apiKey: "AIzaSyCfThHymFzxH_H5-ITx79UW34_fJv_bG_k",
    authDomain: "nwitter-5bc2e.firebaseapp.com",
    projectId: "nwitter-5bc2e",
    storageBucket: "nwitter-5bc2e.appspot.com",
    messagingSenderId: "209407197554",
    appId: "1:209407197554:web:db5338404c6a6eaf1f9deb"
  };

export default firebase.initializeApp(firebaseConfig);*/