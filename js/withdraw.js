//...................................Withdraw.....................................

document.getElementById('btn_withdraw').addEventListener('click',function(){

          
  const returned = errorHandle('withdraw_input',"withdraw")

  if(returned==0)
  {return}
  var NewWithdraw = Input('withdraw_input')
  var previousWithdraw = PreviousAmount('withdraw_Box_Value')
  var previousTotalBalance = PreviousAmount('balance_Box_Value')

  var TotalWithdraw = previousWithdraw + NewWithdraw;


  var Total = previousTotalBalance - NewWithdraw;
  if(Total <0)
  {
    alert("Insufficient balance. You can't withdraw now. Please Deposit First");
    Input.value = '';
    return;
  }
 
  if(TotalWithdraw.toString().includes('.'))
  {
      assignNewValue('balance_Box_Value',Total.toFixed('2'));
    
  }else{
    assignNewValue('balance_Box_Value',Total);
  }
  assignNewValue('withdraw_Box_Value',TotalWithdraw);
  
  
  
})


