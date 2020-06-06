/* ========================WRITE YOUR JS FROM HERE======================== */

/*Gets an array of form objects that need validation*/
var form = document.querySelector('.needs-validation');

/*Gets the input fields of password and cnfpassword*/
var password = document.getElementById("txtPassword");
var username = document.getElementById("username");

/*Event for onClick of submit button*/
form.addEventListener('submit', function(event){
    /*Check Validity of the form on basis of Specified Parameters*/
    if(form.checkValidity() === false)
    {
        event.preventDefault();
        event.stopPropagation();
    }
    /*After validation check add was-validated to form to tell Html to show the details*/
    form.classList.add('was-validated');

    /*Special Validation Check for Password and confirm Password*/
    if (username.value === "anushka_lamcy") {
        username.setCustomValidity('');
        if(password.value === "17082019") {
            password.setCustomValidity('');
        }
        else {
            password.setCustomValidity('Wrong Password');
        }
    }
    else
    {
        username.setCustomValidity('Wrong Usename');    
        if(password.value === "17082019") {
            password.setCustomValidity('');
        }
        else {
            password.setCustomValidity('Wrong Password');
        }
    }
            
})

