const addTransForm = document.getElementById("add-transaction-form");
const addTransButton = document.getElementById("add-transaction");
const cancelTransaction = document.getElementById("cancel");
const transForm = document.getElementById("transaction-form");

addTransButton.addEventListener('click', () => {
    addTransForm.style.display = 'block';
    console.log("Opened form")
});

cancelTransaction.addEventListener('click', () => {
    addTransForm.style.display = 'none';
    console.log("Closed form")
});

transForm.addEventListener("submit", function(submit) {
    submit.preventDefault();

    const formData = new FormData(transForm);

    const formProps = Object.fromEntries(formData);

    localStorage.setItem('savedFormData', JSON.stringify(formProps))
    console.log('Save to local storage:', formProps)

    alert('Form data saved successfully!')
});