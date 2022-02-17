// functions

function fieldClear() {
    document.getElementById('income-field').value = ''
    document.getElementById('food-field').value = ''
    document.getElementById('rent-field').value = ''
    document.getElementById('clothes-field').value = ''
    document.getElementById('save-field').value = ''
    document.getElementById('total-expenses').innerText = '';
    document.getElementById('balance').innerText = ''
    document.getElementById('remaining-balance').innerText = '';
    document.getElementById('saving-amount').innerText = ''
}

function getValue(inputField) {
    fieldValue = document.getElementById(inputField).value;
    if (fieldValue < 0) {
        document.getElementById('error').style.display = 'block';
        fieldClear();
    }
    if (isNaN(fieldValue)) {
        document.getElementById('error').style.display = 'block'
        fieldClear();

    }

    return fieldValue;

}

// total expense function

function getExpense(food, rent, clothes) {
    foodValue = parseFloat(food);
    rentValue = parseFloat(rent);
    clothesValue = parseFloat(clothes);
    total = foodValue + rentValue + clothesValue;


    return total;
}

// calculate button click
document.getElementById('calculate').addEventListener('click', function () {
    document.getElementById('saving').style.display = 'none'
    document.getElementById('expense').style.display = 'none'
    document.getElementById('error').style.display = 'none'



    const incomeValue = getValue('income-field');
    const foodValue = getValue('food-field');
    const rentValue = getValue('rent-field');
    const clothesValue = getValue('clothes-field');


    const total = getExpense(foodValue, rentValue, clothesValue);
    console.log(typeof total)

    if (total > parseFloat(incomeValue)) {
        document.getElementById('expense').style.display = 'block'
        //field clear
        fieldClear();
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


// save button click
document.getElementById('save-button').addEventListener('click', function () {
    const incomeValue = getValue('income-field');

    saveValue = getValue('save-field')
    savingTotal = (parseFloat(incomeValue) * (parseFloat(saveValue) / 100))

    balance = document.getElementById('balance').innerText
    if (savingTotal > balance) {


        document.getElementById('saving').style.display = 'block'
        fieldClear();
    }
    else if (isNaN(savingTotal) || savingTotal < 0) {
        document.getElementById('saving').style.display = 'block'
        fieldClear();
    }
    else {
        document.getElementById('saving-amount').innerText = savingTotal;
        remainingBalance = parseFloat(balance) - savingTotal;
        document.getElementById('remaining-balance').innerText = remainingBalance
        //saving > balance
    }


})