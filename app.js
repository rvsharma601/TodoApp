let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
    console.log(inp.value);
    // console.dir(ul);
    let li = document.createElement("li");
    li.innerText = inp.value;
    ul.appendChild(li);

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete"); //delete class was added here for delBtn.
    li.appendChild(delBtn);

    inp.value = "";
})

ul.addEventListener("click", function (event) {
    // console.log(event.target.nodeName);
    if(event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        console.log(listItem);
        listItem.remove();
        console.log("deleted");
    } 
})

