const addTransForm = document.getElementById("add-transaction-form");
const addTransButton = document.getElementById("add-transaction");
const cancelTransaction = document.getElementById("cancel");

addTransButton.addEventListener('click', () => {
    addTransForm.style.display = 'block';
    console.log("Opened form")
});

cancelTransaction.addEventListener('click', () => {
    addTransForm.style.display = 'none';
    console.log("Closed form")
});