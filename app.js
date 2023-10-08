const form = document.querySelector('#form')
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');


form.addEventListener('submit',(e)=>{
   
    if(validateInputs()){
        e.preventDefault();
    }
})

function validateInputs(){
    const usernameval = username.value.trim()
    const emailval =email.value.trim();
    const passwordval = password.value.trim();
    const cpasswordval = cpassword.value.trim();
     let success =true
    if(usernamevalue===''){
        success=false;
        setError(username,'username is required')
    }
    else{
    setSuccess(username)
    }
    if(emailvalue===''){
        success=false;
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailval)){
        success=false;
           setError(email,'please enter a valid eamil')
    }
    else{
        setSuccess(email)
    }
    if(passwordval === ''){
        success = false;
        setError(password,'password is required')
    }
    else if(passwordval.length<8){
    setError(password,'password must be 6characters')
} 
     else{
        setSuccess(password)
     }
     if(cpasswordval==''){
        setError(cpassword,'confirm password')
     }
     else if(cpasswordval!==passwordval){
        success=false;
        setError(cpassword,'passwor does match')
     }
     else{
        setSuccess(cpassword)
     }
     return success;

function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')
    
    errorElement.innerText = '';
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')
    
    errorElement.innerText = '';
    inputGroup.classList.add('success')
  
}

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}