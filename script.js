let pw = document.getElementById("password1"); 
let pw2 = document.getElementById("password2"); 

function verifyPassword() {
    //check empty password field  
    if(pw.value == "") {  
        document.getElementById("message").textContent = "*Password between 8 and 15 characters";
        pw.classList.add('error');
        return false;  
    }  
     
   //minimum password length validation  
    if(pw.value.length < 8) {  
        document.getElementById("message").textContent = "*Password must be atleast 8 characters";
        pw.classList.add('error');
        return false;  
    }  
    
  //maximum length of password validation  
    if(pw.value.length > 15) {  
        document.getElementById("message").textContent = "*Password must not exceed 15 characters";
        pw.classList.add('error');
        return false;  
    } else {  
        document.getElementById("message").textContent = "";
        pw.classList.remove('error');
    }  
  }  

function confirmMatch() {
    if (pw.value != pw2.value) {
        document.getElementById("message").textContent = "*Passwords do not match";
        pw.classList.add('error');
        pw2.classList.add('error');
    }
    else {
        document.getElementById("message").textContent = "";
        pw.classList.remove('error');
        pw2.classList.remove('error');
    }
}

pw.addEventListener('blur', verifyPassword);

pw2.addEventListener('blur', confirmMatch);