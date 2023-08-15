document.getElementById('eye-open').addEventListener('click',function(){

         const password = document.getElementById('pass');
         password.type = 'text'
         const eye_close = document.getElementById('eye-close')
         eye_close.classList.remove('hidden')
})
document.getElementById('eye-close').addEventListener('click',function(){

         const password = document.getElementById('pass');
         password.type = 'password'
         const eye_close = document.getElementById('eye-close')
         eye_close.classList.add('hidden')
})

// ...........Handling required field validationm when fields are kept empty and button is clicked...........
document.getElementById('btn_login').addEventListener('click',function(){

         const emailBox = document.getElementById('email');
         const emailValue = emailBox.value;
         const passBox = document.getElementById('pass');
         const passValue = passBox.value;
       
         

         if (emailValue === '' && passValue === '') {
            emailBox.focus();
            emailBox.classList.remove('outline-[#68478D]');
            emailBox.classList.add('error');
    
            passBox.classList.remove('outline-[#68478D]');
            passBox.classList.add('error');
        }
        else if(emailValue === '' && passValue != ''){
            emailBox.focus();
            c
            emailBox.classList.add('error');
        }
        else if(passValue === '' && emailValue != ''){
            passBox.focus();
            passBox.classList.remove('outline-[#68478D]');
            passBox.classList.add('error');
        }
        
        else {
// .......................Email and Password validation.............................            
            if(emailValue == "fariha@gmail.com" && passValue == "meh123")
         {
            
            window.location.href = 'bank.html';
           
         }
         else{
            // emailBox.value = '';
            // passBox.value = '';
            setTimeout(function() {
                alert("Invalid Credentials entered. Please try again");
            }, 15);
           
            
         }
            emailBox.classList.remove('error');
            passBox.classList.remove('error');
        }

//.............remove red border when typed inside text boxes..........................

        document.getElementById('email').addEventListener('keyup',function(){
            emailBox.classList.remove('error');
            emailBox.classList.add('outline-[#68478D]');
        })
        document.getElementById('pass').addEventListener('keyup',function(){
            passBox.classList.remove('error');
            passBox.classList.add('outline-[#68478D]');
        })
         
})



