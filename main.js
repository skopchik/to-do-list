"use strict";

const buttonAdd = document.querySelector(".add");

let message = document.querySelector(".message");
let listOfTasks = document.querySelector(".list-tasks");
let todoList = [];

listOfTasks.addEventListener("click", (e) => {
    let valueTask = listOfTasks.querySelector("#" + e.target.getAttribute("id")).innerHTML;

    todoList.forEach((item) => {
        if (item.description === valueTask) {
            console.log(item.done);
            item.done = !item.done;
            console.log(item.done);
            localStorage.setItem("todo", JSON.stringify(todoList));
        }
    });
});


function displayMessages() {
    let displayMessage = "";
    todoList.forEach((item, i) => {
        displayMessage += `
       <li class = "item-list-tasks ${item.done ? "done-task" : ""} ${item.important ? "important" : ""}" 
       id = "item_${i}">${item.description}</li> `;
        listOfTasks.innerHTML = displayMessage;
    });
}


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
    displayMessages();
    localStorage.setItem("todo", JSON.stringify(todoList));
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