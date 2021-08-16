function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldAmount = parseFloat(inputField.value);
    inputField.value = '';
    return inputFieldAmount;
}

function updateTotalAmount(textTotalAmount, newInputAmount) {
    const textTotal = document.getElementById(textTotalAmount);
    const previousTextAmount = parseFloat(textTotal.innerText);
    const totalAmount = newInputAmount + previousTextAmount;
    textTotal.innerText = totalAmount;
}

function getCurentBalance(mainBalance) {
    const previousMainBalance = parseFloat(mainBalance.innerText);
    return previousMainBalance;
}

function updateMainBalance(newAmount, isAdd) {
    const mainBalance = document.getElementById('main-balance');
    // const previousMainBalance = parseFloat(mainBalance.innerText);
    const previousMainBalance = getCurentBalance(mainBalance);
    if (isAdd == true) {
        var totalMainBalance = newAmount + previousMainBalance;
    } else {
        var totalMainBalance = previousMainBalance - newAmount;
    }

    mainBalance.innerText = totalMainBalance;
}

document.getElementById('deposit-btn').addEventListener('click', function() {
    //Get Input Filed  amount
    const newDepositAmount = getInputValue('deposit-input');

    if (newDepositAmount > 0) {
        //Add Amount deposit balance
        updateTotalAmount('deposit-total-amount', newDepositAmount);
        //add main balance
        updateMainBalance(newDepositAmount, true);
    }

})


document.getElementById('withdraw-btn').addEventListener('click', function() {
    //Get Input Filed  amount
    const mainBalance = document.getElementById('main-balance');
    const newwithdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurentBalance(mainBalance);
    if (newwithdrawAmount > 0 && currentBalance > newwithdrawAmount) {
        //Add Amount Withdraw balance 
        updateTotalAmount('withdraw-total-amount', newwithdrawAmount);
        //remove main Balnace amount
        updateMainBalance(newwithdrawAmount, false);
    }


})