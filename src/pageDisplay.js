import homeImage from "./images/homeImage.jpeg"
import backgroundImage from './images/about.jpeg'
import images from './images/images.jpeg'
import second from './images/second.jpeg'
// import { container } from "webpack";


const homeBtn = document.querySelector('.home');
const aboutBtn = document.querySelector('.about');
const menuBtn = document.querySelector('.menu');
const emptyDiv = document.querySelector('#container')


export function displayHome(){
    const body = document.body;
    body.style = ''
    body.style.backgroundColor = '#F8B259';
    body.style.textAlign = 'center';
    emptyDiv.innerHTML = '';
    const container = document.createElement('div')
    const header = document.createElement('h1')
    header.classList.add('home-header');
    const paragraph = document.createElement('p')
    paragraph.textContent = 'Where beauty meets pleasure'
    paragraph.classList.add('p')
    const header2 = document.createElement('h2');
    header2.textContent = 'Authentic Flavors, Unforgettable Moments.';
    const image = document.createElement('img');
    image.classList.add('homeImage')
    image.src = homeImage;


    container.appendChild(header)
    container.appendChild(paragraph)
    container.appendChild(header2)
    container.appendChild(image)
    emptyDiv.appendChild(container);

    // emptyDiv.appendChild(image)


}


export function displayAbout(){
    emptyDiv.innerHTML = '';
    const body = document.body
    body.style.backgroundColor = 'transparent';
    body.style.backgroundImage = `url(${backgroundImage})`
    body.style.backgroundSize = 'cover';      
    body.style.backgroundPosition = 'center'; 
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundAttachment = 'fixed';

    // Creating Contact
    const contact = document.createElement('p');
    contact.textContent = 'Send Us a Message';
    contact.classList.add('contact-p')
    const newDiv = document.createElement('div')
    const email = document.createElement('p');
    email.classList.add('email');
    const formDetail = document.createElement('form')
    // first input and label
    const firstLabel = document.createElement('label');
    firstLabel.classList.add('first-label');
    firstLabel.textContent = 'Email';
    const firstInput = document.createElement('input');
    firstInput.type = 'email'
    firstInput.classList.add('first-input')
    firstInput.placeholder = 'Enter Your Email';
    // Appending elements into form
    formDetail.appendChild(firstLabel)
    formDetail.appendChild(firstInput)

    // Message context 
    const secondLabel = document.createElement('label');
    secondLabel.textContent = 'Your Message';
    const Area = document.createElement('textarea');
    Area.placeholder = 'Enter Your message';
    const submitBtn = document.createElement('button');
    submitBtn.classList.add('btn');
    submitBtn.textContent = 'Submit';
    submitBtn.type = 'submit';

    submitBtn.addEventListener('click', () => {
        firstInput.value = '';
        Area.value = '';
    })


// Appending to the new div
    newDiv.classList.add('contact-div')
    
    newDiv.appendChild(contact)
    newDiv.appendChild(email)
    newDiv.appendChild(formDetail)

   newDiv.appendChild(secondLabel)
   newDiv.appendChild(Area)
   newDiv.appendChild(submitBtn)
    

// Appending new Div to the original div on the page
    emptyDiv.appendChild(newDiv)

    
}
export function displayMenu(){
    
    const body = document.body;
    // body.innerHTML = '';
    body.style = '';
    emptyDiv.innerHTML = '';
    body.style.backgroundColor = 'white';
    body.style.textAlign = 'center';
    // Mother Div
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-div');
    // First Card to append in content div
    const firstCard = document.createElement('div');
    firstCard.classList.add('card-div')
    const firstImage = document.createElement('img');
    firstImage.src = images;
    // header
    const menuHeader = document.createElement('h2');
    menuHeader.classList.add('menu-header')
    menuHeader.textContent='Menu'
    // p under first card
    const firstParagraph = document.createElement('p');
    firstParagraph.classList.add('first-menu-paragraph')

    firstParagraph.textContent = "We don't just serve we design"

    // Second Card

    const secondDiv = document.createElement('div');
    secondDiv.classList.add('second-div');
    const secondImage = document.createElement('img');
    secondImage.src = second;

    secondDiv.appendChild(secondImage);
   

    // appending in respective divs
    firstCard.appendChild(menuHeader);
    firstCard.appendChild(firstImage);
    firstCard.appendChild(firstParagraph);
    
    // Appending content in main div
    emptyDiv.appendChild(firstCard);
    emptyDiv.appendChild(secondDiv);


}
