import { app } from "./firebaseConfig";

const form = document.querySelector('#form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

const handleSubmit = (e) => {
  e.preventDefault();
  const {value: emailValue} = email;
  const {value: passValue} = password;
  console.log(`Email: ${emailValue}`);
  console.log(`Hasło: ${passValue}`);
}

form.addEventListener('submit', handleSubmit);
