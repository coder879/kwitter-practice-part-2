function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}



var firebaseConfig = {
    apiKey: "AIzaSyDeDcX87MvEz3rHD2Rz4FMj7OssKiXcIx4",
    authDomain: "kwitter-ef978.firebaseapp.com",
    databaseURL: "https://kwitter-ef978-default-rtdb.firebaseio.com",
    projectId: "kwitter-ef978",
    storageBucket: "kwitter-ef978.appspot.com",
    messagingSenderId: "861426793081",
    appId: "1:861426793081:web:822b83d4807fedb2caf2a8",
    measurementId: "G-2G2ZGTH47Q"
};
firebase.initializeApp(firebaseConfig);