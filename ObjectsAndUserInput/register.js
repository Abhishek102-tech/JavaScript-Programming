let list = document.getElementById("userList");

let savedAcoount = localStorage.getItem("accountHolder");
if (savedAcoount) {
    let accountHolder = JSON.parse(savedAcoount);   
    let listItem = document.createElement("li");
    listItem.textContent = `Name: ${accountHolder.name}, Amount: $${accountHolder.amount.toFixed(2)}`;
    list.appendChild(listItem);
}