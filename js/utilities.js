function Input(inputId)
{
    const Input = document.getElementById(inputId);
    var Amount = parseFloat(Input.value);
    Input.value = '';
    return Amount;


}
function PreviousAmount(boxId)
{
    const BoxField = document.getElementById(boxId);
    var PreviousAmount= parseFloat(BoxField.innerText);
    
    return PreviousAmount;


}
function assignNewValue(id,newAmount)
{
    const field = document.getElementById(id);
    field.innerText = newAmount;
}

function errorHandle(id,functionality)
{
    const Input = document.getElementById(id);
    var Amount = Input.value;

    if(Amount == '')
    {
      alert('Please enter some amount to '+functionality)
      return 0;

    }else if(Amount < 0)
    {
      Input.value = '';
      alert('You cannot enter negative amount to '+functionality);
      return 0;
    }else if(isNaN(Amount))
    {
      alert('Please enter valid amount to '+functionality);
      Input.value = '';
      return 0;

    }    
    
}

