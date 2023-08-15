//...................................Deposit.....................................

document.getElementById('btn_deposit').addEventListener('click',function(){

          
          const returned =errorHandle('deposit_input',"deposit")

          if(returned==0)
          {return}
          var NewDeposit = Input('deposit_input')
          var previousDeposit = PreviousAmount('deposit_Box_Value')
          var previousTotalBalance = PreviousAmount('balance_Box_Value')

          var Total = previousDeposit + NewDeposit;
          assignNewValue('deposit_Box_Value',Total);

          Total = previousTotalBalance + NewDeposit;
          assignNewValue('balance_Box_Value',Total);
          
          
          
})


