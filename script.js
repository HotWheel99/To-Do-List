let input = document.querySelector(".do-list__input");
let list = document.querySelector(".do-list__things");
let clearAll = document.querySelector("#clearBtn");
let completedBtn = document.querySelector("#completedBtn");

list.innerHTML = localStorage.getItem("todoList");

console.log(list.innerHTML)

function saveList() {
    localStorage.setItem("todoList", list.innerHTML);
}


input.onkeypress = function (event) {

    if (event.keyCode == 13) {
        if (input.value == "") {
            return
        }
        let li = document.createElement("li");
        let span = document.createElement("span");
        let img = document.createElement("img");
        img.setAttribute("src", "img/garbage.svg");
        li.appendChild(span);
        li.appendChild(img);
        span.innerHTML = input.value;
        list.appendChild(li);
        input.value = "";
    }
    saveList()
}

list.onclick = function () {
    let target = event.target;
    if (target.tagName === "LI" || target.tagName === "SPAN") {
        let li = target.closest("li");
        li.classList.toggle("li-checked");
        // console.dir(target);
    } else if (target.tagName === "IMG") {
        target.parentElement.remove();
    }
    saveList()
}

clearBtn.onclick = function () {
    let listItem = document.querySelectorAll("li");
    for (let i = 0; i < listItem.length; i++) {
        listItem[i].remove();
    }
    saveList()
}

completedBtn.onclick = function () {
    let listItem = document.querySelectorAll("li");

    let tuggler = true;

    for (let i = 0; i < listItem.length; i++){
        if(!listItem[i].classList.contains("li-checked")){
            tuggler = false;
            break
        }
    }

    if (!tuggler) {
        for (let i = 0; i < listItem.length; i++) {
            if (!listItem[i].classList.contains("li-chacked")) {
                listItem[i].classList.add("li-checked");
            }
        }
        tuggler = true;

    } else {
        for (let i = 0; i < listItem.length; i++) {
            listItem[i].classList.remove("li-checked");
        }
        tuggler = false;
    }

    console.log(tuggler);
    console.log(list);
    // saveList()
}

