const depositBoxValue = document.getElementById('deposit_Box_Value')
const balanceBoxValue = document.getElementById('balance_Box_Value')

//...................................Deposit.....................................

document.getElementById('btn_deposit').addEventListener('click',function(){

          
          const depositInput = document.getElementById('deposit_input');
          var depositAmount = depositInput.value;

          if(depositAmount == '')
          {
            alert('Please enter some amount to deposit')
            return;

          }else if(depositAmount < 0)
          {
            depositInput.value = '';
            alert('You cannot enter negative amount to deposit');
            return;
          }

          var depositTotal = parseFloat(depositBoxValue.innerText)
          depositTotal += parseFloat(depositAmount)
          depositBoxValue.innerText = depositTotal;
        
          var balanceTotal = parseFloat(balanceBoxValue.innerText)
          balanceTotal += parseFloat(depositAmount)
          balanceBoxValue.innerText = balanceTotal.toFixed('2');
          depositInput.value = '';
          
          
})


