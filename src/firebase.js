// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAmpFwSQG0EInPY23R9V2zCkrp9jMr-Snk",
    authDomain: "datanilai-34726.firebaseapp.com",
    projectId: "datanilai-34726",
    storageBucket: "datanilai-34726.appspot.com",
    messagingSenderId: "192406105016",
    appId: "1:192406105016:web:86c6f537b1c3013350fd4d",
    measurementId: "G-2MYEE4MHLB"
  };

  // Initialize Firebase
  if( firebase.apps.length === 0 ){
    firebase.initializeApp(firebaseConfig);
   }
 
   const db = firebase.firestore();

var db = firebase.firestore();

var daftar_tugas= db.collection('tugas')

var aspek_tambahan = db.collection('aspek_tambahan');

var uts = db.collection('uts');

var uas = db.collection('uas');

function getId(aspek){
    return aspek.toUpperCase().replace(/ /g,"_")+"_KULIAH";
}