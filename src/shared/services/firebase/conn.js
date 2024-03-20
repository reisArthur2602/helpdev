import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCM7-NRTfGFsKU51CXE3zLhcJNQfUi9kkQ",
  authDomain: "helpdesk-c533a.firebaseapp.com",
  projectId: "helpdesk-c533a",
  storageBucket: "helpdesk-c533a.appspot.com",
  messagingSenderId: "806828814781",
  appId: "1:806828814781:web:88489343492510eb1e62d4",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
