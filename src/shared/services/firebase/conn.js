import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBGHaoeKEyGAGlKEKf4CnWqhBgBq34NTSE",
  authDomain: "help-dev-76483.firebaseapp.com",
  projectId: "help-dev-76483",
  storageBucket: "help-dev-76483.appspot.com",
  messagingSenderId: "1060764521312",
  appId: "1:1060764521312:web:b88fad6ace4bbded130405"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app)

export { auth, db , storage };
