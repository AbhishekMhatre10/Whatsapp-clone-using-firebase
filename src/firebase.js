import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD-oRX13lgjX_Yk6dNnFv6091siT-_GXIc",
    authDomain: "whatsapp-clone-7e069.firebaseapp.com",
    projectId: "whatsapp-clone-7e069",
    storageBucket: "whatsapp-clone-7e069.appspot.com",
    messagingSenderId: "111535897226",
    appId: "1:111535897226:web:dcf2c5ffe055b400790b73",
    measurementId: "G-CD3Q4FSZVR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  
  export { auth, provider };
  export default db;