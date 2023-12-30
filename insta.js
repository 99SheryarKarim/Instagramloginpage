const firebaseConfig = {
  apiKey: "AIzaSyD-Q0znIzQIXZJ-EwdXj3mh8ALuINYnEiE",
  authDomain: "fir-contact-1dc62.firebaseapp.com",
  databaseURL: "https://fir-contact-1dc62-default-rtdb.firebaseio.com",
  projectId: "fir-contact-1dc62",
  storageBucket: "fir-contact-1dc62.appspot.com",
  messagingSenderId: "394680620570",
  appId: "1:394680620570:web:c6d3a0e11021f8503363a3",
};

firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref("messages");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var inp1 = getInputVal("inp1");
  var inp2 = getInputVal("inp2");
  saveMessage(inp1, inp2);
}

function getInputVal(id) {
  return document.getElementById(id).value;
}

function saveMessage(inp1, inp2) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    inp1: inp1,
    inp2: inp2,
  });
}
