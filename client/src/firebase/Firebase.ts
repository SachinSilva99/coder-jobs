import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "job-seeker-ed0e9.firebaseapp.com",
  projectId: "job-seeker-ed0e9",
  storageBucket: "job-seeker-ed0e9.appspot.com",
  messagingSenderId: "527214775348",
  appId: "1:527214775348:web:63005d24b15409fd6b8e61"
};
// console.log(import.meta.env.VITE_FIREBASE_API_KEY)
export const app = initializeApp(firebaseConfig);
