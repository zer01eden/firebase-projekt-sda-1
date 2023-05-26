import { app } from "./firebaseConfig";

const login = document.querySelector('#login');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

const logIn = (e) => {
  e.preventDefault();
  const {value: emailValue} = email;
  const {value: passValue} = password;
  console.log(`Email: ${emailValue}`);
  console.log(`Hasło: ${passValue}`);
}

login.addEventListener('submit', logIn);
