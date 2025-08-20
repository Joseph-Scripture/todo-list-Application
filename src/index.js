import "./styles.css";
const container = document.querySelector('.container');

import { createTodo } from "./creatingTodos.js";
const submitBtn = document.querySelector('button')
submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    container.append(createTodo())
} )