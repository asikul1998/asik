/*
1 add event listener to the deposit button.
2 get deposit amount from the deposit input field . 
3 convert string deposit amount to a number .
4  clear the deposit field after getting the value .
5 get the previous total 
6 calculate new deposit total and set the value to the deposit total .
7 get current balance
8 calculate the new balance 
 */ 

 // step-1
document.getElementById('btn-deposit').addEventListener('click', function(){
  // step-2
  const depositField = document.getElementById('deposit-field');
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);
  // step-3
  depositField.value = "";

  // step-4

  const depositTotalElement = document.getElementById('deposit-total');
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);
 //  step-5

  const newDepositTotal = previousDepositTotal + newDepositAmount;
  depositTotalElement.innerText = newDepositTotal ;
 //  step- 6

  const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);

  // step -7

  const newBalancTotal = previousBalanceTotalAmount  + newDepositAmount;
  balanceTotalElement.innerText = newBalancTotal;

})