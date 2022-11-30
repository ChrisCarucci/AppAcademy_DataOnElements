// Your code here

window.addEventListener("DOMContentLoaded", event => {
    document.querySelector("button").addEventListener("click", event => {
        event.preventDefault();
        const dataType = document.getElementById("type")
        const shoppingList = document.getElementById("shopping-list");
        const listItem = document.createElement("li");
        listItem.innerText = document.getElementById("name").value;
        listItem.setAttribute("data-type", dataType.value);
        shoppingList.appendChild(listItem);
    })
});
