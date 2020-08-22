import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
export const firebaseConfig = {
    apiKey: "AIzaSyB1uVQa6Z3BXEnp4rHpa20AhYt00LTb-PA",
    authDomain: "marioplan-algo.firebaseapp.com",
    databaseURL: "https://marioplan-algo.firebaseio.com",
    projectId: "marioplan-algo",
    storageBucket: "marioplan-algo.appspot.com",
    messagingSenderId: "474952079324",
    appId: "1:474952079324:web:4b71df55a7045e7e36e119",
    measurementId: "G-V0FMLR1PLN"
};
firebase.initializeApp(firebaseConfig);
export default firebase