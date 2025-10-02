let Bank = {
    accountHolder: {
        name: "",
        amount: 0
    },
    addAccountHolder: function(name, amount) {
        this.accountHolder.name = name;
        this.accountHolder.amount = amount;
    },
    getAccountHolder: function() {
        return this.accountHolder;
    }
};

const age = Number(prompt("Enter your age:"));
if (age >= 18) {
    alert("You are eligible to open an account.");
} else {
    alert("You are not eligible to open an account.");
}

document.getElementById("addBtn").addEventListener("click", function() {
    if (age > 18) {
    let name = document.getElementById("name").value;
    let amount = parseFloat(document.getElementById("amount").value);
    Bank.addAccountHolder(name, amount);
    localStorage.setItem("accountHolder", JSON.stringify(Bank.getAccountHolder()));
    console.log(Bank.getAccountHolder());
    } else {
        alert("You are not eligible to open an account.");
    }
});
let savedAccount = localStorage.getItem("accountHolder");

let list = document.getElementById("userList");
if (savedAccount) {
    let accountObj = JSON.parse(savedAccount);
    console.log(accountObj);
    list.innerHTML = `<li>Name: ${accountObj.name}</li><li>Amount: ${accountObj.amount}</li>`;
}
