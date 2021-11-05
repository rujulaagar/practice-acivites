
//ADD YOUR FIREBASE LINKS
//Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAIpoGf_qQic90fCNy-z8UpDPlsfTBigew",
  authDomain: "practice-activites.firebaseapp.com",
  databaseURL: "https://practice-activites-default-rtdb.firebaseio.com",
  projectId: "practice-activites",
  storageBucket: "practice-activites.appspot.com",
  messagingSenderId: "320691143009",
  appId: "1:320691143009:web:716dca324e1a9a06cd4520"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpore:"adding user"
    });
}

