var text = document.querySelector("#name")
var error = document.querySelector(".error")
text.addEventListener('input',function()
    {
         nameRegex = RegExp("^[A-Z]{1}[a-z A-Z]{2,}$");
         if (nameRegex.test(text.value))
         {
            error.textContent="";
         }
         else
         {
            error.textContent="Name is invalid";
         }
    }
 )


 var salaryInput = document.querySelector("#salary")
 var Output = document.querySelector(".salaryOutput")
 Output.textContent=salaryInput.value
 salaryInput.addEventListener('input',function()
 {
    Output.textContent=salaryInput.value
 }
 )


  var Email = document.querySelector("#email")
  var EmailError = document.querySelector(".error-email")
Email.addEventListener('input',function()
{
  email = RegExp("^[a-z A-Z 0-9 .+_-]+@[a-z A-Z 0-9 -.]+[.][a-z A-Z 0-9 -]{2,}$");
  if (email.test(Email.value))
  {
   EmailError.textContent =""
  }
  else
  {
   EmailError.textContent ="Invalid Email"
  }
})

var PhoneNumber = document.querySelector("#number")
var PhoneNumberError = document.querySelector(".error-number")
PhoneNumber.addEventListener('input',function()
{
pnumber = RegExp("^[0-9]{1,2}[ ][0-9]{10}$");
if ( pnumber.test(PhoneNumber.value)) {
PhoneNumberError.textContent=""
}
else
{
PhoneNumberError.textContent="Invalid PhoneNumber"
}
}
)

var Password = document.querySelector("#password")
var passwordError = document.querySelector(".error-password")
Password.addEventListener('input', function()
{
password = RegExp("(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9].{8,}$");
if (password.test(Password.value))
{
    passwordError.textContent=""
}
else
{
    passwordError.textContent="Invalid passward "
}
})