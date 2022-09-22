import app from "./firebase/app.js";
import { subscribeToHellfireClub } from "./firebase/hellfire-club.js";

const txtName = document.getElementById('txtName');
const txtEmail = document.getElementById('txtEmail');
const txtLevel = document.getElementById('txtLevel');
const txtCharacter = document.getElementById('txtCharacter');

const btnSubscrib = document.getElementById('btnSubscrib');

btnSubscrib.addEventListener('click', () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        Character: txtCharacter.value
    }

    subscribeToHellfireClub(subscription);
})

