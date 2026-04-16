let input = document.querySelector(".do-list__input");
let list = document.querySelector(".do-list__things");
let clearAll = document.querySelector("#clearBtn");
let completedBtn = document.querySelector("#completedBtn");
let tuggler = 0;

list.innerHTML = localStorage.getItem("todoList") || "";

function saveList() {
    localStorage.setItem("todoList", list.innerHTML);
}


input.onkeypress = function (event) {

    if (event.keyCode == 13) {
        let li = document.createElement("li");
        if (input.value == "") {
            return
        }
        li.innerHTML = input.value;
        document.querySelector("ul").appendChild(li);
        input.value = "";
    }
    tuggler = 0;
    saveList()
}

list.onclick = function () {
    let target = event.target;
    if (target.tagName === "LI") {
        console.dir(target);
        target.classList.toggle("li-checked");
    }
    saveList()
}

clearBtn.onclick = function () {
    let listItem = document.querySelectorAll("li");
    for (let i = 0; i < listItem.length; i++) {
        listItem[i].remove();
    }
    tuggler = 0;
    saveList()
}

completedBtn.onclick = function () {
    let listItem = document.querySelectorAll("li");
   
    if (tuggler % 2 == 0) {
        for (let i = 0; i < listItem.length; i++) {
            listItem[i].classList.add("li-checked");
        }
        tuggler++;

    } else {
        for (let i = 0; i < listItem.length; i++) {
            listItem[i].classList.remove("li-checked");
        }
        tuggler--;
    }

    console.log(tuggler);
    saveList()
}

