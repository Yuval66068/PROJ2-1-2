let wishList = document.getElementById("list");
let listName = document.getElementById("listName");
function addItem() {
    let li = document.createElement("li");
    li.setAttribute('id', listName.value);
    let text = document.createTextNode(listName.value);
    li.appendChild(text);
    wishList.appendChild(li);
}
function removeItem() {
    let item = document.getElementById(listName.value);
    wishList.removeChild(item);
}