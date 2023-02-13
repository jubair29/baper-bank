
document.getElementById('btn_withdraw').addEventListener('click', function(){

    const withdrawField = document.getElementById('Withdraw_field');
    const newWithdrawString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawString);
    

    const withdrawTotalElement = document.getElementById('withdraw_total');
    const previousWithdrawString = withdrawTotalElement.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawString);

    const currentWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawAmount;

    const balanceTotalElement = document.getElementById('balance_total');
    const previousTotalBalanceString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousTotalBalanceString);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal; 



    withdrawField.value = "";

})