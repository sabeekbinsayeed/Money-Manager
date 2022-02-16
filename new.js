function getValue(inputField) {
    return document.getElementById(inputField).value;
}
document.getElementById('calculate').addEventListener('click', function () {
    // const foodInput = document.getElementById('food-field');
    const incomeValue = getValue('income-field');
    const foodValue = getValue('food-field');
    const rentValue = getValue('rent-field');
    const clothesValue = getValue('clothes-field');

    const total = parseFloat(foodValue) + parseFloat(rentValue) + parseFloat(clothesValue)


    expense = document.getElementById('total-expenses');
    expense.innerText = total;

    balance = document.getElementById('balance');
    balance.innerText = parseFloat(incomeValue) - total;



})

document.getElementById('save-button').addEventListener('click', function () {

    saveValue = getValue('save-field')
    console.log(saveValue)
})