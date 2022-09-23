import { subscribeToHellfireClub } from "./firebase/hellfire-clube.js";

const txtName = document.getElementById('txtName');
const txtEmail = document.getElementById('txtEmail');
const txtLevel = document.getElementById('txtLevel');
const txtCharacter = document.getElementById('txtCharacter');

const btnSubscrib = document.getElementById('btnSubscrib');

btnSubscrib.addEventListener('click', async () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        Character: txtCharacter.value
    }

    const subscriptionId = await subscribeToHellfireClub(subscription);

    txtName.value = '';
    txtEmail.value = '';
    txtLevel.value = '';
    txtCharacter.value = '';

    alert(`Inscrito com sucesso: ${subscriptionId}`);
})

