// function getInputFieldValueById(inputId){
//     const inputField = document.getElementById('inputId');
//     const inputFieldValueString = inputField.value;
//     const inputFieldValue = parseFloat(inputFieldValueString);
//     inputField.value = '';
//     return inputFieldValue;
// }
// function getElementValueById(elementId){
//     const element = document.getElementById(elementId);
//     const elementValueString = element.innerText;
//     const value = parseFloat(elementValueString);
//     return value;
// }

// function setTextElementValueById(elementId, newValue){
//     const textElemet = document.getElementById('elementId');
//     textElemet.innerText = newValue;
// }

// document.getElementById('btn-deposit').addEventListener('click', function(){
//     const newDepositAmount = getInputFieldValueById('deposit-field');
//     const previousDepositTotal = getElementValueById('deposit-total');
//     const total = newDepositAmount + previousDepositTotal;
//     setTextElementValueById('deposit-total', total)

// })

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getTextFieldValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
     setTextElementValueById('withdraw-total', newWithdrawTotal);
     const previosBalanceTotal = getTextElementValueById('balance-total');
     const newBalancTotal = previosBalanceTotal - newWithdrawAmount;
     setTextElementValueById('balance-total', newBalancTotal);
})