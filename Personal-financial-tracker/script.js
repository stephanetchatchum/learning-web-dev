const addTransForm = document.getElementById("add-transaction-form");
const addTransButton = document.getElementById("add-transaction");
const cancelTransaction = document.getElementById("cancel");

addTransButton.addEventListener('click', () => {
    addTransForm.style.display = 'flex';
    cancelTransaction.style.display = 'flex';
    console.log("Opened form")
});

cancelTransaction.addEventListener('click', () => {
    addTransForm.style.display = 'none';
    cancelTransaction.style.display = 'none';
    console.log("Closed form")
});