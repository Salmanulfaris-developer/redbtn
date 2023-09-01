const firebaseConfig = {
    apiKey: "AIzaSyCjvt7XY2Ux4iHA0LM7SmGCsgIWSsIxQNE",
    authDomain: "redbutton-f941a.firebaseapp.com",
    databaseURL: "https://redbutton-f941a-default-rtdb.firebaseio.com",
    projectId: "redbutton-f941a",
    storageBucket: "redbutton-f941a.appspot.com",
    messagingSenderId: "360713384689",
    appId: "1:360713384689:web:2dfd71a221a5b69e71af50"
};
  
firebase.initializeApp(firebaseConfig);
  

var contactFormDB = firebase.database().ref("redButton");
  
document.getElementById("redButton").addEventListener("submit", submitForm);
  
function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var mobileNumber = getElementVal("mobileNumber");
    var location = getElementVal("location");
    var storeName = getElementVal("storeName");
  
    saveMessages(name, emailid, mobileNumber, location, storeName);
  
    document.querySelector(".alert").style.display = "block";
  
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    document.getElementById("contactForm").reset();
  }
  
const saveMessages = (name, emailid, mobileNumber, location, storeName) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      mobileNumber: mobileNumber,
      location: location,
      storeName : storeName,
    });
};
  
const getElementVal = (id) => {
    return document.getElementById(id).value;
};