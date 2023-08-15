// var i =0;
var j=1200;
const depositBoxValue = document.getElementById('deposit_Box_Value')
const balanceBoxValue = document.getElementById('balance_Box_Value')


document.getElementById('btn_deposite').addEventListener('click',function(){

          
          const depositInput = document.getElementById('deposit_input');
          var depositAmount = depositInput.value;

          if(depositInput.value == '')
          {
            alert('Please enter some amount to deposit')
            return;

          }

          var depositTotal = parseFloat(depositBoxValue.innerText)
          depositTotal += parseFloat(depositAmount)
          depositBoxValue.innerText = depositTotal;
        
          j += parseInt(depositAmount);
          balanceBoxValue.innerText= j;
          depositInput.value = '';
          
          
})