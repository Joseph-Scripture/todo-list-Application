import "./styles.css";

import {displayHome, displayAbout, displayMenu} from './creatingTodos';

displayHome();

document.querySelector('.home').addEventListener('click', () => {
    displayHome();
});
document.querySelector('.about').addEventListener('click', () =>{
    displayAbout();
})
document.querySelector('.menu').addEventListener('click', () => {
    displayMenu()
})