const firebaseConfig = {
    apiKey: "AIzaSyDTnpSHyRCIHGaR8Z9jaD-eTI5FhRZH8Ks",
    authDomain: "kiwtter-web-app.firebaseapp.com",
    databaseURL: "https://kiwtter-web-app-default-rtdb.firebaseio.com",
    projectId: "kiwtter-web-app",
    storageBucket: "kiwtter-web-app.appspot.com",
    messagingSenderId: "764345820523",
    appId: "1:764345820523:web:2756f0df2868bcafa6982e",
    measurementId: "G-3MFRDQGGHS"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {

user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
});

  }