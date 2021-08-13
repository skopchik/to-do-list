"use strict";

const buttonAdd = document.querySelector(".add");

let message = document.querySelector(".message");
let listOfTasks = document.querySelector(".list-tasks");
let todoList = [];

function displayMessages() {
    let displayMessage = "";
    todoList.forEach((item, i) => {
        displayMessage += `
       <li class = "item-list-tasks ${item.done ? "done-task" : ""} ${item.important ? "important" : ""}" 
       id = "item_${i}">${item.description}</li> `;
        listOfTasks.innerHTML = displayMessage;
    });
}


listOfTasks.addEventListener("click", (e) => {
    //let valueTask = listOfTasks.querySelector("#" + e.target.getAttribute("id")).innerHTML;
    let valueTask = e.target.innerHTML;
    todoList.forEach((item) => {
        if (item.description === valueTask) {
            item.done = !item.done;
        }
    });
    localStorage.setItem("todo", JSON.stringify(todoList));
    displayMessages();
});



listOfTasks.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    let valueTask = e.target.innerHTML;
    todoList.forEach((item) => {
        if (item.description === valueTask) {
            item.important = !item.important;
        }
    });
    localStorage.setItem("todo", JSON.stringify(todoList));
    displayMessages();
});



if (localStorage.getItem("todo")) {
    todoList = JSON.parse(localStorage.getItem("todo"));
    displayMessages();
}

buttonAdd.addEventListener("click", () => {
    let newTodo = {
        description: message.value,
        done: false,
        important: false,
    };

    todoList.push(newTodo);
    localStorage.setItem("todo", JSON.stringify(todoList));
    displayMessages();
});

function itemIsDone() {
    let arrItemsTasks = document.querySelectorAll(".item-list-tasks");
    for (let i = 0; i < arrItemsTasks.length; i++) {
        arrItemsTasks[i].addEventListener("click", (e) => {
            e.target.classList.toggle("done-task");
        });

    }
}


/*
const buttonAllDone = document.querySelector(".all-done");
buttonAllDone.addEventListener("click", () => {
    arrItemsTasks.forEach(function (item) {
        item.classList.add("done-task");
    });
});

const buttonNthgDone = document.querySelector(".nthg-done");
buttonNthgDone.addEventListener("click", () => {
    arrItemsTasks.forEach(function (item) {
        item.classList.remove("done-task");
    });
});

 */