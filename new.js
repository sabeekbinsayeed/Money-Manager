function getValue(inputField) {
    fieldValue = document.getElementById(inputField).value;
    if (fieldValue < 0) {
        document.getElementById('error').style.display = 'block'
    }

    return fieldValue;

}
document.getElementById('calculate').addEventListener('click', function () {
    // const foodInput = document.getElementById('food-field');
    const incomeValue = getValue('income-field');
    const foodValue = getValue('food-field');
    const rentValue = getValue('rent-field');
    const clothesValue = getValue('clothes-field');

    const total = parseFloat(foodValue) + parseFloat(rentValue) + parseFloat(clothesValue)
    console.log(typeof total)

    if (total > parseFloat(incomeValue)) {
        document.getElementById('expense').style.display = 'block'
    }


    else if (!isNaN(total)) {
        expense = document.getElementById('total-expenses');
        expense.innerText = total;

        balance = document.getElementById('balance');
        balance.innerText = parseFloat(incomeValue) - total;
    }
    else {
        document.getElementById('error').style.display = 'block'
    }





})

document.getElementById('save-button').addEventListener('click', function () {
    const incomeValue = getValue('income-field');

    saveValue = getValue('save-field')
    savingTotal = (parseFloat(incomeValue) * (parseFloat(saveValue) / 100))

    balance = document.getElementById('balance').innerText
    if (savingTotal > balance) {


        document.getElementById('saving').style.display = 'block'
    }
    else {
        document.getElementById('saving-amount').innerText = savingTotal;
        remainingBalance = parseFloat(balance) - savingTotal;
        document.getElementById('remaining-balance').innerText = remainingBalance
        //saving > balance
    }


})