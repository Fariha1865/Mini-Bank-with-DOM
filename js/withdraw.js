//...................................Withdraw.....................................

const withdrawBoxValue = document.getElementById('withdraw_Box_Value')
const balanceBoxValue2 = document.getElementById('balance_Box_Value')

document.getElementById('btn_withdraw').addEventListener('click',function(){
  
    const withdrawInput = document.getElementById('withdraw_input');
    var withdrawAmount = withdrawInput.value;
  
    if(withdrawAmount == '')
    {
      alert('Please enter some amount to withdraw')
      return;
  
    }else if(withdrawAmount < 0)
    {
      withdrawInput.value = '';
      alert('You cannot enter negative amount to withdraw');
      return;
    }else if(isNaN(withdrawAmount))
    {
      alert('Please enter valid amount to withdraw');
      withdrawInput.value = '';
      return;

    }
    
    var withdrawTotal = parseFloat(withdrawBoxValue.innerText)
    var balanceTotal = parseFloat(balanceBoxValue2.innerText)
    balanceTotal -= parseFloat(withdrawAmount)
    if(balanceTotal <0)
    {
      alert("Insufficient balance. You can't withdraw now. Please Deposit First");
      withdrawInput.value = '';
      return;
    }

    
    withdrawTotal += parseFloat(withdrawAmount)
    if(withdrawTotal.toString().includes('.'))
    {
        balanceBoxValue2.innerText = balanceTotal.toFixed('2');
    }else{
        balanceBoxValue2.innerText = balanceTotal;
    }
    withdrawBoxValue.innerText = withdrawTotal;
  
    withdrawInput.value = '';
  
  
  })